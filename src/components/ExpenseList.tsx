import React, { useState } from 'react'
import StatusSelect from './StatusSelect'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { toast } from 'react-hot-toast'

interface ExpenseListProps {
  expenses: any[]
  onExpenseUpdated: () => void
  currentMonth: { month: number; year: number }
  onEdit: (expense: any) => void
  onDelete: (expense: any) => void
}

export default function ExpenseList({ expenses, onExpenseUpdated, currentMonth, onEdit, onDelete }: ExpenseListProps) {
  const [editingStatus, setEditingStatus] = useState<number | null>(null)

  const handleStatusChange = async (expenseId: number, newStatus: string) => {
    try {
      console.log('ExpenseList - Iniciando atualização de status:', { expenseId, newStatus });
      
      if (!expenseId || !newStatus) {
        console.error('ExpenseList - Dados inválidos:', { expenseId, newStatus });
        toast.error('Dados inválidos para atualização');
        return;
      }

      const response = await fetch(`/api/expenses/${expenseId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await response.json();
      console.log('ExpenseList - Resposta da API:', data);

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao atualizar status');
      }

      toast.success('Status atualizado com sucesso!');
      onExpenseUpdated();
    } catch (error) {
      console.error('ExpenseList - Erro ao atualizar status:', error);
      toast.error('Erro ao atualizar status');
    } finally {
      setEditingStatus(null);
    }
  };

  if (!expenses || expenses.length === 0) {
    return (
      <div className="rounded-xl bg-[#1a2332] p-8 text-center shadow-lg">
        <p className="text-gray-400">Nenhuma despesa encontrada</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-[#1a2332] p-4 lg:p-6 shadow-lg">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="hidden lg:table-header-group">
            <tr className="border-b border-gray-700">
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Nome</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Descrição</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Categoria</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Valor</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Status</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Data</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Criado por</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Ações</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id} className="border-b border-gray-700/50 lg:table-row flex flex-col">
                <td className="px-4 py-3 text-sm text-white lg:table-cell block">
                  <span className="lg:hidden font-medium text-gray-400 mr-2">Nome:</span>
                  {expense.title}
                </td>
                <td className="px-4 py-3 text-sm text-white lg:table-cell block">
                  <span className="lg:hidden font-medium text-gray-400 mr-2">Descrição:</span>
                  {expense.description}
                </td>
                <td className="px-4 py-3 text-sm text-gray-300 lg:table-cell block">
                  <span className="lg:hidden font-medium text-gray-400 mr-2">Categoria:</span>
                  {expense.category}
                </td>
                <td className="px-4 py-3 text-sm font-medium text-white lg:table-cell block">
                  <span className="lg:hidden font-medium text-gray-400 mr-2">Valor:</span>
                  R$ {expense.amount.toFixed(2)}
                </td>
                <td className="px-4 py-3 text-sm lg:table-cell block relative">
                  <span className="lg:hidden font-medium text-gray-400 mr-2">Status:</span>
                  <StatusSelect
                    value={expense.status}
                    onChange={(newStatus) => {
                      console.log('ExpenseList - StatusSelect onChange:', { expenseId: expense.id, newStatus });
                      handleStatusChange(expense.id, newStatus);
                    }}
                    disabled={expense.recurring && (
                      new Date(expense.date).getMonth() !== currentMonth.month ||
                      new Date(expense.date).getFullYear() !== currentMonth.year
                    )}
                  />
                </td>
                <td className="px-4 py-3 text-sm text-gray-300 lg:table-cell block">
                  <span className="lg:hidden font-medium text-gray-400 mr-2">Data:</span>
                  {new Date(expense.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 text-sm text-gray-300 lg:table-cell block">
                  <span className="lg:hidden font-medium text-gray-400 mr-2">Criado por:</span>
                  {expense.createdBy?.name || 'N/A'}
                </td>
                <td className="px-4 py-3 text-sm text-gray-300 lg:table-cell block">
                  <div className="flex gap-3">
                    <button onClick={() => onEdit(expense)} className="text-cyan-400 hover:text-cyan-300">
                      <FaEdit />
                    </button>
                    <button onClick={() => onDelete(expense)} className="text-red-400 hover:text-red-300">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 