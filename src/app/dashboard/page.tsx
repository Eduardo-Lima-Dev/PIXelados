"use client"

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import ExpenseList from '@/components/ExpenseList'
import InviteButton from '@/components/InviteButton'
import TotalsCard from '@/components/TotalsCard'
import Filters from '@/components/Filters'
import AddExpenseModal from '@/components/AddExpenseModal'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { toast } from 'react-hot-toast'
import ConfirmDeleteModal from '@/components/ConfirmDeleteModal'

const monthNames = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
]

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [allExpenses, setAllExpenses] = useState<any[]>([])
  const [filteredExpenses, setFilteredExpenses] = useState<any[]>([])
  const [users, setUsers] = useState<any[]>([])
  const [filters, setFilters] = useState<any>({})
  const [houseId, setHouseId] = useState<number | null>(null)
  const [categories, setCategories] = useState<string[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedHouseId, setSelectedHouseId] = useState<number | null>(null)
  const [currentMonth, setCurrentMonth] = useState(() => {
    const now = new Date()
    return { month: now.getMonth(), year: now.getFullYear() }
  })
  const [editingExpense, setEditingExpense] = useState<any | null>(null)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [expenseToDelete, setExpenseToDelete] = useState<any | null>(null)

  const loadAllExpenses = async () => {
    if (!houseId) return

    try {
      const res = await fetch(`/api/expenses?houseId=${houseId}`)
      const data = await res.json()
      if (Array.isArray(data)) {
        setAllExpenses(data)
        setCategories([...new Set(data.map(e => e.category).filter(Boolean))])
      }
    } catch (err) {
      console.error('Erro ao buscar despesas:', err)
    }
  }

  const loadFilteredExpenses = async () => {
    if (!houseId) return

    const params = new URLSearchParams({ houseId: String(houseId) })
    if (filters.category) params.append('category', filters.category)
    if (filters.status) params.append('status', filters.status)
    if (filters.userId) params.append('userId', filters.userId)
    if (filters.recurring) params.append('recurring', filters.recurring)

    try {
      const res = await fetch(`/api/expenses?${params.toString()}`)
      const data = await res.json()
      if (Array.isArray(data)) {
        setFilteredExpenses(data)
      }
    } catch (err) {
      console.error('Erro ao buscar despesas filtradas:', err)
    }
  }

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  useEffect(() => {
    if (status === 'authenticated') {
      // Buscar casa atual
      fetch('/api/houses/current')
        .then(res => res.json())
        .then(data => {
          if (data.id) {
            setHouseId(data.id)
            setUsers(data.members || [])
          }
        })
        .catch(err => console.error('Erro ao buscar casa:', err))
    }
  }, [status])

  useEffect(() => {
    loadAllExpenses()
  }, [houseId])

  useEffect(() => {
    loadFilteredExpenses()
  }, [houseId, filters])

  // Adicione este useEffect para polling
  useEffect(() => {
    // Função para recarregar os dados
    const reloadData = async () => {
      await loadAllExpenses();
      await loadFilteredExpenses();
    };

    // Recarrega a cada 5 segundos
    const interval = setInterval(reloadData, 5000);

    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, []); // Array vazio significa que só executa na montagem do componente

  // Funções para navegar entre meses
  const goToPrevMonth = () => {
    setCurrentMonth(prev => {
      if (prev.month === 0) {
        return { month: 11, year: prev.year - 1 }
      }
      return { month: prev.month - 1, year: prev.year }
    })
  }
  const goToNextMonth = () => {
    setCurrentMonth(prev => {
      if (prev.month === 11) {
        return { month: 0, year: prev.year + 1 }
      }
      return { month: prev.month + 1, year: prev.year }
    })
  }

  // Filtra as despesas do mês/ano selecionado
  const monthFilteredExpenses = filteredExpenses.filter((expense) => {
    const date = new Date(expense.date);
    // Se não for recorrente, só aparece no mês/ano exato
    if (!expense.recurring) {
      return (
        date.getMonth() === currentMonth.month &&
        date.getFullYear() === currentMonth.year
      );
    }
    // Se for recorrente, aparece em todos os meses/anos a partir da data original,
    // mas só permite editar o status no mês/ano original
    return (
      (date.getFullYear() < currentMonth.year) ||
      (date.getFullYear() === currentMonth.year && date.getMonth() <= currentMonth.month)
    );
  });

  // Para abrir em modo edição:
  const handleEdit = (expense: any) => {
    setEditingExpense(expense);
    setIsModalOpen(true);
  };

  // Para abrir em modo adicionar:
  const handleAdd = () => {
    setEditingExpense(null);
    setIsModalOpen(true);
  };

  const handleDelete = (expense: any) => {
    setExpenseToDelete(expense);
    setDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!expenseToDelete) return;
    try {
      await fetch(`/api/expenses/${expenseToDelete.id}`, { method: 'DELETE' });
      setDeleteModalOpen(false);
      setExpenseToDelete(null);
      loadAllExpenses();
      loadFilteredExpenses();
      toast.success('Despesa excluída com sucesso!');
    } catch (err) {
      toast.error('Erro ao excluir despesa');
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#0c0c1f] via-[#0d102b] to-[#10141e]">
      <Sidebar />
      <main className="flex-1 p-4 lg:p-8 mt-16 lg:mt-0">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              Despesas da Casa
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            {houseId && <InviteButton houseId={houseId} />}
            <button
              onClick={handleAdd}
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-5 py-2 text-sm font-medium text-white shadow-lg transition hover:brightness-110 relative group w-full sm:w-auto"
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 blur-md opacity-50 group-hover:opacity-75 transition-opacity"></span>
              <span className="relative">Nova Despesa</span>
            </button>
          </div>
        </div>
        <div className="space-y-6">
          <TotalsCard users={users} expenses={allExpenses} />
          <Filters filters={filters} setFilters={setFilters} users={users} categories={categories} />
          {/* Navegação de mês */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <button onClick={goToPrevMonth} className="p-2 rounded-full hover:bg-cyan-900/30 transition">
              <ChevronLeft className="w-5 h-5 text-cyan-400" />
            </button>
            <span className="text-lg font-semibold text-white">
              {monthNames[currentMonth.month]} {currentMonth.year}
            </span>
            <button onClick={goToNextMonth} className="p-2 rounded-full hover:bg-cyan-900/30 transition">
              <ChevronRight className="w-5 h-5 text-cyan-400" />
            </button>
          </div>
          <ExpenseList
            expenses={monthFilteredExpenses}
            onExpenseUpdated={() => {
              console.log('DashboardPage - Atualizando despesas após mudança de status');
              loadAllExpenses();
              loadFilteredExpenses();
            }}
            currentMonth={currentMonth}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </main>
      <AddExpenseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        houseId={houseId || 0}
        onExpenseCreated={() => {
          loadAllExpenses();
          loadFilteredExpenses();
        }}
        editingExpense={editingExpense}
        mode={editingExpense ? 'edit' : 'add'}
      />
      <ConfirmDeleteModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  )
} 