import { z } from "zod"

export const planUpsertSchema = z.object({
  uid: z.number().optional(),
  title_ru: z.string(),
  title_en: z.string(),
  title_ky: z.string(),
  description_ru: z.string(),
  description_en: z.string(),
  description_ky: z.string(),
  price_ru: z.string(),
  price_en: z.string(),
  price_ky: z.string(),
  bullets_ru: z.string().array(),
  bullets_en: z.string().array(),
  bullets_ky: z.string().array(),
  icon: z.string(),
  createdAt: z.date().optional(),
})

export const planReadSchema = planUpsertSchema
  .omit({ uid: true, createdAt: true })
  .extend({
    uid: z.number(),
    createdAt: z.date(),
  })

export type zPlanUpsert = z.infer<typeof planUpsertSchema>
export type zPlanRead = z.infer<typeof planReadSchema>

export type NormalizedPlan = {
  uid: number
  title: string
  description: string
  price: string
  bullets: string[]
  icon: string
}
