/**
 * @swagger
 * /api/houses:
 *   get:
 *     summary: Lista todas as casas do usuário
 *     tags: [Casas]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de casas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *       401:
 *         description: Não autorizado
 *       500:
 *         description: Erro interno do servidor
 * 
 *   post:
 *     summary: Cria uma nova casa
 *     tags: [Casas]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome da casa
 *               description:
 *                 type: string
 *                 description: Descrição da casa
 *     responses:
 *       201:
 *         description: Casa criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *       401:
 *         description: Não autorizado
 *       500:
 *         description: Erro interno do servidor
 */ 

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export const dynamic = 'force-dynamic'

// Listar casas do usuário
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Você precisa estar autenticado' },
        { status: 401 }
      )
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'Usuário não encontrado' },
        { status: 404 }
      )
    }

    const houses = await prisma.house.findMany({
      where: {
        OR: [
          { ownerId: user.id },
          { members: { some: { id: user.id } } }
        ]
      },
      include: {
        owner: true,
        members: true
      }
    })

    return NextResponse.json(houses)
  } catch (error) {
    console.error('Erro ao buscar casas:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar casas' },
      { status: 500 }
    )
  }
}

// Criar nova casa
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Você precisa estar autenticado' },
        { status: 401 }
      )
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'Usuário não encontrado' },
        { status: 404 }
      )
    }

    const house = await prisma.house.create({
      data: {
        ownerId: user.id,
        members: {
          connect: { id: user.id }
        }
      },
      include: {
        owner: true,
        members: true
      }
    })

    return NextResponse.json(house, { status: 201 })
  } catch (error) {
    console.error('Erro ao criar casa:', error)
    return NextResponse.json(
      { error: 'Erro ao criar casa' },
      { status: 500 }
    )
  }
} 