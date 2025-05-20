'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'react-hot-toast'

const expenseSchema = z.object({
  title: z.string().min(3, 'O título deve ter no mínimo 3 caracteres'),
  description: z.string().min(3, 'A descrição deve ter no mínimo 3 caracteres'),
  amount: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: 'O valor deve ser maior que zero',
  }),
  date: z.string().min(1, 'A data é obrigatória'),
  category: z.string().min(1, 'A categoria é obrigatória'),
  recurring: z.boolean(),
  createdById: z.string().min(1, 'Selecione quem fez a despesa'),
})

type ExpenseFormData = z.infer<typeof expenseSchema>

interface AddExpenseModalProps {
  isOpen: boolean
  onClose: () => void
  houseId: number
  onExpenseCreated: () => void
  editingExpense?: any
  mode?: 'add' | 'edit'
}

export default function AddExpenseModal({ isOpen, onClose, houseId, onExpenseCreated, editingExpense, mode }: AddExpenseModalProps) {
  const [loading, setLoading] = useState(false)
  const [members, setMembers] = useState<any[]>([])
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ExpenseFormData>({
    resolver: zodResolver(expenseSchema),
    defaultValues: {
      recurring: false,
      description: '',
      amount: '',
      date: '',
      category: '',
      createdById: ''
    }
  })

  useEffect(() => {
    if (isOpen && houseId) {
      console.log('Buscando membros para a casa:', houseId)
      // Buscar membros da casa
      fetch(`/api/houses/${houseId}/members`)
        .then(res => res.json())
        .then(data => {
          console.log('Resposta da API de membros:', data)
          if (Array.isArray(data)) {
            setMembers(data)
          } else {
            console.error('Resposta inválida da API:', data)
            toast.error('Erro ao carregar membros da casa')
            setMembers([])
          }
        })
        .catch(err => {
          console.error('Erro ao buscar membros:', err)
          toast.error('Erro ao carregar membros da casa')
          setMembers([])
        })
    }
  }, [isOpen, houseId])

  useEffect(() => {
    if (editingExpense) {
      reset({
        title: editingExpense.title,
        description: editingExpense.description,
        amount: editingExpense.amount,
        date: editingExpense.date.split('T')[0],
        category: editingExpense.category,
        recurring: editingExpense.recurring,
        createdById: String(editingExpense.createdById),
      });
    } else {
      reset(); // limpa o formulário para novo
    }
  }, [editingExpense, reset]);

  const onSubmit = async (data: ExpenseFormData) => {
    setLoading(true)
    try {
      let response;
      if (mode === 'edit' && editingExpense) {
        // PATCH para /api/expenses/:id
        response = await fetch(`/api/expenses/${editingExpense.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...data,
            amount: Number(data.amount),
            houseId,
          }),
        })
      } else {
        // POST normal
        response = await fetch('/api/expenses', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...data,
            amount: Number(data.amount),
            houseId,
          }),
        })
      }

      const responseData = await response.json()
      console.log('Resposta da API:', responseData)

      if (!response.ok) {
        throw new Error(responseData.error || 'Erro ao criar despesa')
      }

      toast.success('Despesa criada com sucesso!')
      reset()
      onClose()
      onExpenseCreated()
    } catch (error) {
      console.error('Erro ao criar despesa:', error)
      toast.error(error instanceof Error ? error.message : 'Erro ao criar despesa')
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1a2332] p-6 rounded-xl shadow-2xl max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">
            {mode === 'edit' ? 'Editar Despesa' : 'Nova Despesa'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">Título</label>
            <input
              type="text"
              {...register('title')}
              className="mt-1 block w-full rounded-xl border border-cyan-900 bg-[#23243a]/70 text-white shadow-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 placeholder-gray-400 px-4 py-3"
              placeholder="Digite o título da despesa"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-400">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Descrição</label>
            <input
              type="text"
              {...register('description')}
              className="mt-1 block w-full rounded-xl border border-cyan-900 bg-[#23243a]/70 text-white shadow-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 placeholder-gray-400 px-4 py-3"
              placeholder="Digite a descrição da despesa"
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-400">{errors.description.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Valor</label>
            <div className="mt-1 relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">R$</span>
              <input
                type="text"
                {...register('amount')}
                className="pl-8 block w-full rounded-xl border border-cyan-900 bg-[#23243a]/70 text-white shadow-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 placeholder-gray-400 px-4 py-3"
                placeholder="0,00"
              />
            </div>
            {errors.amount && (
              <p className="mt-1 text-sm text-red-400">{errors.amount.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Data</label>
            <input
              type="date"
              {...register('date')}
              className="mt-1 block w-full rounded-xl border border-cyan-900 bg-[#23243a]/70 text-white shadow-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 placeholder-gray-400 px-4 py-3"
            />
            {errors.date && (
              <p className="mt-1 text-sm text-red-400">{errors.date.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Categoria</label>
            <select
              {...register('category')}
              className="mt-1 block w-full rounded-xl border border-cyan-900 bg-[#23243a]/70 text-white shadow-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 placeholder-gray-400 px-4 py-3"
            >
              <option value="">Selecione uma categoria</option>
              <option value="alimentacao">Alimentação</option>
              <option value="transporte">Transporte</option>
              <option value="moradia">Moradia</option>
              <option value="lazer">Lazer</option>
              <option value="outros">Outros</option>
            </select>
            {errors.category && (
              <p className="mt-1 text-sm text-red-400">{errors.category.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Quem fez a despesa?</label>
            <select
              {...register('createdById')}
              className="mt-1 block w-full rounded-xl border border-cyan-900 bg-[#23243a]/70 text-white shadow-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 placeholder-gray-400 px-4 py-3"
            >
              <option value="">Selecione quem fez a despesa</option>
              {members && members.length > 0 ? (
                members.map((member) => (
                  <option key={member.id} value={member.id}>{member.name}</option>
                ))
              ) : null}
            </select>
            {errors.createdById && (
              <p className="mt-1 text-sm text-red-400">{errors.createdById.message}</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('recurring')}
              id="recurring"
              className="rounded-xl border-cyan-900 bg-[#23243a]/70 text-cyan-500 focus:ring-cyan-400"
            />
            <label htmlFor="recurring" className="text-gray-300 text-sm">Despesa recorrente</label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-5 py-2 text-lg font-semibold text-white shadow-lg transition hover:brightness-110 relative group mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 blur-md opacity-50 group-hover:opacity-75 transition-opacity"></span>
            <span className="relative">{loading ? 'Adicionando...' : 'Adicionar Despesa'}</span>
          </button>
        </form>
      </div>
    </div>
  )
} 