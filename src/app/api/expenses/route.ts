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
    })

    if (!user?.houseId) {
      return new NextResponse('Usuário não está em nenhuma casa', { status: 404 })
    }

    const expenses = await prisma.expense.findMany({
      where: {
        houseId: user.houseId,
      },
      include: {
        paidBy: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        dueDate: 'asc',
      },
    })

    return NextResponse.json(
      expenses.map(expense => ({
        id: expense.id,
        title: expense.title,
        amount: expense.amount,
        dueDate: expense.dueDate,
        status: expense.status,
        paidBy: expense.paidBy.name,
      }))
    )
  } catch (error) {
    console.error('Erro ao buscar despesas:', error)
    return new NextResponse('Erro interno do servidor', { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return new NextResponse('Não autorizado', { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email! },
    })

    if (!user?.houseId) {
      return new NextResponse('Usuário não está em nenhuma casa', { status: 404 })
    }

    const body = await request.json()
    const { title, amount, dueDate, description } = body

    if (!title || !amount || !dueDate) {
      return new NextResponse('Dados incompletos', { status: 400 })
    }

    const expense = await prisma.expense.create({
      data: {
        title,
        amount,
        dueDate,
        description,
        status: 'Pendente',
        houseId: user.houseId,
        paidById: user.id,
      },
      include: {
        paidBy: {
          select: {
            name: true,
          },
        },
      },
    })

    return NextResponse.json({
      id: expense.id,
      title: expense.title,
      amount: expense.amount,
      dueDate: expense.dueDate,
      status: expense.status,
      paidBy: expense.paidBy.name,
    })
  } catch (error) {
    console.error('Erro ao criar despesa:', error)
    return new NextResponse('Erro interno do servidor', { status: 500 })
  }
}