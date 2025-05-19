'use client'

import { SessionProvider } from 'next-auth/react'
import { Suspense } from 'react'
import DashboardLoading from './loading'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
      <Suspense fallback={<DashboardLoading />}>
        {children}
      </Suspense>
    </SessionProvider>
  )
} 