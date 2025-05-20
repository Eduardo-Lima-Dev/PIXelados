import { useState } from 'react'
import { FaUsers, FaUser, FaMoneyBill, FaCog, FaQrcode, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa'
import { signOut } from 'next-auth/react'

const menu = [
  { icon: <FaQrcode size={22} />, label: 'Dashboard', path: '/dashboard' },
  { icon: <FaUsers size={22} />, label: 'Moradores', path: '/dashboard/members' },
  { icon: <FaUser size={22} />, label: 'Despesas', path: '/dashboard/expenses' },
  { icon: <FaMoneyBill size={22} />, label: 'Convites', path: '/dashboard/invites' },
  { icon: <FaCog size={22} />, label: 'Configurações', path: '/dashboard/settings' },
]

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Botão do menu mobile */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-[#1a2332] text-white hover:bg-[#23243a] transition-colors"
      >
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Overlay para mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:relative min-h-screen bg-[#1a2332] shadow-xl flex flex-col items-center py-6 transition-all duration-300 z-40
          ${isMobileMenuOpen ? 'w-64 translate-x-0' : '-translate-x-full w-64'}
          ${!isMobileMenuOpen ? (expanded ? 'lg:w-64' : 'lg:w-16') : ''}
          lg:translate-x-0
          overflow-y-auto
        `}
        onMouseEnter={() => !isMobileMenuOpen && setExpanded(true)}
        onMouseLeave={() => !isMobileMenuOpen && setExpanded(false)}
      >
        <div className="mb-8 flex flex-col items-center">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-500 mb-6" />
        </div>
        <nav className="flex flex-col gap-2 w-full px-3">
          {menu.map((item, idx) => (
            <a
              key={item.label}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-[#23243a] transition-colors
                ${(expanded || isMobileMenuOpen) ? 'justify-start' : 'justify-center'}
                ${idx === 0 ? 'bg-[#23243a] text-white' : ''}
              `}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-2xl">{item.icon}</span>
              {(expanded || isMobileMenuOpen) && (
                <span className="text-sm font-medium">{item.label}</span>
              )}
            </a>
          ))}
        </nav>
        <button
          onClick={() => signOut({ callbackUrl: '/login' })}
          className={`mt-auto mx-3 flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-[#23243a] transition-colors w-[calc(100%-1.5rem)]
            ${(expanded || isMobileMenuOpen) ? 'justify-start' : 'justify-center'}`}
        >
          <span className="text-2xl"><FaSignOutAlt /></span>
          {(expanded || isMobileMenuOpen) && (
            <span className="text-sm font-medium">Sair</span>
          )}
        </button>
      </aside>
    </>
  )
} 