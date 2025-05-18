import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Listar despesas (com filtros)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const houseId = searchParams.get('houseId')
    const userId = searchParams.get('userId')

    if (!houseId) {
      return NextResponse.json({ error: 'houseId é obrigatório' }, { status: 400 })
    }

    const where: any = {
      houseId: Number(houseId)
    }

    if (userId) {
      where.participants = {
        some: {
          userId: Number(userId)
        }
      }
    }

    const expenses = await prisma.expense.findMany({
      where,
      include: {
        participants: {
          include: {
            user: true
          }
        },
        createdBy: true
      }
    })

    return NextResponse.json(expenses)
  } catch (error) {
    console.error('Erro ao buscar despesas:', error)
    return NextResponse.json({ error: 'Erro ao buscar despesas' }, { status: 500 })
  }
}

// Criar nova despesa
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, amount, dueDate, recurring, createdById, houseId, participants } = body

    if (!title || !amount || !dueDate || !createdById || !houseId) {
      return NextResponse.json({ error: 'Campos obrigatórios faltando' }, { status: 400 })
    }

    const expense = await prisma.expense.create({
      data: {
        title,
        amount: Number(amount),
        dueDate: new Date(dueDate),
        recurring: recurring ?? false,
        createdById: Number(createdById),
        houseId: Number(houseId),
        participants: {
          create: participants?.map((p: any) => ({
            userId: Number(p.userId),
            amount: Number(p.amount),
            paid: p.paid ?? false
          })) || []
        }
      },
      include: {
        participants: {
          include: {
            user: true
          }
        },
        createdBy: true
      }
    })

    return NextResponse.json(expense, { status: 201 })
  } catch (error) {
    console.error('Erro ao criar despesa:', error)
    return NextResponse.json({ error: 'Erro ao criar despesa' }, { status: 500 })
  }
} 