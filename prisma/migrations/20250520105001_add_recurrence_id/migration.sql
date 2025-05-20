/*
  Warnings:

  - The primary key for the `_HouseMembers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[A,B]` on the table `_HouseMembers` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "_HouseMembers" DROP CONSTRAINT "_HouseMembers_AB_pkey";

-- AlterTable
ALTER TABLE "expenses" ADD COLUMN     "recurrenceId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "_HouseMembers_AB_unique" ON "_HouseMembers"("A", "B");
