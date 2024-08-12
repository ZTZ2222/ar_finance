/*
  Warnings:

  - Added the required column `logo1` to the `meta_datas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logo2` to the `meta_datas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "meta_datas" ADD COLUMN     "logo1" TEXT NOT NULL,
ADD COLUMN     "logo2" TEXT NOT NULL;
