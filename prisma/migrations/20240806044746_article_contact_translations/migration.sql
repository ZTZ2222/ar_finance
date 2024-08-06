/*
  Warnings:

  - You are about to drop the column `content` on the `articles` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `articles` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `contacts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "articles" DROP COLUMN "content",
DROP COLUMN "title",
ADD COLUMN     "content_en" TEXT,
ADD COLUMN     "content_ky" TEXT,
ADD COLUMN     "content_ru" TEXT,
ADD COLUMN     "title_en" TEXT,
ADD COLUMN     "title_ky" TEXT,
ADD COLUMN     "title_ru" TEXT;

-- AlterTable
ALTER TABLE "contacts" DROP COLUMN "name",
ADD COLUMN     "name_en" TEXT,
ADD COLUMN     "name_ky" TEXT,
ADD COLUMN     "name_ru" TEXT;
