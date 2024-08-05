"use server"

import { revalidatePath } from "next/cache"
import { db } from "@/server"
import { sectionSchema } from "@/types/content.schema"
import { actionClient } from "./safe-action"

export const updateSection = actionClient
  .schema(sectionSchema)
  .action(async ({ parsedInput }) => {
    const { cards, ...rest } = parsedInput

    try {
      await db.section.update({
        where: { id: parsedInput.id },
        data: rest,
      })

      // Update each card individually
      for (const card of cards) {
        await db.card.update({
          where: { id: card.id },
          data: card,
        })
      }

      revalidatePath("/")

      return { success: "Section updated!" }
    } catch (error) {
      return { error: "Something went wrong!" }
    }
  })
