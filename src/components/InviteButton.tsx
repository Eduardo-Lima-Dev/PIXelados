import { useState } from 'react'
import { toast } from 'react-hot-toast'

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
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-semibold shadow"
      >
        {loading ? 'Gerando...' : 'Gerar link de convite'}
      </button>
      {inviteLink && (
        <div className="flex items-center gap-2 mt-1">
          <input
            type="text"
            value={inviteLink}
            readOnly
            className="bg-gray-800 text-gray-200 px-2 py-1 rounded w-56 text-xs"
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