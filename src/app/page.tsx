import Image from "next/image";
import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import TechItem from "@/components/TechItem";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0c0c1f] via-[#0d102b] to-[#10141e] text-white">
      {/* ==========================  HEADER  ========================== */}
      <header className="fixed inset-x-0 top-0 z-50 bg-[#0c0c1f]/70 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              PIXelados
            </span>
          </h1>

          <nav className="flex items-center gap-2">
            <Link
              href="/login"
              className="rounded-md px-4 py-2 text-sm font-medium text-gray-300 transition hover:text-white"
            >
              Entrar
            </Link>
            <Link
              href="/login?mode=register"
              className="rounded-md bg-cyan-500 px-5 py-2 text-sm font-medium text-white shadow hover:bg-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Criar conta
            </Link>
          </nav>
        </div>
      </header>

      {/* ==========================  HERO  ========================== */}
      <section className="relative flex flex-1 items-center justify-center pt-24 pb-32">
        {/* sutil glow */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="pointer-events-none absolute -top-20 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500 opacity-20 blur-[140px]" />
        </div>

        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Controle total das suas <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              despesas compartilhadas
            </span>
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300 sm:text-xl">
            Elimine planilhas confusas e cobranças constrangedoras. O&nbsp;
            <strong>PIXelados</strong> faz a matemática, envia lembretes e mostra
            quem paga o quê – tudo em tempo real.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/login?mode=register"
              className="rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:brightness-110"
            >
              Começar agora
            </Link>
            <a
              href="#features"
              className="group inline-flex items-center gap-2 text-base font-medium text-gray-300 transition hover:text-white"
            >
              Ver como funciona
              <svg
                className="h-4 w-4 translate-x-0 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ==========================  FEATURES  ========================== */}
      <section id="features" className="bg-[#0d102b]/60 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="mb-14 text-center text-3xl font-bold sm:text-4xl">
            Por que escolher o&nbsp;<span className="text-cyan-400">PIXelados?</span>
          </h3>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* feature card */}
            <FeatureCard
              title="Registro inteligente"
              description="Cadastre despesas uma única vez, escolha quem participa e deixe o sistema cuidar do resto."
              iconPath="M12 8v8m0 0l-3-3m3 3l3-3M4 6h16"
            />

            <FeatureCard
              title="Divisão automática"
              description="Algoritmo preciso que divide valores até o centavo — sem espaço para discussões."
              iconPath="M3 12h18M12 3v18"
            />

            <FeatureCard
              title="Notificações em tempo real"
              description="Receba alertas de novos lançamentos, lembretes de pagamento e relatórios semanais."
              iconPath="M12 19a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2Zm6-6V9a6 6 0 1 0-12 0v4l-1.8 3a1 1 0 0 0 .9 1.5h13.8a1 1 0 0 0 .9-1.5L18 13Z"
            />

            <FeatureCard
              title="Links de cobrança"
              description="Envie um link de pagamento individual pelo WhatsApp; os valores são atualizados automaticamente."
              iconPath="M8 11V9a4 4 0 1 1 8 0v2m-9 4h10a2 2 0 1 1 0 4H7a2 2 0 1 1 0-4Z"
            />

            <FeatureCard
              title="Dashboard de insights"
              description="Acompanhe gráficos de gastos, categorias mais onerosas e economize onde faz diferença."
              iconPath="M3 3v18h18M4 15l4-4 4 4 6-6"
            />

            <FeatureCard
              title="Planos que cabem no bolso"
              description="Comece grátis e evolua para recursos premium conforme sua necessidade."
              iconPath="M12 8c-8 0-8 8 0 8s8-8 0-8Zm0 0V2m0 14v6"
            />
          </div>
        </div>
      </section>

      {/* ==========================  TECH STACK  ========================== */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            Performance &nbsp;<span className="text-indigo-400">de ponta</span>
          </h3>

          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <TechItem label="Next.js" detail="SSR & SEO automágicos" />
            <TechItem label="PostgreSQL" detail="Consistência bancária" />
            <TechItem label="Tailwind&nbsp;CSS" detail="Design responsivo" />
            <TechItem label="TypeScript" detail="Segurança de tipos" />
          </ul>
        </div>
      </section>

      {/* ==========================  FOOTER  ========================== */}
      <footer className="border-t border-white/10 bg-[#0c0c1f] py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h4 className="mb-2 text-xl font-semibold text-cyan-400">PIXelados</h4>
          <p className="text-gray-400">
            Transforme as finanças da sua casa&nbsp;— sem estresse, sem matemática manual.
          </p>
          <p className="mt-6 text-xs text-gray-500">
            © {new Date().getFullYear()} PIXelados • Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}