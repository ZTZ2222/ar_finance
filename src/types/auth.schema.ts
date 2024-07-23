import { z } from "zod"

export const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

export type zCredentials = z.infer<typeof credentialsSchema>
