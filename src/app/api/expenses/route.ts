/**
 * @swagger
 * /api/expenses:
 *   get:
 *     summary: Lista todas as despesas da casa atual
 *     tags: [Despesas]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: month
 *         schema:
 *           type: string
 *           format: date
 *         description: Mês para filtrar as despesas (YYYY-MM)
 *     responses:
 *       200:
 *         description: Lista de despesas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   amount:
 *                     type: number
 *                   date:
 *                     type: string
 *                     format: date
 *                   category:
 *                     type: string
 *                   recurring:
 *                     type: boolean
 *                   createdBy:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       name:
 *                         type: string
 *       401:
 *         description: Não autorizado
 *       500:
 *         description: Erro interno do servidor
 * 
 *   post:
 *     summary: Cria uma nova despesa
 *     tags: [Despesas]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - amount
 *               - date
 *               - category
 *             properties:
 *               title:
 *                 type: string
 *                 description: Título da despesa
 *               description:
 *                 type: string
 *                 description: Descrição da despesa
 *               amount:
 *                 type: number
 *                 description: Valor da despesa
 *               date:
 *                 type: string
 *                 format: date
 *                 description: Data da despesa
 *               category:
 *                 type: string
 *                 description: Categoria da despesa
 *               recurring:
 *                 type: boolean
 *                 description: Se a despesa é recorrente
 *     responses:
 *       201:
 *         description: Despesa criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 amount:
 *                   type: number
 *                 date:
 *                   type: string
 *                   format: date
 *                 category:
 *                   type: string
 *                 recurring:
 *                   type: boolean
 *                 createdBy:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *       401:
 *         description: Não autorizado
 *       500:
 *         description: Erro interno do servidor
 */

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { Prisma } from '@prisma/client'

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

    console.log('Criando despesa com dados:', {
      title,
      description,
      amount: Number(amount),
      date: new Date(date),
      category,
      recurring,
      houseId,
      createdById: Number(createdById)
    })

    // Cria a despesa
    const expenseData = {
      title,
      description,
      amount: Number(amount),
      date: new Date(date),
      category,
      recurring: recurring || false,
      houseId,
      createdById: Number(createdById),
      status: 'pending',
      participants: {
        create: {
          userId: Number(createdById),
          amount: Number(amount),
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
  } catch (error) {
    console.error('Erro detalhado ao criar despesa:', error)
    return NextResponse.json(
      { error: 'Erro ao criar despesa', details: error instanceof Error ? error.message : 'Erro desconhecido' },
      { status: 500 }
    )
  }
}