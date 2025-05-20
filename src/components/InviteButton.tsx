import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { FaLink } from 'react-icons/fa'

export default function InviteButton({ houseId }: { houseId: number }) {
  const [inviteLink, setInviteLink] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleInvite = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/houses/invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ houseId }),
      })
      const data = await res.json()
      if (res.ok) {
        setInviteLink(data.link)
        toast.success('Link de convite gerado!')
      } else {
        toast.error(data.error || 'Erro ao gerar convite')
      }
    } catch {
      toast.error('Erro ao gerar convite')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-start gap-2">
      <button
        onClick={handleInvite}
        disabled={loading}
        className="rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-5 py-2 text-sm font-medium text-white shadow-lg transition hover:brightness-110 relative group w-full sm:w-auto"
      >
        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 blur-md opacity-50 group-hover:opacity-75 transition-opacity"></span>
        <span className="relative flex items-center justify-center gap-2">
          <FaLink className="w-4 h-4" />
          {loading ? 'Gerando...' : 'Gerar Link de Convite'}
        </span>
      </button>
      {inviteLink && (
        <div className="flex items-center gap-2 mt-1">
          <input
            type="text"
            value={inviteLink}
            readOnly
            className="bg-gray-800 text-gray-200 px-2 py-1 rounded-xl w-56 text-xs"
            onFocus={e => e.target.select()}
          />
          <button
            onClick={() => {navigator.clipboard.writeText(inviteLink); toast.success('Copiado!')}}
            className="text-blue-400 hover:text-blue-300 text-xs"
          >
            Copiar
          </button>
        </div>
      )}
    </div>
  )
} 