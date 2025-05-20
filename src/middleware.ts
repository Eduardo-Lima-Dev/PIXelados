import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import type { NextRequest } from 'next/server'

export const runtime = 'nodejs'

export async function middleware(request: NextRequest) {
  const token = await getToken({ 
    req: request as any,
    secret: process.env.NEXTAUTH_SECRET
  })

  // Protege a rota /dashboard
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!token) {
      const url = new URL('/login', request.url)
      url.searchParams.set('callbackUrl', request.nextUrl.pathname)
      return NextResponse.redirect(url)
    }
  }

  // Redireciona usuários autenticados da página de login para o dashboard
  if (request.nextUrl.pathname === '/login' && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/login']
} 