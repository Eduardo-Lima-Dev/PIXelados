import React from 'react'

interface TotalsCardProps {
  users: any[];
  expenses: any[];
}

export default function TotalsCard({ users, expenses }: TotalsCardProps) {
  const totalExpenses = expenses.reduce((acc, expense) => {
    const amount = Number(expense.amount) || 0
    return acc + amount
  }, 0)

  const totalPerPerson = users.length > 0 ? totalExpenses / users.length : 0

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="bg-[#1a2332] rounded-xl p-6 shadow-lg">
        <h3 className="text-sm font-medium text-gray-400 mb-2">Total de Despesas</h3>
        <p className="text-2xl font-bold text-white">
          R$ {totalExpenses.toFixed(2)}
        </p>
      </div>
      <div className="bg-[#1a2332] rounded-xl p-6 shadow-lg">
        <h3 className="text-sm font-medium text-gray-400 mb-2">Por Pessoa</h3>
        <p className="text-2xl font-bold text-white">
          R$ {totalPerPerson.toFixed(2)}
        </p>
      </div>
    </div>
  );
} 