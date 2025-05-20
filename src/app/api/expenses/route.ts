import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { Prisma } from '@prisma/client'

// Função para gerar um ID único
function generateUniqueId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

// Listar despesas (com filtros)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const houseId = searchParams.get('houseId')
    const userId = searchParams.get('userId')
    const category = searchParams.get('category')
    const status = searchParams.get('status')
    const recurring = searchParams.get('recurring')

    if (!houseId) {
      return NextResponse.json({ error: 'houseId é obrigatório' }, { status: 400 })
    }

    const where: any = {
      houseId: Number(houseId)
    }

    if (userId) {
      where.createdById = Number(userId)
    }

    if (category) {
      where.category = category
    }

    if (status) {
      where.status = status
    }

    if (recurring !== null) {
      where.recurring = recurring === 'true'
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
    console.log('Iniciando criação de despesa...')
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Você precisa estar autenticado' },
        { status: 401 }
      )
    }

    const body = await request.json()
    console.log('Dados recebidos na API:', body)
    const { title, description, amount, date, category, recurring, createdById, houseId } = body

    // Validações básicas
    const missingFields = []
    if (!title) missingFields.push('title')
    if (!description) missingFields.push('description')
    if (!amount) missingFields.push('amount')
    if (!date) missingFields.push('date')
    if (!category) missingFields.push('category')
    if (!createdById) missingFields.push('createdById')
    if (!houseId) missingFields.push('houseId')

    if (missingFields.length > 0) {
      console.log('Campos faltando:', missingFields)
      return NextResponse.json(
        { error: 'Campos obrigatórios faltando', fields: missingFields },
        { status: 400 }
      )
    }

    // Busca o usuário
    console.log('Buscando usuário...')
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!user) {
      console.log('Usuário não encontrado:', session.user.email)
      return NextResponse.json(
        { error: 'Usuário não encontrado' },
        { status: 404 }
      )
    }

    // Verifica se o usuário é membro da casa
    console.log('Verificando se usuário é membro da casa...')
    const house = await prisma.house.findFirst({
      where: {
        id: houseId,
        members: {
          some: {
            id: user.id
          }
        }
      }
    })

    if (!house) {
      console.log('Casa não encontrada ou usuário não é membro:', { houseId, userId: user.id })
      return NextResponse.json(
        { error: 'Você não é membro desta casa' },
        { status: 403 }
      )
    }

    // Converte o valor para Float
    const amountFloat = parseFloat(amount)

    // Gera um recurrenceId se for uma despesa recorrente
    const recurrenceId = recurring ? generateUniqueId() : null

    console.log('Criando despesa com dados:', {
      title,
      description,
      amount: amountFloat,
      date: new Date(date),
      category,
      recurring,
      recurrenceId,
      houseId,
      createdById: Number(createdById)
    })

    try {
      // Cria a despesa
      const expenseData: Prisma.ExpenseCreateInput = {
        title,
        description,
        amount: amountFloat,
        date: new Date(date),
        category,
        recurring: recurring || false,
        house: {
          connect: {
            id: houseId
          }
        },
        createdBy: {
          connect: {
            id: Number(createdById)
          }
        },
        status: 'pending',
        participants: {
          create: {
            userId: Number(createdById),
            amount: amountFloat,
            paid: true
          }
        }
      }

      console.log('Dados da despesa:', expenseData)

      const expense = await prisma.expense.create({
        data: expenseData
      })

      console.log('Despesa criada com sucesso:', expense)
      return NextResponse.json(expense)
    } catch (dbError) {
      console.error('Erro ao criar despesa no banco:', dbError)
      if (dbError instanceof Prisma.PrismaClientKnownRequestError) {
        console.error('Código do erro Prisma:', dbError.code)
        console.error('Mensagem do erro Prisma:', dbError.message)
        return NextResponse.json(
          { error: 'Erro ao criar despesa', code: dbError.code, message: dbError.message },
          { status: 500 }
        )
      }
      throw dbError
    }
  } catch (error) {
    console.error('Erro detalhado ao criar despesa:', error)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return NextResponse.json(
        { error: 'Erro ao criar despesa', code: error.code, message: error.message },
        { status: 500 }
      )
    }
    return NextResponse.json(
      { error: 'Erro ao criar despesa', details: error instanceof Error ? error.message : 'Erro desconhecido' },
      { status: 500 }
    )
  }
}