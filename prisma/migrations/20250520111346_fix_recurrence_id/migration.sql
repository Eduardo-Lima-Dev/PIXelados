-- AlterTable
ALTER TABLE "expenses" ALTER COLUMN "recurrenceId" SET DEFAULT gen_random_uuid();
