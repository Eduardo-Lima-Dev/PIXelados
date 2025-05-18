import React from 'react'

export default function Filters({ filters, setFilters, users, categories }: {
  filters: any,
  setFilters: (f: any) => void,
  users: any[],
  categories: string[],
}) {
  return (
    <div className="flex flex-wrap gap-3 mb-4">
      <select
        className="bg-gray-800 text-gray-200 px-3 py-2 rounded"
        value={filters.category || ''}
        onChange={e => setFilters((f: any) => ({ ...f, category: e.target.value }))}
      >
        <option value="">Todas categorias</option>
        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
      </select>
      <select
        className="bg-gray-800 text-gray-200 px-3 py-2 rounded"
        value={filters.status || ''}
        onChange={e => setFilters((f: any) => ({ ...f, status: e.target.value }))}
      >
        <option value="">Todos status</option>
        <option value="paid">Pagas</option>
        <option value="pending">Pendentes</option>
      </select>
      <select
        className="bg-gray-800 text-gray-200 px-3 py-2 rounded"
        value={filters.userId || ''}
        onChange={e => setFilters((f: any) => ({ ...f, userId: e.target.value }))}
      >
        <option value="">Todos usuários</option>
        {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
      </select>
      <select
        className="bg-gray-800 text-gray-200 px-3 py-2 rounded"
        value={filters.recurring || ''}
        onChange={e => setFilters((f: any) => ({ ...f, recurring: e.target.value }))}
      >
        <option value="">Todas</option>
        <option value="true">Recorrentes</option>
        <option value="false">Não recorrentes</option>
      </select>
    </div>
  )
} 