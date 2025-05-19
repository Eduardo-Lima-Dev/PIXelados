import React from 'react'

interface FiltersProps {
  filters: any;
  setFilters: (filters: any) => void;
  users: any[];
  categories: string[];
}

export default function Filters({ filters, setFilters, users, categories }: FiltersProps) {
  return (
    <div className="mb-8 rounded-xl bg-[#1a2332] p-6 shadow-lg">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <select
          value={filters.category || ''}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          className="rounded-md border border-cyan-900 bg-transparent px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition shadow-sm hover:border-cyan-500"
        >
          <option value="">Todas as categorias</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          value={filters.status || ''}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          className="rounded-md border border-cyan-900 bg-transparent px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition shadow-sm hover:border-cyan-500"
        >
          <option value="">Todos os status</option>
          <option value="pending">Pendente</option>
          <option value="paid">Pago</option>
        </select>

        <select
          value={filters.userId || ''}
          onChange={(e) => setFilters({ ...filters, userId: e.target.value })}
          className="rounded-md border border-cyan-900 bg-transparent px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition shadow-sm hover:border-cyan-500"
        >
          <option value="">Todos os membros</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        <select
          value={filters.recurring || ''}
          onChange={(e) => setFilters({ ...filters, recurring: e.target.value })}
          className="rounded-md border border-cyan-900 bg-transparent px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition shadow-sm hover:border-cyan-500"
        >
          <option value="">Todas as despesas</option>
          <option value="true">Recorrentes</option>
          <option value="false">Não recorrentes</option>
        </select>
      </div>
    </div>
  );
} 