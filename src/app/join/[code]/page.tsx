'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

export default function JoinPage({ params }: { params: { code: string } }) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('Status da sessão:', status)
    console.log('Dados da sessão:', session)
    
    if (status === 'unauthenticated') {
      console.log('Usuário não autenticado, redirecionando para registro...')
      const callbackUrl = `/join/${params.code}`
      router.push(`/login?mode=register&callbackUrl=${encodeURIComponent(callbackUrl)}`)
    }
  }, [status, router, params.code, session])

  const handleJoin = async () => {
    if (!session?.user?.id) {
      console.log('Usuário não autenticado ao tentar entrar na casa')
      toast.error('Você precisa estar logado para entrar na casa')
      return
    }

    setLoading(true)
    try {
      console.log('Tentando entrar na casa com código:', params.code)
      console.log('ID do usuário:', session.user.id)

      const res = await fetch('/api/houses/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: params.code,
          userId: session.user.id
        })
      })

      const data = await res.json()
      console.log('Resposta da API:', data)

      if (res.ok) {
        toast.success('Você entrou na casa com sucesso!')
        router.push('/dashboard')
      } else {
        toast.error(data.error || 'Erro ao entrar na casa')
      }
    } catch (error) {
      console.error('Erro ao entrar na casa:', error)
      toast.error('Erro ao entrar na casa')
    } finally {
      setLoading(false)
    }
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#101828]">
        <div className="text-white">Carregando...</div>
      </div>
    )
  }

  if (status === 'unauthenticated') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#101828]">
        <div className="text-white">Redirecionando para o registro...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#101828] px-4">
      <div className="bg-[#1a2332] p-8 rounded-xl shadow-2xl max-w-md w-full">
        <h1 className="text-2xl font-bold text-white mb-4">Entrar na Casa</h1>
        <p className="text-gray-400 mb-6">
          Você foi convidado para participar de uma casa. Clique no botão abaixo para aceitar o convite.
        </p>
        <button
          onClick={handleJoin}
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 text-lg font-semibold"
        >
          {loading ? 'Entrando...' : 'Entrar na Casa'}
        </button>
      </div>
    </div>
  )
} 