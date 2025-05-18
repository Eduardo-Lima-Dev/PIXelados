import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'

const prisma = new PrismaClient()

async function main() {
  const houses = await prisma.house.findMany()

  for (const house of houses) {
    await prisma.house.update({
      where: { id: house.id },
      data: {
        inviteCode: uuidv4()
      }
    })
  }

  console.log('Dados atualizados com sucesso!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 