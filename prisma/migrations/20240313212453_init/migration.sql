/*
  Warnings:

  - Added the required column `roomId` to the `Prof` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Prof" ADD COLUMN     "roomId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Prof" ADD CONSTRAINT "Prof_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
