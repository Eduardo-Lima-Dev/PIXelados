import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

// Função para gerar um ID único
function generateUniqueId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

export async function PATCH(
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

    const body = await request.json()
    const { title, description, amount, date, category, recurring, createdById, houseId, status } = body

    console.log('PATCH /api/expenses/[id] - Dados recebidos:', { 
      id: params.id, 
      title,
      description,
      amount,
      date,
      category,
      recurring,
      createdById,
      houseId,
      status
    })

    // Busca o usuário
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'Usuário não encontrado' },
        { status: 404 }
      )
    }

    // Busca a despesa original
    const originalExpense = await prisma.expense.findUnique({
      where: { id: Number(params.id) }
    })

    if (!originalExpense) {
      return NextResponse.json(
        { error: 'Despesa não encontrada' },
        { status: 404 }
      )
    }

    console.log('Despesa original:', originalExpense)

    // Se estiver alterando o status
    if (status !== undefined && status !== originalExpense.status) {
      try {
        console.log('Atualizando status da despesa:', {
          id: params.id,
          status,
          recurring: originalExpense.recurring
        })

        // Se for uma despesa recorrente, gera um novo recurrenceId
        const updateData: any = {
          status: status
        }

        if (originalExpense.recurring) {
          const newRecurrenceId = generateUniqueId()
          console.log('Gerando novo recurrenceId:', newRecurrenceId)
          // Atualiza o recurrenceId usando uma query SQL direta
          await prisma.$executeRaw`
            UPDATE expenses 
            SET "recurrenceId" = ${newRecurrenceId}
            WHERE id = ${Number(params.id)}
          `
        }

        console.log('Dados de atualização:', updateData)

        // Atualiza apenas a despesa específica
        const updatedExpense = await prisma.expense.update({
          where: {
            id: Number(params.id)
          },
          data: updateData,
          include: {
            createdBy: true
          }
        })

        console.log('Status da despesa atualizado:', updatedExpense)
        return NextResponse.json(updatedExpense)
      } catch (updateError) {
        console.error('Erro detalhado ao atualizar status:', updateError)
        if (updateError instanceof Error) {
          return NextResponse.json(
            { error: `Erro ao atualizar status da despesa: ${updateError.message}` },
            { status: 500 }
          )
        }
        return NextResponse.json(
          { error: 'Erro ao atualizar status da despesa' },
          { status: 500 }
        )
      }
    }

    // Para outras atualizações
    const updateData: any = {}

    // Adiciona apenas os campos que foram enviados
    if (title !== undefined) updateData.title = title
    if (description !== undefined) updateData.description = description
    if (amount !== undefined) updateData.amount = Number(amount)
    if (date !== undefined) updateData.date = new Date(date)
    if (category !== undefined) updateData.category = category
    if (recurring !== undefined) updateData.recurring = recurring
    if (createdById !== undefined) updateData.createdById = Number(createdById)
    if (houseId !== undefined) updateData.houseId = Number(houseId)

    // Se for uma despesa recorrente e estiver alterando dados além do status
    if (originalExpense.recurring && Object.keys(updateData).length > 0) {
      const newRecurrenceId = generateUniqueId()
      // Atualiza o recurrenceId usando uma query SQL direta
      await prisma.$executeRaw`
        UPDATE expenses 
        SET "recurrenceId" = ${newRecurrenceId}
        WHERE id = ${Number(params.id)}
      `
    }

    // Atualiza a despesa
    const expense = await prisma.expense.update({
      where: {
        id: Number(params.id)
      },
      data: updateData,
      include: {
        createdBy: true
      }
    })

    console.log('PATCH /api/expenses/[id] - Despesa atualizada:', expense)

    return NextResponse.json(expense)
  } catch (error) {
    console.error('Erro ao atualizar despesa:', error)
    if (error instanceof Error) {
      return NextResponse.json(
        { error: `Erro ao atualizar despesa: ${error.message}` },
        { status: 500 }
      )
    }
    return NextResponse.json(
      { error: 'Erro ao atualizar despesa' },
      { status: 500 }
    )
  }
}

export async function DELETE(
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

    // Busca o usuário
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'Usuário não encontrado' },
        { status: 404 }
      )
    }

    // Primeiro, exclui os participantes da despesa
    await prisma.expenseParticipant.deleteMany({
      where: {
        expenseId: Number(params.id)
      }
    })

    // Depois, exclui a despesa
    const deletedExpense = await prisma.expense.delete({
      where: {
        id: Number(params.id)
      }
    })

    console.log('DELETE /api/expenses/[id] - Despesa excluída:', deletedExpense)

    return NextResponse.json({ message: 'Despesa excluída com sucesso' })
  } catch (error) {
    console.error('Erro ao excluir despesa:', error)
    return NextResponse.json(
      { error: 'Erro ao excluir despesa' },
      { status: 500 }
    )
  }
} 