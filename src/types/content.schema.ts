import { z } from "zod"

export const cardSchema = z.object({
  id: z.string(),
  sectionId: z.string(),
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
  id: z.string(),
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

export const cardImageSchema = z.object({
  id: z.string(),
  src: z.string(),
  height: z.number(),
  width: z.number(),
})

export const cardAdvantageSchema = z.object({
  id: z.string().optional().nullable(),
  title: z.string().min(1, { message: "Обязательное поле" }),
  description: z.string().min(1, { message: "Обязательное поле" }),
})

export const planSchema = z.object({
  id: z.string(),
  icon: z.string(),
  title: z.string().min(1, { message: "Обязательное поле" }),
  description: z.string().min(1, { message: "Обязательное поле" }),
  price: z.number(),
  benefits: z
    .array(
      z.object({
        id: z.string(),
        point: z.string().min(1, { message: "Обязательное поле" }),
      }),
    )
    .min(1, { message: "Обязательное поле" }),
})

export const serviceSchema = z.object({
  id: z.string(),
  icon: z.string(),
  title: z.string().min(1, { message: "Обязательное поле" }),
  description: z.string().min(1, { message: "Обязательное поле" }),
  price: z.number(),
  bullets: z.array(
    z.object({
      id: z.string(),
      point: z.string().min(1, { message: "Обязательное поле" }),
    }),
  ),
})

export type zCardImage = z.infer<typeof cardImageSchema>
export type zCardAdvantage = z.infer<typeof cardAdvantageSchema>
export type zPlan = z.infer<typeof planSchema>
export type zService = z.infer<typeof serviceSchema>
