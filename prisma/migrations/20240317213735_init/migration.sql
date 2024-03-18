-- DropForeignKey
ALTER TABLE "Prof" DROP CONSTRAINT "Prof_roomId_fkey";

-- AlterTable
ALTER TABLE "Prof" ALTER COLUMN "roomId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Prof" ADD CONSTRAINT "Prof_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE SET NULL ON UPDATE CASCADE;
