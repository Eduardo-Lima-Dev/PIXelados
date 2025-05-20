import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Você precisa estar autenticado' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { status } = body

    console.log('PATCH /api/expenses/[id] - Dados recebidos:', { id: params.id, status })

    if (!status) {
      return NextResponse.json(
        { error: 'Status é obrigatório' },
        { status: 400 }
      )
    }

    if (status !== 'paid' && status !== 'pending') {
      return NextResponse.json(
        { error: 'Status inválido' },
        { status: 400 }
      )
    }

    // Busca o usuário
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'Usuário não encontrado' },
        { status: 404 }
      )
    }

    // Atualiza a despesa
    const expense = await prisma.expense.update({
      where: {
        id: Number(params.id)
      },
      data: {
        status
      },
      include: {
        createdBy: true
      }
    })

    console.log('PATCH /api/expenses/[id] - Despesa atualizada:', expense)

    return NextResponse.json(expense)
  } catch (error) {
    console.error('Erro ao atualizar despesa:', error)
    return NextResponse.json(
      { error: 'Erro ao atualizar despesa' },
      { status: 500 }
    )
  }
} 