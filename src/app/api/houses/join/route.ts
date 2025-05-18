import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    console.log('Sessão do usuário:', session)

    if (!session?.user?.id) {
      console.log('Usuário não autenticado')
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
    }

    const { code } = await request.json()
    console.log('Código recebido:', code)

    if (!code) {
      console.log('Código não fornecido')
      return NextResponse.json({ error: 'Código de convite é obrigatório' }, { status: 400 })
    }

    // Busca a casa pelo código de convite
    const house = await prisma.house.findFirst({ 
      where: { inviteCode: code },
      include: {
        members: true
      }
    })

    console.log('Casa encontrada:', house)

    if (!house) {
      console.log('Casa não encontrada')
      return NextResponse.json({ error: 'Convite inválido' }, { status: 404 })
    }

    // Verifica se o usuário já é membro
    const isMember = house.members.some(member => member.id === Number(session.user.id))
    if (isMember) {
      console.log('Usuário já é membro da casa')
      return NextResponse.json({ error: 'Você já é membro desta casa' }, { status: 400 })
    }

    // Adiciona o usuário à casa
    const updatedHouse = await prisma.house.update({
      where: { id: house.id },
      data: {
        members: { connect: { id: Number(session.user.id) } },
      },
      include: {
        members: true
      }
    })

    console.log('Casa atualizada:', updatedHouse)

    return NextResponse.json({ 
      success: true, 
      houseId: house.id,
      message: 'Você entrou na casa com sucesso!'
    })
  } catch (error) {
    console.error('Erro ao entrar na casa:', error)
    return NextResponse.json({ 
      error: 'Erro ao entrar na casa', 
      details: String(error) 
    }, { status: 500 })
  }
} 