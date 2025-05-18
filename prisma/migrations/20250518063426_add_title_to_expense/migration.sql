/*
  Warnings:

  - You are about to drop the column `dueDate` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `paid` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `shared` on the `Expense` table. All the data in the column will be lost.
  - You are about to alter the column `amount` on the `Expense` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to drop the `_UserHouses` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[uuid]` on the table `House` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `date` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - The required column `uuid` was added to the `House` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "_UserHouses" DROP CONSTRAINT "_UserHouses_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserHouses" DROP CONSTRAINT "_UserHouses_B_fkey";

-- AlterTable
ALTER TABLE "Expense" DROP COLUMN "dueDate",
DROP COLUMN "paid",
DROP COLUMN "shared",
ADD COLUMN     "category" TEXT,
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'pending',
ALTER COLUMN "amount" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "House" ADD COLUMN     "name" TEXT NOT NULL DEFAULT 'Nova Casa',
ADD COLUMN     "uuid" TEXT NOT NULL;

-- DropTable
DROP TABLE "_UserHouses";

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "expenseId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_HouseMembers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_HouseMembers_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_HouseMembers_B_index" ON "_HouseMembers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "House_uuid_key" ON "House"("uuid");

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_expenseId_fkey" FOREIGN KEY ("expenseId") REFERENCES "Expense"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HouseMembers" ADD CONSTRAINT "_HouseMembers_A_fkey" FOREIGN KEY ("A") REFERENCES "House"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HouseMembers" ADD CONSTRAINT "_HouseMembers_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
