/*
  Warnings:

  - A unique constraint covering the columns `[inviteCode]` on the table `House` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "House" ADD COLUMN     "inviteCode" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "House_inviteCode_key" ON "House"("inviteCode");
