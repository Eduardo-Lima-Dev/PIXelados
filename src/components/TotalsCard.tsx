import React from 'react'

export default function TotalsCard({ users, expenses }: { users: any[], expenses: any[] }) {
  if (!users.length) return null
  const total = expenses.reduce((acc, e) => acc + Number(e.amount), 0)
  const equalShare = users.length ? total / users.length : 0
  // Calcula o total atribuído a cada usuário
  const userTotals = users.map(user => {
    const userTotal = expenses.reduce((acc, e) => {
      const part = e.participants?.find((p: any) => p.userId === user.id)
      return acc + (part ? Number(part.amount) : 0)
    }, 0)
    return { ...user, total: userTotal }
  })
  return (
    <div className="bg-[#23243a] rounded-xl p-4 mb-4 flex flex-col gap-2">
      <div className="text-gray-300 text-sm mb-2">Divisão igualitária: <span className="font-bold text-blue-400">R$ {equalShare.toFixed(2)}</span> por pessoa</div>
      <div className="flex flex-col gap-1">
        {userTotals.map(u => (
          <div key={u.id} className="flex justify-between text-gray-200 text-sm">
            <span>{u.name}</span>
            <span className="font-semibold">R$ {u.total.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  )
} 