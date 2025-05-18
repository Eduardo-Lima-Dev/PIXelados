import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  try {
    const token = await getToken({ 
      req: request as any,
      secret: process.env.NEXTAUTH_SECRET
    })

    if (!token?.id) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
    }

    const house = await prisma.house.findFirst({
      where: {
        OR: [
          { ownerId: Number(token.id) },
          { members: { some: { id: Number(token.id) } } }
        ]
      },
      include: {
        members: true,
        owner: true
      }
    })

    if (!house) {
      return NextResponse.json({ error: 'Casa não encontrada' }, { status: 404 })
    }

    return NextResponse.json(house)
  } catch (error) {
    console.error('Erro ao buscar casa:', error)
    return NextResponse.json({ error: 'Erro ao buscar casa' }, { status: 500 })
  }
} 