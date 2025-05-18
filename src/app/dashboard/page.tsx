'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Sidebar } from '@/components/Sidebar'
import { DashboardContent } from '@/components/DashboardContent'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/')
    }
  }, [status, router])

  if (status === 'loading') {
    return <div className="flex items-center justify-center min-h-screen bg-dark text-soft-white">Carregando...</div>
  }

  if (!session) {
    return null
  }

  return (
    <div className="flex min-h-screen bg-dark">
      <Sidebar />
      <main className="flex-1">
        <DashboardContent />
      </main>
    </div>
  )
} 