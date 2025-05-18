import React from 'react'

export default function ExpenseList({ expenses }: { expenses: any[] }) {
  if (!expenses.length) return <div className="text-gray-400 text-center py-8">Nenhuma despesa encontrada.</div>
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-[#23243a] rounded-xl">
        <thead>
          <tr className="text-gray-400 text-sm">
            <th className="py-2 px-4">Título</th>
            <th className="py-2 px-4">Valor</th>
            <th className="py-2 px-4">Responsável</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Recorrente</th>
            <th className="py-2 px-4">Categoria</th>
            <th className="py-2 px-4">Ações</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id} className="border-b border-[#31324d] text-gray-200">
              <td className="py-2 px-4">{expense.title}</td>
              <td className="py-2 px-4">R$ {Number(expense.amount).toFixed(2)}</td>
              <td className="py-2 px-4">{expense.createdBy?.name || '-'}</td>
              <td className="py-2 px-4">
                {expense.paid ? <span className="text-green-400">Pago</span> : <span className="text-red-400">Pendente</span>}
              </td>
              <td className="py-2 px-4">{expense.recurring ? 'Sim' : 'Não'}</td>
              <td className="py-2 px-4">{expense.category || '-'}</td>
              <td className="py-2 px-4">-</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 