import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  }

  try {
    const { inviteCode } = await req.json()

    // Busca a casa pelo código de convite
    const house = await prisma.house.findFirst({
      where: {
        inviteCode,
      },
      include: {
        members: {
          include: {
            user: true,
          },
        },
      },
    })

    if (!house) {
      return NextResponse.json(
        { error: 'Código de convite inválido' },
        { status: 404 }
      )
    }

    // Verifica se o usuário já é membro
    const isAlreadyMember = house.members.some(
      (member) => member.user.id === Number(session.user.id)
    )

    if (isAlreadyMember) {
      return NextResponse.json(
        { error: 'Você já é membro desta casa' },
        { status: 400 }
      )
    }

    // Adiciona o usuário como membro da casa
    await prisma.houseMember.create({
      data: {
        userId: Number(session.user.id),
        houseId: house.id,
      },
    })

    return NextResponse.json({ message: 'Membro adicionado com sucesso' })
  } catch (error) {
    console.error('Erro ao processar convite:', error)
    return NextResponse.json(
      { error: 'Erro ao processar convite' },
      { status: 500 }
    )
  }
} 