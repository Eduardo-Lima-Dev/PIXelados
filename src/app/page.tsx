'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const registerSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email(),
  password: z.string().min(6),
})

type FormValues = z.infer<typeof registerSchema>

export default function AuthPage() {
  const [isRegistering, setIsRegistering] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(registerSchema),
  })

  async function onSubmit(data: FormValues) {
    try {
    if (isRegistering) {
      const res = await fetch('/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
          const error = await res.json()
          toast.error(error.error || 'Erro ao criar conta')
          return
        }
        
        toast.success('Conta criada com sucesso!')
        setIsRegistering(false)
        return
    }

    const result = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    })

      if (result?.error) {
        toast.error('Email ou senha inválidos')
        return
      }

      if (result?.ok) {
        toast.success('Login realizado com sucesso!')
        router.push('/dashboard')
        router.refresh()
      }
    } catch (error) {
      toast.error('Ocorreu um erro. Tente novamente.')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border border-purple-base rounded-lg bg-purple-base">
      <h1 className="text-2xl mb-4 text-center text-soft-white">
        {isRegistering ? 'Criar Conta' : 'Login'}
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {isRegistering && (
          <div>
            <label className="text-soft-white">Nome</label>
            <input {...register('name')} className="input bg-deep-blue text-soft-white border-purple-base" />
            {errors.name && <p className="text-owing text-sm">{errors.name.message}</p>}
          </div>
        )}

        <div>
          <label className="text-soft-white">Email</label>
          <input type="email" {...register('email')} className="input bg-deep-blue text-soft-white border-purple-base" />
          {errors.email && <p className="text-owing text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <label className="text-soft-white">Senha</label>
          <input type="password" {...register('password')} className="input bg-deep-blue text-soft-white border-purple-base" />
          {errors.password && <p className="text-owing text-sm">{errors.password.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-neon-blue text-soft-white py-2 rounded hover:bg-neon-purple transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Carregando...' : isRegistering ? 'Cadastrar' : 'Entrar'}
        </button>
      </form>

      <p className="text-center mt-4 text-soft-white">
        {isRegistering ? 'Já tem uma conta?' : 'Não tem uma conta?'}{' '}
        <button
          className="text-neon-blue hover:text-neon-purple transition-colors"
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering ? 'Faça login' : 'Crie uma agora'}
        </button>
      </p>
    </div>
  )
}
