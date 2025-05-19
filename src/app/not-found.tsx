import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#10141e] flex items-center justify-center p-4">
      <div className="bg-[#1a1f2e] p-8 rounded-lg shadow-xl max-w-md w-full">
        <div className="text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl text-blue-500">404</span>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Página não encontrada</h1>
            <p className="text-gray-400">
              Ops! Parece que você se perdeu no caminho.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link 
              href="/"
              className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Voltar para o Dashboard
            </Link>
            
            <Link 
              href="/login"
              className="block w-full bg-[#2a2f3d] hover:bg-[#323742] text-gray-300 font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Ir para o Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 