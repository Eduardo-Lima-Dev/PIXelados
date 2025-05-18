import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { v4 as uuidv4 } from 'uuid'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
    }

    const { houseId } = await request.json()
    console.log('houseId recebido:', houseId)

    let house

    if (!houseId) {
      // Se não tem houseId, cria uma nova casa
      house = await prisma.house.create({
        data: {
          ownerId: Number(session.user.id),
          members: {
            connect: { id: Number(session.user.id) }
          }
        }
      })
      console.log('Nova casa criada:', house)
    } else {
      // Se tem houseId, busca a casa existente
      house = await prisma.house.findUnique({
        where: { id: houseId }
      })

      if (!house) {
        return NextResponse.json({ error: 'Casa não encontrada' }, { status: 404 })
      }
    }

    // Gera código único UUID
    const code = uuidv4()
    console.log('Código gerado:', code)

    // Salva o convite no banco
    await prisma.house.update({
      where: { id: house.id },
      data: { inviteCode: code },
    })

    // Gera a URL base
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const inviteLink = `${baseUrl}/join/${code}`

    return NextResponse.json({ 
      code, 
      link: inviteLink,
      houseId: house.id 
    })
  } catch (error) {
    console.error('Erro detalhado ao gerar convite:', error)
    return NextResponse.json({ error: 'Erro ao gerar convite', details: String(error) }, { status: 500 })
  }
} 