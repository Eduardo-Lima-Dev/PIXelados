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
    const { title, description, amount, date, category, recurring, createdById, houseId, status } = body

    console.log('PATCH /api/expenses/[id] - Dados recebidos:', { 
      id: params.id, 
      title,
      description,
      amount,
      date,
      category,
      recurring,
      createdById,
      houseId,
      status
    })

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
        title,
        description,
        amount: Number(amount),
        date: new Date(date),
        category,
        recurring,
        createdById: Number(createdById),
        houseId: Number(houseId),
        status: status || 'pending'
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