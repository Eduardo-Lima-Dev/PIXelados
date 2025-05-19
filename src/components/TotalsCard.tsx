import React from 'react'

interface TotalsCardProps {
  users: any[];
  expenses: any[];
}

export default function TotalsCard({ users, expenses }: TotalsCardProps) {
  const totalExpenses = expenses.reduce((acc, exp) => acc + exp.value, 0);
  const perPerson = totalExpenses / (users.length || 1);

  return (
    <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-xl bg-[#1a2332] p-6 shadow-lg">
        <h3 className="mb-2 text-sm font-medium text-gray-400">Total de Despesas</h3>
        <p className="text-2xl font-bold text-white">
          R$ {totalExpenses.toFixed(2)}
        </p>
      </div>
      <div className="rounded-xl bg-[#1a2332] p-6 shadow-lg">
        <h3 className="mb-2 text-sm font-medium text-gray-400">Por Pessoa</h3>
        <p className="text-2xl font-bold text-white">
          R$ {perPerson.toFixed(2)}
        </p>
      </div>
      <div className="rounded-xl bg-[#1a2332] p-6 shadow-lg">
        <h3 className="mb-2 text-sm font-medium text-gray-400">Membros</h3>
        <p className="text-2xl font-bold text-white">
          {users.length}
        </p>
      </div>
    </div>
  );
} 