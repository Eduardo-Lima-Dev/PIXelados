"use client"

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import ExpenseList from '@/components/ExpenseList'
import InviteButton from '@/components/InviteButton'
import TotalsCard from '@/components/TotalsCard'
import Filters from '@/components/Filters'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [expenses, setExpenses] = useState<any[]>([])
  const [users, setUsers] = useState<any[]>([])
  const [filters, setFilters] = useState<any>({})
  const [houseId, setHouseId] = useState<number | null>(null)
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  useEffect(() => {
    if (status === 'authenticated') {
      // Buscar casa atual
      fetch('/api/houses/current')
        .then(res => res.json())
        .then(data => {
          if (data.id) {
            setHouseId(data.id)
            setUsers(data.members || [])
          }
        })
        .catch(err => console.error('Erro ao buscar casa:', err))
    }
  }, [status])

  useEffect(() => {
    if (!houseId) return

    const params = new URLSearchParams({ houseId: String(houseId) })
    if (filters.category) params.append('category', filters.category)
    if (filters.status) params.append('status', filters.status)
    if (filters.userId) params.append('userId', filters.userId)
    if (filters.recurring) params.append('recurring', filters.recurring)

    fetch(`/api/expenses?${params.toString()}`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setExpenses(data)
          // Extrai categorias únicas
          setCategories([...new Set(data.map(e => e.category).filter(Boolean))])
        }
      })
      .catch(err => console.error('Erro ao buscar despesas:', err))
  }, [houseId, filters])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#101828]">
        <div className="text-white">Carregando...</div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-[#101828]">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Despesas da Casa</h1>
          {houseId && <InviteButton houseId={houseId} />}
        </div>
        <TotalsCard users={users} expenses={expenses} />
        <Filters filters={filters} setFilters={setFilters} users={users} categories={categories} />
        <ExpenseList expenses={expenses} />
      </main>
    </div>
  )
} 