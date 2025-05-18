'use client'
import { signIn } from 'next-auth/react'

export default function LoginPage() {
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    const form = new FormData(e.target as HTMLFormElement)
    await signIn('credentials', {
      redirect: true,
      email: form.get('email'),
      password: form.get('password'),
      callbackUrl: '/dashboard',
    })
  }

  return (
    <form onSubmit={handleLogin}>
      <input name="email" type="email" required />
      <input name="password" type="password" required />
      <button type="submit">Entrar</button>
    </form>
  )
}
