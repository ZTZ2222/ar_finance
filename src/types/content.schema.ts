import { z } from "zod"

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

export type zCardImage = z.infer<typeof cardImageSchema>
export type zCardAdvantage = z.infer<typeof cardAdvantageSchema>
export type zPlan = z.infer<typeof planSchema>
