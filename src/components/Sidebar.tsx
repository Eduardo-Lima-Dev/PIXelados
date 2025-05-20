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
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-[#23243a] text-white"
      >
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <aside
        className={`fixed lg:relative h-screen bg-[#23243a] shadow-xl flex flex-col items-center py-6 transition-all duration-300 z-40
          ${isMobileMenuOpen ? 'w-56 translate-x-0' : '-translate-x-full w-56'}
          ${!isMobileMenuOpen ? (expanded ? 'lg:w-56' : 'lg:w-16') : ''}
          lg:translate-x-0
        `}
        onMouseEnter={() => !isMobileMenuOpen && setExpanded(true)}
        onMouseLeave={() => !isMobileMenuOpen && setExpanded(false)}
      >
        <div className="mb-8 flex flex-col items-center">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-red-500 mb-6" />
        </div>
        <nav className="flex flex-col gap-6 w-full items-center">
          {menu.map((item, idx) => (
            <a
              key={item.label}
              href={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-[#2d2e4a] transition-colors w-11/12 ${(expanded || isMobileMenuOpen) ? 'justify-start' : 'justify-center'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.icon}
              {(expanded || isMobileMenuOpen) && <span className="ml-2 text-base font-medium">{item.label}</span>}
            </a>
          ))}
        </nav>
        <button
          onClick={() => signOut({ callbackUrl: '/login' })}
          className={`mt-auto flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-[#2d2e4a] transition-colors w-11/12 ${(expanded || isMobileMenuOpen) ? 'justify-start' : 'justify-center'}`}
        >
          <FaSignOutAlt size={22} />
          {(expanded || isMobileMenuOpen) && <span className="ml-2 text-base font-medium">Sair</span>}
        </button>
      </aside>
    </>
  )
} 