import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export const runtime = 'nodejs'

export async function middleware(request: Request) {
  const token = await getToken({ 
    req: request as any,
    secret: process.env.NEXTAUTH_SECRET
  })
  
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/houses/:path*', '/api/expenses/:path*']
} 