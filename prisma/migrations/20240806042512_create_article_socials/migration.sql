/*
  Warnings:

  - You are about to drop the column `articleId` on the `socials` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "socials" DROP CONSTRAINT "socials_articleId_fkey";

-- AlterTable
ALTER TABLE "socials" DROP COLUMN "articleId";

-- CreateTable
CREATE TABLE "article_socials" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "articleId" TEXT NOT NULL,

    CONSTRAINT "article_socials_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "article_socials" ADD CONSTRAINT "article_socials_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
