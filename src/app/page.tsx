import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Header */}
      <header className="fixed w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-400">PIXelados</h1>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Entrar
              </Link>
              <Link
                href="/login?mode=register"
                className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600"
              >
                Criar Conta
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Controle de Despesas Compartilhadas
      </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Simplifique a gestão financeira entre moradores com registro de despesas, 
              divisão automática de valores e compartilhamento via link.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/login?mode=register"
                className="bg-blue-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-600"
              >
                Começar Agora
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-800/50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Principais Funcionalidades
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Registro de Despesas
                </h3>
                <p className="text-gray-400">
                  Registre despesas com opções de recorrência e compartilhamento entre moradores.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Divisão Automática
                </h3>
                <p className="text-gray-400">
                  Cálculo automático do valor total e divisão igualitária entre moradores.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Compartilhamento
                </h3>
                <p className="text-gray-400">
                  Compartilhe despesas via link de convite e gerencie facilmente.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Tecnologias Utilizadas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-white mb-2">Next.js</div>
                <p className="text-gray-400 text-center">Framework React</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-white mb-2">PostgreSQL</div>
                <p className="text-gray-400 text-center">Banco de Dados</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-white mb-2">Tailwind CSS</div>
                <p className="text-gray-400 text-center">Estilização</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-white mb-2">TypeScript</div>
                <p className="text-gray-400 text-center">Linguagem</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">PIXelados</h2>
            <p className="text-gray-400">
              Simplificando a gestão financeira em residências compartilhadas
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
