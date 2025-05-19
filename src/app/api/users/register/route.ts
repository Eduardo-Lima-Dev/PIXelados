import { NextResponse } from 'next/server'
import { hash } from 'bcryptjs'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('Dados recebidos:', body)

    const { name, email, password } = body

    if (!name || !email || !password) {
      console.log('Campos faltando:', { name, email, password })
      return NextResponse.json(
        { error: 'Nome, email e senha são obrigatórios' },
        { status: 400 }
      )
    }

    // Verifica se o usuário já existe
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      console.log('Usuário já existe:', email)
      return NextResponse.json(
        { error: 'Este email já está cadastrado' },
        { status: 400 }
      )
  }

    // Hash da senha
    const hashedPassword = await hash(password, 12)
    console.log('Senha hasheada com sucesso')

    // Cria o usuário e a casa em uma transação
    const result = await prisma.$transaction(async (tx) => {
      console.log('Iniciando transação')
      
      // Cria o usuário
      const user = await tx.user.create({
    data: {
          name,
          email,
          password: hashedPassword,
        },
      })
      console.log('Usuário criado:', user.id)

      // Cria a casa
      const house = await tx.house.create({
        data: {
          ownerId: user.id,
          members: {
            connect: { id: user.id }
          }
        }
      })
      console.log('Casa criada:', house.id)

      return { user, house }
    })

    // Remove a senha do objeto retornado
    const { password: _, ...userWithoutPassword } = result.user
    console.log('Usuário criado com sucesso')

    return NextResponse.json(userWithoutPassword, { status: 201 })
  } catch (error) {
    console.error('Erro detalhado ao registrar usuário:', error)
    return NextResponse.json(
      { error: 'Erro ao criar usuário', details: String(error) },
      { status: 500 }
    )
  }
} 