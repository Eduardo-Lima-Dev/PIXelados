'use client'

import { useState, useEffect } from 'react'
import { ShareIcon, PlusIcon } from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'
import { AddExpenseModal } from './AddExpenseModal'

interface Expense {
  id: number
  title: string
  amount: number
  dueDate: string
  status: string
  paidBy: string
}

interface House {
  id: number
  name: string
  members: number
  address: string
  inviteCode: string
}

export function DashboardContent() {
  const [isGeneratingLink, setIsGeneratingLink] = useState(false)
  const [isAddExpenseModalOpen, setIsAddExpenseModalOpen] = useState(false)
  const [expenses, setExpenses] = useState<Expense[]>([])
  const [house, setHouse] = useState<House | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchHouseData()
    fetchExpenses()
  }, [])

  const fetchHouseData = async () => {
    try {
      const response = await fetch('/api/houses/current')
      if (!response.ok) throw new Error('Erro ao carregar dados da casa')
      const data = await response.json()
      setHouse(data)
    } catch (error) {
      toast.error('Erro ao carregar dados da casa')
    }
  }

  const fetchExpenses = async () => {
    try {
      const response = await fetch('/api/expenses')
      if (!response.ok) throw new Error('Erro ao carregar despesas')
      const data = await response.json()
      setExpenses(data)
    } catch (error) {
      toast.error('Erro ao carregar despesas')
    } finally {
      setIsLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pago':
        return 'text-paid'
      case 'Pendente':
        return 'text-pending'
      case 'Devendo':
        return 'text-owing'
      default:
        return 'text-soft-white'
    }
  }

  const handleAddExpense = async (data: {
    title: string
    amount: number
    dueDate: string
    description?: string
  }) => {
    try {
      const response = await fetch('/api/expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Erro ao adicionar despesa')

      toast.success('Despesa adicionada com sucesso!')
      setIsAddExpenseModalOpen(false)
      fetchExpenses() // Atualiza a lista de despesas
    } catch (error) {
      toast.error('Erro ao adicionar despesa')
    }
  }

  const handleGenerateInviteLink = async () => {
    if (!house) return

    setIsGeneratingLink(true)
    try {
      const inviteLink = `${window.location.origin}/join/${house.inviteCode}`
      await navigator.clipboard.writeText(inviteLink)
      toast.success('Link de convite copiado para a área de transferência!')
    } catch (error) {
      toast.error('Erro ao gerar link de convite')
    } finally {
      setIsGeneratingLink(false)
    }
  }

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0)
  const pendingExpenses = expenses
    .filter(expense => expense.status === 'Pendente')
    .reduce((sum, expense) => sum + expense.amount, 0)

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-dark text-soft-white">
        Carregando...
      </div>
    )
  }

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-2xl font-bold mb-8 text-soft-white">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-purple-base p-6 rounded-lg shadow-lg border border-deep-blue">
          <h3 className="text-soft-white/70 text-sm">Total de Despesas</h3>
          <p className="text-2xl font-bold text-soft-white">R$ {totalExpenses.toFixed(2)}</p>
        </div>
        <div className="bg-purple-base p-6 rounded-lg shadow-lg border border-deep-blue">
          <h3 className="text-soft-white/70 text-sm">Despesas Pendentes</h3>
          <p className="text-2xl font-bold text-soft-white">R$ {pendingExpenses.toFixed(2)}</p>
        </div>
        <div className="bg-purple-base p-6 rounded-lg shadow-lg border border-deep-blue">
          <h3 className="text-soft-white/70 text-sm">Membros</h3>
          <p className="text-2xl font-bold text-soft-white">{house?.members || 0}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-purple-base p-6 rounded-lg shadow-lg border border-deep-blue">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-soft-white">Minha Casa</h2>
            <button
              onClick={handleGenerateInviteLink}
              disabled={isGeneratingLink || !house}
              className="flex items-center gap-2 px-4 py-2 bg-neon-blue text-soft-white rounded-lg hover:bg-neon-purple transition-colors disabled:opacity-50"
            >
              <ShareIcon className="w-5 h-5" />
              {isGeneratingLink ? 'Gerando...' : 'Convidar'}
            </button>
          </div>
          <div className="space-y-4">
            <div className="border-b border-deep-blue pb-4">
              <h3 className="font-medium text-soft-white">{house?.name || 'Sem casa'}</h3>
              <p className="text-sm text-soft-white/70">Endereço: {house?.address || 'Não definido'}</p>
              <p className="text-sm text-soft-white/70">Membros: {house?.members || 0} pessoas</p>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-soft-white/70">Valor total: R$ {totalExpenses.toFixed(2)}</p>
                <p className="text-sm text-soft-white/70">
                  Valor por pessoa: R$ {house?.members ? (totalExpenses / house.members).toFixed(2) : '0.00'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-base p-6 rounded-lg shadow-lg border border-deep-blue">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-soft-white">Despesas Conjuntas</h2>
            <button
              onClick={() => setIsAddExpenseModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-neon-blue text-soft-white rounded-lg hover:bg-neon-purple transition-colors"
            >
              <PlusIcon className="w-5 h-5" />
              Adicionar
            </button>
          </div>
          <div className="space-y-4">
            {expenses.length === 0 ? (
              <p className="text-soft-white/70 text-center py-4">Nenhuma despesa cadastrada</p>
            ) : (
              expenses.map(expense => (
                <div key={expense.id} className="border-b border-deep-blue pb-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-soft-white">{expense.title}</h3>
                    <span className={`text-sm ${getStatusColor(expense.status)}`}>
                      {expense.status}
                    </span>
                  </div>
                  <p className="text-sm text-soft-white/70">R$ {expense.amount.toFixed(2)}</p>
                  <p className="text-sm text-soft-white/70">Vence em: {expense.dueDate}</p>
                  <p className="text-sm text-soft-white/70">Pago por: {expense.paidBy}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <AddExpenseModal
        isOpen={isAddExpenseModalOpen}
        onClose={() => setIsAddExpenseModalOpen(false)}
        onSubmit={handleAddExpense}
      />
    </div>
  )
} 