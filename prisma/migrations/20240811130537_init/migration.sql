-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'MANAGER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "RequestStatus" AS ENUM ('READ', 'UNREAD');

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
    "id" TEXT NOT NULL,
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
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sections" (
    "uid" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
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

    CONSTRAINT "sections_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "cards" (
    "uid" SERIAL NOT NULL,
    "sectionId" INTEGER NOT NULL,
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
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cards_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "socials" (
    "uid" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "socials_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "contacts" (
    "uid" SERIAL NOT NULL,
    "name_ru" TEXT,
    "name_en" TEXT,
    "name_ky" TEXT,
    "link" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "articles" (
    "uid" SERIAL NOT NULL,
    "title_ru" TEXT NOT NULL,
    "title_en" TEXT,
    "title_ky" TEXT,
    "content_ru" TEXT NOT NULL,
    "content_en" TEXT,
    "content_ky" TEXT,
    "image" TEXT NOT NULL,
    "linkTitle_ru" TEXT,
    "linkTitle_en" TEXT,
    "linkTitle_ky" TEXT,
    "linkHref" TEXT,
    "status" "Status" NOT NULL DEFAULT 'DRAFT',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "article_socials" (
    "uid" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "articleId" INTEGER NOT NULL,

    CONSTRAINT "article_socials_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "plans" (
    "uid" SERIAL NOT NULL,
    "title_ru" TEXT NOT NULL,
    "title_en" TEXT NOT NULL,
    "title_ky" TEXT NOT NULL,
    "description_ru" TEXT NOT NULL,
    "description_en" TEXT NOT NULL,
    "description_ky" TEXT NOT NULL,
    "price_ru" TEXT NOT NULL,
    "price_en" TEXT NOT NULL,
    "price_ky" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "bullets_ru" TEXT[],
    "bullets_en" TEXT[],
    "bullets_ky" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "plans_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "form_of_ownerships" (
    "uid" SERIAL NOT NULL,
    "name_ru" TEXT NOT NULL,
    "name_en" TEXT NOT NULL,
    "name_ky" TEXT NOT NULL,

    CONSTRAINT "form_of_ownerships_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "field_of_activities" (
    "uid" SERIAL NOT NULL,
    "name_ru" TEXT NOT NULL,
    "name_en" TEXT NOT NULL,
    "name_ky" TEXT NOT NULL,

    CONSTRAINT "field_of_activities_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "tax_systems" (
    "uid" SERIAL NOT NULL,
    "name_ru" TEXT NOT NULL,
    "name_en" TEXT NOT NULL,
    "name_ky" TEXT NOT NULL,

    CONSTRAINT "tax_systems_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "employee_ranges" (
    "uid" SERIAL NOT NULL,
    "range" TEXT NOT NULL,

    CONSTRAINT "employee_ranges_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "time_periods" (
    "uid" SERIAL NOT NULL,
    "period_ru" TEXT NOT NULL,
    "period_en" TEXT NOT NULL,
    "period_ky" TEXT NOT NULL,

    CONSTRAINT "time_periods_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "service_costs" (
    "uid" SERIAL NOT NULL,
    "formOfOwnershipId" INTEGER NOT NULL,
    "fieldOfActivityId" INTEGER NOT NULL,
    "taxSystemId" INTEGER NOT NULL,
    "employeeRangeId" INTEGER NOT NULL,
    "timePeriodId" INTEGER NOT NULL,
    "totalAmount" INTEGER NOT NULL,
    "totalAmountAfterDiscount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "service_costs_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "client_requests" (
    "uid" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "contactPhone" TEXT NOT NULL,
    "planId" INTEGER,
    "formOfOwnershipId" INTEGER,
    "fieldOfActivityId" INTEGER,
    "taxSystemId" INTEGER,
    "employeeRangeId" INTEGER,
    "timePeriodId" INTEGER,
    "additionalInfo" TEXT,
    "status" "RequestStatus" NOT NULL DEFAULT 'UNREAD',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "client_requests_pkey" PRIMARY KEY ("uid")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_providerAccountId_key" ON "accounts"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "sections_slug_key" ON "sections"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "cards_sectionId_uid_key" ON "cards"("sectionId", "uid");

-- CreateIndex
CREATE UNIQUE INDEX "plans_title_ru_title_en_title_ky_key" ON "plans"("title_ru", "title_en", "title_ky");

-- CreateIndex
CREATE UNIQUE INDEX "service_costs_formOfOwnershipId_fieldOfActivityId_taxSystem_key" ON "service_costs"("formOfOwnershipId", "fieldOfActivityId", "taxSystemId", "employeeRangeId", "timePeriodId");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "sections"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "article_socials" ADD CONSTRAINT "article_socials_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "articles"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_costs" ADD CONSTRAINT "service_costs_formOfOwnershipId_fkey" FOREIGN KEY ("formOfOwnershipId") REFERENCES "form_of_ownerships"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_costs" ADD CONSTRAINT "service_costs_fieldOfActivityId_fkey" FOREIGN KEY ("fieldOfActivityId") REFERENCES "field_of_activities"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_costs" ADD CONSTRAINT "service_costs_taxSystemId_fkey" FOREIGN KEY ("taxSystemId") REFERENCES "tax_systems"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_costs" ADD CONSTRAINT "service_costs_employeeRangeId_fkey" FOREIGN KEY ("employeeRangeId") REFERENCES "employee_ranges"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_costs" ADD CONSTRAINT "service_costs_timePeriodId_fkey" FOREIGN KEY ("timePeriodId") REFERENCES "time_periods"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_requests" ADD CONSTRAINT "client_requests_planId_fkey" FOREIGN KEY ("planId") REFERENCES "cards"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_requests" ADD CONSTRAINT "client_requests_formOfOwnershipId_fkey" FOREIGN KEY ("formOfOwnershipId") REFERENCES "form_of_ownerships"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_requests" ADD CONSTRAINT "client_requests_fieldOfActivityId_fkey" FOREIGN KEY ("fieldOfActivityId") REFERENCES "field_of_activities"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_requests" ADD CONSTRAINT "client_requests_taxSystemId_fkey" FOREIGN KEY ("taxSystemId") REFERENCES "tax_systems"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_requests" ADD CONSTRAINT "client_requests_employeeRangeId_fkey" FOREIGN KEY ("employeeRangeId") REFERENCES "employee_ranges"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_requests" ADD CONSTRAINT "client_requests_timePeriodId_fkey" FOREIGN KEY ("timePeriodId") REFERENCES "time_periods"("uid") ON DELETE CASCADE ON UPDATE CASCADE;
