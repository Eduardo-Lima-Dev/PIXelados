import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function GET(
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

    const houseId = Number(params.id)
    if (isNaN(houseId)) {
      return NextResponse.json(
        { error: 'ID da casa inválido' },
        { status: 400 }
      )
    }

    // Busca os membros da casa
    const house = await prisma.house.findUnique({
      where: { id: houseId },
      include: {
        members: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    })

    if (!house) {
      return NextResponse.json(
        { error: 'Casa não encontrada' },
        { status: 404 }
      )
    }

    return NextResponse.json(house.members)
  } catch (error) {
    console.error('Erro ao buscar membros:', error)
    return NextResponse.json([], { status: 200 })
  }
} 