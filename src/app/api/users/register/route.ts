import { hash } from 'bcryptjs'
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log('Dados recebidos:', { ...body, password: '[REDACTED]' })

    if (!body.email || !body.password || !body.name) {
      console.log('Dados incompletos:', { 
        temEmail: !!body.email, 
        temSenha: !!body.password, 
        temNome: !!body.name 
      })
      return NextResponse.json(
        { error: 'Dados incompletos' }, 
        { status: 400 }
      )
    }

    const existing = await prisma.user.findUnique({ 
      where: { email: body.email } 
    })
    
    if (existing) {
      console.log('Email já cadastrado:', body.email)
      return NextResponse.json(
        { error: 'Email já cadastrado' }, 
        { status: 400 }
      )
    }

    const hashedPassword = await hash(body.password, 10)
    console.log('Senha criptografada gerada')

    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashedPassword,
      },
    })

    console.log('Usuário criado com sucesso:', user.id)
    return NextResponse.json(user)
  } catch (error) {
    console.error('Erro detalhado ao registrar usuário:', error)
    return NextResponse.json(
      { error: 'Erro ao registrar usuário' }, 
      { status: 500 }
    )
  }
}
