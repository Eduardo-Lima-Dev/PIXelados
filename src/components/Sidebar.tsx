'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  HomeIcon, 
  BuildingOfficeIcon, 
  DocumentTextIcon, 
  UserIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon 
} from '@heroicons/react/24/outline'

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false)

  const menuItems = [
    { icon: HomeIcon, label: 'Dashboard', href: '/dashboard' },
    { icon: BuildingOfficeIcon, label: 'Casas', href: '/dashboard/houses' },
    { icon: DocumentTextIcon, label: 'Despesas', href: '/dashboard/expenses' },
    { icon: UserIcon, label: 'Perfil', href: '/dashboard/profile' },
  ]

  return (
    <div className={`bg-purple-base text-soft-white h-screen transition-all duration-300 ${isExpanded ? 'w-64' : 'w-20'}`}>
      <div className="p-4 flex justify-between items-center">
        {isExpanded && <h2 className="text-xl font-bold">Pixelados</h2>}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 rounded-lg hover:bg-deep-blue transition-colors"
        >
          {isExpanded ? <ChevronLeftIcon className="w-6 h-6" /> : <ChevronRightIcon className="w-6 h-6" />}
        </button>
      </div>

      <nav className="mt-8">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center px-4 py-3 hover:bg-deep-blue transition-colors"
          >
            <item.icon className="w-6 h-6" />
            {isExpanded && <span className="ml-4">{item.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  )
} 