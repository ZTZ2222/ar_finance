-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'MANAGER', 'ADMIN');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "password" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts" (
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "sections" (
    "id" TEXT NOT NULL,
    "sectionName_ru" TEXT,
    "sectionName_en" TEXT,
    "sectionName_ky" TEXT,
    "heading_ru" TEXT,
    "heading_en" TEXT,
    "heading_ky" TEXT,
    "subheading_ru" TEXT,
    "subheading_en" TEXT,
    "subheading_ky" TEXT,
    "primaryButton_ru" TEXT,
    "primaryButton_en" TEXT,
    "primaryButton_ky" TEXT,
    "secondaryButton_ru" TEXT,
    "secondaryButton_en" TEXT,
    "secondaryButton_ky" TEXT,

    CONSTRAINT "sections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cards" (
    "id" TEXT NOT NULL,
    "sectionId" TEXT NOT NULL,
    "title_ru" TEXT,
    "title_en" TEXT,
    "title_ky" TEXT,
    "description_ru" TEXT,
    "description_en" TEXT,
    "description_ky" TEXT,
    "extra_ru" TEXT,
    "extra_en" TEXT,
    "extra_ky" TEXT,
    "bullets_ru" TEXT[],
    "bullets_en" TEXT[],
    "bullets_ky" TEXT[],
    "image" TEXT,

    CONSTRAINT "cards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "accounts_userId_idx" ON "accounts"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_providerAccountId_key" ON "accounts"("provider", "providerAccountId");

-- CreateIndex
CREATE INDEX "sections_id_idx" ON "sections"("id");

-- CreateIndex
CREATE UNIQUE INDEX "cards_sectionId_id_key" ON "cards"("sectionId", "id");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "sections"("id") ON DELETE CASCADE ON UPDATE CASCADE;
