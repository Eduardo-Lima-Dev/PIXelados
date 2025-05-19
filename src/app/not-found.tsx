export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#10141e] flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">404</h1>
        <p className="text-gray-400 mb-8">Página não encontrada</p>
        <a
          href="/"
          className="text-blue-500 hover:text-blue-400 transition-colors"
        >
          Voltar para a página inicial
        </a>
      </div>
    </div>
  )
} 