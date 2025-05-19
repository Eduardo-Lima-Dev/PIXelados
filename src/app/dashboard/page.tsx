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

const monthNames = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
]

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [expenses, setExpenses] = useState<any[]>([])
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

  const loadExpenses = async () => {
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
        setExpenses(data)
        // Extrai categorias únicas
        setCategories([...new Set(data.map(e => e.category).filter(Boolean))])
      }
    } catch (err) {
      console.error('Erro ao buscar despesas:', err)
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
    loadExpenses()
  }, [houseId, filters])

  // Filtra despesas do mês selecionado
  const filteredExpenses = expenses.filter(exp => {
    const date = new Date(exp.date)
    return (
      date.getMonth() === currentMonth.month &&
      date.getFullYear() === currentMonth.year
    )
  })

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

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0c0c1f] via-[#0d102b] to-[#10141e]">
        <div className="text-white">Carregando...</div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#0c0c1f] via-[#0d102b] to-[#10141e]">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              Despesas da Casa
            </span>
          </h1>
          <div className="flex items-center gap-4">
            {houseId && <InviteButton houseId={houseId} />}
            <button
              onClick={() => setIsModalOpen(true)}
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-5 py-2 text-sm font-medium text-white shadow-lg transition hover:brightness-110 relative group"
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 blur-md opacity-50 group-hover:opacity-75 transition-opacity"></span>
              <span className="relative">Nova Despesa</span>
            </button>
          </div>
        </div>
        <TotalsCard users={users} expenses={filteredExpenses} />
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
        <ExpenseList expenses={filteredExpenses} />
      </main>
      <AddExpenseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        houseId={houseId || 0}
        onExpenseCreated={loadExpenses}
      />
    </div>
  )
} 