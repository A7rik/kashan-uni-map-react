/*
  Warnings:

  - Added the required column `number` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "number" INTEGER NOT NULL;
