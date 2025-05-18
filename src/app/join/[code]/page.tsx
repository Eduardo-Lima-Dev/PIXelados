'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { use } from 'react'

export default function JoinHousePage({ params }: { params: Promise<{ code: string }> }) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const { code } = use(params)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/')
      return
    }

    if (status === 'authenticated') {
      handleJoinHouse()
    }
  }, [status, code])

  const handleJoinHouse = async () => {
    try {
      const response = await fetch('/api/houses/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inviteCode: code,
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Erro ao entrar na casa')
      }

      toast.success('Você agora faz parte desta casa!')
      router.push('/dashboard')
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Erro ao processar convite')
      router.push('/dashboard')
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-dark text-soft-white">
        Processando convite...
      </div>
    )
  }

  return null
} 
