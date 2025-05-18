import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { compare } from 'bcryptjs'
import { prisma } from './prisma'
import { JWT } from 'next-auth/jwt'
import { AuthOptions, Session } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
    }
  }
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            console.log('Credenciais faltando:', { email: !!credentials?.email, password: !!credentials?.password })
            return null
          }

          const user = await prisma.user.findUnique({ where: { email: credentials.email } })
          if (!user) {
            console.log('Usuário não encontrado:', credentials.email)
            return null
          }

          if (!user.password) {
            console.log('Usuário sem senha:', credentials.email)
            return null
          }

          const isValid = await compare(credentials.password, user.password)
          if (!isValid) {
            console.log('Senha inválida para:', credentials.email)
            return null
          }

          console.log('Usuário autenticado com sucesso:', credentials.email)
          return { id: String(user.id), name: user.name, email: user.email }
        } catch (error) {
          console.error('Erro na autenticação:', error)
          return null
        }
      },
    }),
  ],
  session: { strategy: 'jwt' as const },
  callbacks: {
    async jwt({ token, user }: { token: JWT, user: any }) {
      if (user) token.id = user.id
      return token
    },
    async session({ session, token }: { session: Session, token: JWT & { id?: string } }) {
      if (token?.id) session.user.id = token.id
      return session
    },
  },
  pages: { signIn: '/login' },
  debug: true,
}

export default NextAuth(authOptions)