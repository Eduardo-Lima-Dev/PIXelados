import React from 'react'

interface ExpenseListProps {
  expenses: any[]
}

export default function ExpenseList({ expenses }: ExpenseListProps) {
  if (!expenses || expenses.length === 0) {
    return (
      <div className="rounded-xl bg-[#1a2332] p-8 text-center shadow-lg">
        <p className="text-gray-400">Nenhuma despesa encontrada</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-[#1a2332] p-6 shadow-lg">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Descrição</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Categoria</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Valor</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Status</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Data</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Criado por</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id} className="border-b border-gray-700/50">
                <td className="px-4 py-3 text-sm text-white">{expense.description}</td>
                <td className="px-4 py-3 text-sm text-gray-300">{expense.category}</td>
                <td className="px-4 py-3 text-sm font-medium text-white">
                  R$ {expense.amount.toFixed(2)}
                </td>
                <td className="px-4 py-3 text-sm">
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                      expense.status === 'paid'
                        ? 'bg-green-500/10 text-green-400'
                        : 'bg-yellow-500/10 text-yellow-400'
                    }`}
                  >
                    {expense.status === 'paid' ? 'Pago' : 'Pendente'}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-300">
                  {new Date(expense.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 text-sm text-gray-300">
                  {expense.createdBy?.name || 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 