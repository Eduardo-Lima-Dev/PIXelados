/*
  Warnings:

  - You are about to drop the column `amount` on the `ExpenseParticipant` table. All the data in the column will be lost.
  - You are about to drop the `_UserHouses` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[expenseId,userId]` on the table `ExpenseParticipant` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[inviteCode]` on the table `House` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `ExpenseParticipant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `House` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inviteCode` to the `House` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `House` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_UserHouses" DROP CONSTRAINT "_UserHouses_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserHouses" DROP CONSTRAINT "_UserHouses_B_fkey";

-- AlterTable
ALTER TABLE "Expense" ALTER COLUMN "shared" SET DEFAULT true;

-- AlterTable
ALTER TABLE "ExpenseParticipant" DROP COLUMN "amount",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "House" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "inviteCode" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL,
ALTER COLUMN "name" DROP NOT NULL;

-- DropTable
DROP TABLE "_UserHouses";

-- CreateTable
CREATE TABLE "HouseMember" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "houseId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HouseMember_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HouseMember_userId_houseId_key" ON "HouseMember"("userId", "houseId");

-- CreateIndex
CREATE UNIQUE INDEX "ExpenseParticipant_expenseId_userId_key" ON "ExpenseParticipant"("expenseId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "House_inviteCode_key" ON "House"("inviteCode");

-- AddForeignKey
ALTER TABLE "HouseMember" ADD CONSTRAINT "HouseMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HouseMember" ADD CONSTRAINT "HouseMember_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
