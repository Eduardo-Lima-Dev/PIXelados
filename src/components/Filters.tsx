import React from 'react'

interface FiltersProps {
  filters: any;
  setFilters: (filters: any) => void;
  users: any[];
  categories: string[];
}

export default function Filters({ filters, setFilters, users, categories }: FiltersProps) {
  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev: any) => ({
      ...prev,
      [key]: value
    }))
  }

  const clearFilters = () => {
    setFilters({})
  }

  return (
    <div className="mb-6">
      <div className="flex items-center gap-4">
        <div className="grid flex-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <select
            value={filters.category || ''}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="rounded-xl border border-cyan-900 bg-[#23243a]/70 px-4 py-2 text-white focus:border-cyan-400 focus:outline-none"
          >
            <option value="">Todas as categorias</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            value={filters.userId || ''}
            onChange={(e) => handleFilterChange('userId', e.target.value)}
            className="rounded-xl border border-cyan-900 bg-[#23243a]/70 px-4 py-2 text-white focus:border-cyan-400 focus:outline-none"
          >
            <option value="">Todos os membros</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>

          <select
            value={filters.status || ''}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="rounded-xl border border-cyan-900 bg-[#23243a]/70 px-4 py-2 text-white focus:border-cyan-400 focus:outline-none"
          >
            <option value="">Todos os status</option>
            <option value="paid">Pago</option>
            <option value="pending">Pendente</option>
          </select>

          <select
            value={filters.recurring || ''}
            onChange={(e) => handleFilterChange('recurring', e.target.value)}
            className="rounded-xl border border-cyan-900 bg-[#23243a]/70 px-4 py-2 text-white focus:border-cyan-400 focus:outline-none"
          >
            <option value="">Todas as despesas</option>
            <option value="true">Recorrentes</option>
            <option value="false">Não recorrentes</option>
          </select>
        </div>

        <button
          onClick={clearFilters}
          className="rounded-xl bg-gray-700/50 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700/70 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 whitespace-nowrap"
        >
          Limpar Filtros
        </button>
      </div>
    </div>
  );
} 