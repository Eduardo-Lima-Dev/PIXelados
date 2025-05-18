import { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from './prisma'
import CredentialsProvider from 'next-auth/providers/credentials'
import { DefaultSession } from 'next-auth'
import bcrypt from 'bcryptjs'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
    } & DefaultSession['user']
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email e senha são obrigatórios')
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        })

        if (!user) {
          throw new Error('Usuário não encontrado')
        }

        const isPasswordValid = await bcrypt.compare(credentials.password, user.password)

        if (!isPasswordValid) {
          throw new Error('Senha incorreta')
        }

        return {
          id: String(user.id),
          name: user.name,
          email: user.email
        }
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 dias
  },
  callbacks: {
    jwt: async ({ token, user, account }) => {
      console.log('JWT Callback - Token:', token)
      console.log('JWT Callback - User:', user)
      console.log('JWT Callback - Account:', account)
      
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
      }
      return token
    },
    session: async ({ session, token }) => {
      console.log('Session Callback - Session:', session)
      console.log('Session Callback - Token:', token)
      
      if (session?.user) {
        session.user.id = token.id as string
        session.user.email = token.email as string
        session.user.name = token.name as string
      }
      return session
    },
    signIn: async ({ user }) => {
      if (user.id) {
        // Verifica se o usuário já tem uma casa
        const userWithHouses = await prisma.user.findUnique({
          where: { id: Number(user.id) },
          include: {
            houses: true,
            ownedHouses: true
          }
        })

        // Se não tiver casa, cria uma
        if (userWithHouses && userWithHouses.ownedHouses.length === 0) {
          await prisma.house.create({
            data: {
              ownerId: Number(user.id),
              members: {
                connect: { id: Number(user.id) }
              }
            }
          })
        }
      }
      return true
    }
  },
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true
} 