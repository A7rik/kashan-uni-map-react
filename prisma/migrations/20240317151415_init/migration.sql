/*
  Warnings:

  - You are about to drop the column `capacity` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `classId` on the `Schedules` table. All the data in the column will be lost.
  - You are about to drop the `Class` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `buildingId` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `floor` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseId` to the `Schedules` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RoomType" AS ENUM ('CLASS', 'LAB', 'PROF', 'WC');

-- DropForeignKey
ALTER TABLE "Schedules" DROP CONSTRAINT "Schedules_classId_fkey";

-- AlterTable
ALTER TABLE "Prof" ADD COLUMN     "profRoomId" INTEGER;

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "capacity",
DROP COLUMN "name",
ADD COLUMN     "buildingId" INTEGER NOT NULL,
ADD COLUMN     "floor" INTEGER NOT NULL,
ADD COLUMN     "type" "RoomType" NOT NULL;

-- AlterTable
ALTER TABLE "Schedules" DROP COLUMN "classId",
ADD COLUMN     "courseId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Class";

-- CreateTable
CREATE TABLE "Building" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "floor" INTEGER NOT NULL,

    CONSTRAINT "Building_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassRoom" (
    "id" SERIAL NOT NULL,
    "roomId" INTEGER NOT NULL,
    "capacity" INTEGER NOT NULL,

    CONSTRAINT "ClassRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LabRoom" (
    "id" SERIAL NOT NULL,
    "roomId" INTEGER NOT NULL,
    "equipment" TEXT[],

    CONSTRAINT "LabRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfRoom" (
    "id" SERIAL NOT NULL,
    "roomId" INTEGER NOT NULL,

    CONSTRAINT "ProfRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WC" (
    "id" SERIAL NOT NULL,
    "roomId" INTEGER NOT NULL,

    CONSTRAINT "WC_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Prof" ADD CONSTRAINT "Prof_profRoomId_fkey" FOREIGN KEY ("profRoomId") REFERENCES "ProfRoom"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "Building"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassRoom" ADD CONSTRAINT "ClassRoom_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LabRoom" ADD CONSTRAINT "LabRoom_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfRoom" ADD CONSTRAINT "ProfRoom_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WC" ADD CONSTRAINT "WC_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedules" ADD CONSTRAINT "Schedules_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
