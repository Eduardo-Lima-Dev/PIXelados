'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'react-hot-toast'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
})

const registerSchema = z.object({
  name: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
})

type LoginFormData = z.infer<typeof loginSchema>
type RegisterFormData = z.infer<typeof registerSchema>

export default function LoginPage() {
  const searchParams = useSearchParams()
  const [isRegistering, setIsRegistering] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'

  useEffect(() => {
    const mode = searchParams.get('mode')
    if (mode === 'register') {
      setIsRegistering(true)
    }
  }, [searchParams])

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const registerForm = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const onLogin = async (data: LoginFormData) => {
    try {
      console.log('Tentando fazer login...')
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
        callbackUrl
      })

      console.log('Resultado do login:', result)

      if (result?.error) {
        throw new Error(result.error)
      }

      toast.success('Login realizado com sucesso!')
      router.push(callbackUrl)
    } catch (error) {
      console.error('Erro no login:', error)
      toast.error('Erro ao fazer login. Verifique suas credenciais.')
    }
  }

  const onRegister = async (data: RegisterFormData) => {
    try {
      console.log('Dados do formulário:', data)
      
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const responseData = await response.json()
      console.log('Resposta do servidor:', responseData)

      if (!response.ok) {
        throw new Error(responseData.error || 'Erro ao criar conta')
      }

      toast.success('Conta criada com sucesso!')
      
      // Fazer login automaticamente após o registro
      const loginResult = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
        callbackUrl
      })

      if (loginResult?.error) {
        throw new Error(loginResult.error)
      }

      // Se houver um código de convite na URL, adiciona o usuário à casa
      const code = callbackUrl.split('/join/')[1]
      if (code) {
        try {
          const joinResponse = await fetch('/api/houses/join', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code }),
          })

          if (joinResponse.ok) {
            toast.success('Você foi adicionado à casa com sucesso!')
            router.push('/dashboard')
          } else {
            const errorData = await joinResponse.json()
            toast.error(errorData.error || 'Erro ao entrar na casa')
            router.push('/dashboard')
          }
        } catch (error) {
          console.error('Erro ao entrar na casa:', error)
          toast.error('Erro ao entrar na casa')
          router.push('/dashboard')
        }
      } else {
        router.push('/dashboard')
      }
    } catch (error) {
      console.error('Erro ao criar conta:', error)
      toast.error(error instanceof Error ? error.message : 'Erro ao criar conta. Tente novamente.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#101828] px-2">
      <div className="flex flex-col md:flex-row bg-[#1a2332] rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full min-h-[600px]">
        <a href="/" className="absolute left-4 top-4 flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors text-sm">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
          Voltar
        </a>

        <div className="hidden md:block md:w-1/2 bg-[#101828] relative">
          <div className="absolute inset-0">
            <Image
              src="/imagem_lateral.png"
              alt="Imagem lateral"
              fill
              style={{ objectFit: 'cover', objectPosition: 'left center' }}
              className="rounded-none"
              priority
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 relative">
          <div className="flex flex-col items-center mb-6 mt-4">
            <Image src="/logo-background.png" alt="Logo" width={120} height={60} className="mb-2" />
            <h2 className="text-2xl font-bold text-white mb-1">Bem Vindo!</h2>
            <p className="text-gray-400 text-sm mb-4">
              {isRegistering ? 'Crie sua conta para começar' : 'Vamos começar acessando sua conta'}
            </p>
          </div>

          {isRegistering ? (
            <form onSubmit={registerForm.handleSubmit(onRegister)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300">Nome</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                  </span>
                  <input
                    type="text"
                    {...registerForm.register('name')}
                    className="pl-10 pr-3 py-2 block w-full rounded-md border border-gray-700 bg-gray-900 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Digite seu nome"
                  />
                </div>
                {registerForm.formState.errors.name && (
                  <p className="mt-1 text-sm text-red-400">
                    {registerForm.formState.errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Email</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" fill="none"/><path d="M22 6l-10 7L2 6"/></svg>
                  </span>
                  <input
                    type="email"
                    {...registerForm.register('email')}
                    className="pl-10 pr-3 py-2 block w-full rounded-md border border-gray-700 bg-gray-900 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Digite seu email"
                  />
                </div>
                {registerForm.formState.errors.email && (
                  <p className="mt-1 text-sm text-red-400">
                    {registerForm.formState.errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Senha</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    {...registerForm.register('password')}
                    className="pl-10 pr-10 py-2 block w-full rounded-md border border-gray-700 bg-gray-900 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Digite sua senha"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                  >
                    {showPassword ? (
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M3 3l18 18"/>
                      </svg>
                    ) : (
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    )}
                  </button>
                </div>
                {registerForm.formState.errors.password && (
                  <p className="mt-1 text-sm text-red-400">
                    {registerForm.formState.errors.password.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 text-lg font-semibold mt-2"
              >
                Criar Conta
              </button>
            </form>
          ) : (
            <form onSubmit={loginForm.handleSubmit(onLogin)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300">Login</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" fill="none"/><path d="M22 6l-10 7L2 6"/></svg>
                  </span>
                  <input
                    type="email"
                    {...loginForm.register('email')}
                    className="pl-10 pr-3 py-2 block w-full rounded-md border border-gray-700 bg-gray-900 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Digite seu login"
                  />
                </div>
                {loginForm.formState.errors.email && (
                  <p className="mt-1 text-sm text-red-400">
                    {loginForm.formState.errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Senha</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    {...loginForm.register('password')}
                    className="pl-10 pr-10 py-2 block w-full rounded-md border border-gray-700 bg-gray-900 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Digite sua senha"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                  >
                    {showPassword ? (
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M3 3l18 18"/>
                      </svg>
                    ) : (
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    )}
                  </button>
                </div>
                {loginForm.formState.errors.password && (
                  <p className="mt-1 text-sm text-red-400">
                    {loginForm.formState.errors.password.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 text-lg font-semibold mt-2"
              >
                Login
              </button>
            </form>
          )}

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              {isRegistering ? 'Já tenho uma conta' : 'Não tenho cadastro'}
            </button>
            {!isRegistering && (
              <div className="mt-2">
                <button className="text-gray-400 hover:text-blue-300 text-xs" type="button">
                  Não consigo realizar o login
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 