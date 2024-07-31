import { z } from "zod"

export const postCreateSchema = z.object({
  title: z.string(),
  short_description: z.string(),
  content: z.string(),
  primaryImage: z.string(),
  slug: z.string(),
  createdAt: z.date(),
})

export const postReadSchema = postCreateSchema.extend({
  id: z.string(),
})

export type zPostCreate = z.infer<typeof postCreateSchema>
export type zPostRead = z.infer<typeof postReadSchema>
