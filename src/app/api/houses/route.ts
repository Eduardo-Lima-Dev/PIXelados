import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const data = await req.json()
  const house = await prisma.house.create({
    data: {
      name: data.name,
      ownerId: session.user.id,
      members: { connect: { id: session.user.id } },
    },
  })

  return NextResponse.json(house)
}