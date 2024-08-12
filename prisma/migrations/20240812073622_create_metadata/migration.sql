-- CreateTable
CREATE TABLE "meta_datas" (
    "uid" SERIAL NOT NULL,
    "title_ru" TEXT NOT NULL,
    "title_en" TEXT NOT NULL,
    "title_ky" TEXT NOT NULL,
    "description_ru" TEXT NOT NULL,
    "description_en" TEXT NOT NULL,
    "description_ky" TEXT NOT NULL,
    "keywords_ru" TEXT NOT NULL,
    "keywords_en" TEXT NOT NULL,
    "keywords_ky" TEXT NOT NULL,
    "ogImage" TEXT NOT NULL,

    CONSTRAINT "meta_datas_pkey" PRIMARY KEY ("uid")
);
