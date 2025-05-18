import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return new NextResponse('Não autorizado', { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email! },
      include: {
        house: true,
      },
    })

    if (!user?.house) {
      return new NextResponse('Usuário não está em nenhuma casa', { status: 404 })
    }

    const house = await prisma.house.findUnique({
      where: { id: user.house.id },
      include: {
        members: true,
      },
    })

    if (!house) {
      return new NextResponse('Casa não encontrada', { status: 404 })
    }

    return NextResponse.json({
      id: house.id,
      name: house.name,
      address: house.address,
      inviteCode: house.inviteCode,
      members: house.members.length,
    })
  } catch (error) {
    console.error('Erro ao buscar casa atual:', error)
    return new NextResponse('Erro interno do servidor', { status: 500 })
  }
} 