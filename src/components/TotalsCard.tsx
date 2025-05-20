import React from 'react'

interface TotalsCardProps {
  users: any[]
  expenses: any[]
}

export default function TotalsCard({ users, expenses }: TotalsCardProps) {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0)
  const totalPaid = expenses
    .filter(expense => expense.status === 'paid')
    .reduce((sum, expense) => sum + expense.amount, 0)
  const totalPending = expenses
    .filter(expense => expense.status === 'pending')
    .reduce((sum, expense) => sum + expense.amount, 0)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="rounded-xl bg-[#1a2332] p-4 lg:p-6 shadow-lg">
        <h3 className="text-sm font-medium text-gray-400 mb-2">Total de Despesas</h3>
        <p className="text-2xl font-bold text-white">R$ {totalExpenses.toFixed(2)}</p>
      </div>

      <div className="rounded-xl bg-[#1a2332] p-4 lg:p-6 shadow-lg">
        <h3 className="text-sm font-medium text-gray-400 mb-2">Total Pago</h3>
        <p className="text-2xl font-bold text-green-400">R$ {totalPaid.toFixed(2)}</p>
      </div>

      <div className="rounded-xl bg-[#1a2332] p-4 lg:p-6 shadow-lg">
        <h3 className="text-sm font-medium text-gray-400 mb-2">Total Pendente</h3>
        <p className="text-2xl font-bold text-yellow-400">R$ {totalPending.toFixed(2)}</p>
      </div>

      <div className="rounded-xl bg-[#1a2332] p-4 lg:p-6 shadow-lg">
        <h3 className="text-sm font-medium text-gray-400 mb-2">Moradores</h3>
        <div className="flex items-center gap-2">
          <p className="text-2xl font-bold text-white">{users.length}</p>
          <p className="text-sm text-gray-300">
            {users.map((user, index) => (
              <span key={user.id}>
                {user.name}
                {index < users.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  )
}