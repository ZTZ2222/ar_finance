import { z } from "zod"

export const cardSchema = z.object({
  uid: z.number().optional(),
  sectionId: z.number(),
  title_ru: z.string().nullable(),
  title_en: z.string().nullable(),
  title_ky: z.string().nullable(),
  description_ru: z.string().nullable(),
  description_en: z.string().nullable(),
  description_ky: z.string().nullable(),
  extra_ru: z.string().nullable(),
  extra_en: z.string().nullable(),
  extra_ky: z.string().nullable(),
  bullets_ru: z.string().array(),
  bullets_en: z.string().array(),
  bullets_ky: z.string().array(),
  image: z.string().nullable(),
})

export const sectionSchema = z.object({
  uid: z.number().optional(),
  slug: z.string(),
  sectionName_ru: z.string().nullable(),
  sectionName_en: z.string().nullable(),
  sectionName_ky: z.string().nullable(),
  heading_ru: z.string().nullable(),
  heading_en: z.string().nullable(),
  heading_ky: z.string().nullable(),
  subheading_ru: z.string().nullable(),
  subheading_en: z.string().nullable(),
  subheading_ky: z.string().nullable(),
  primaryButton_ru: z.string().nullable(),
  primaryButton_en: z.string().nullable(),
  primaryButton_ky: z.string().nullable(),
  secondaryButton_ru: z.string().nullable(),
  secondaryButton_en: z.string().nullable(),
  secondaryButton_ky: z.string().nullable(),
  cards: z.array(cardSchema),
})

export type zCard = z.infer<typeof cardSchema>
export type zSection = z.infer<typeof sectionSchema>

export type NormalizedCard = {
  uid: number
  title: string
  description: string
  extra: string
  bullets: string[]
  image: string
}

export type NormalizedSection = {
  uid: number
  slug: string
  sectionName: string | null
  heading: string | null
  subheading: string | null
  primaryButton: string | null
  secondaryButton: string | null
  cards: NormalizedCard[]
}

export const socialSchema = z.object({
  uid: z.number().optional(),
  name: z.string(),
  link: z.string(),
  icon: z.string(),
})

export const contactSchema = z.object({
  uid: z.number().optional(),
  name_ru: z.string().nullable(),
  name_en: z.string().nullable(),
  name_ky: z.string().nullable(),
  link: z.string(),
  icon: z.string(),
})

export const articleSchema = z.object({
  uid: z.number().optional(),
  title_ru: z.string().nullable(),
  title_en: z.string().nullable(),
  title_ky: z.string().nullable(),
  content_ru: z.string().nullable(),
  content_en: z.string().nullable(),
  content_ky: z.string().nullable(),
  image: z.string(),
  slug: z.string(),
  linkName: z.string(),
  linkHref: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  socials: z.array(socialSchema),
})

export const articleSocialSchema = z.object({
  uid: z.number().optional(),
  name: z.string(),
  link: z.string(),
  icon: z.string(),
  articleId: z.number(),
})

export type zSocial = z.infer<typeof socialSchema>
export type zContact = z.infer<typeof contactSchema>
export type zArticle = z.infer<typeof articleSchema>
export type zArticleSocial = z.infer<typeof articleSocialSchema>
