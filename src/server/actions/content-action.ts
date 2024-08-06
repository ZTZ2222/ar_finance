"use server"

import { revalidatePath } from "next/cache"
import { db } from "@/server"
import {
  contactSchema,
  sectionSchema,
  socialSchema,
} from "@/types/content.schema"
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

export const updateContacts = actionClient
  .schema(contactSchema.array())
  .action(async ({ parsedInput: contacts }) => {
    try {
      // Contacts
      for (const contact of contacts) {
        await db.contact.upsert({
          where: { id: contact.id },
          create: contact,
          update: contact,
        })
      }

      revalidatePath("/")

      return { success: "Contacts updated!" }
    } catch (error) {
      console.log(error)
      return { error: "Something went wrong!" }
    }
  })

export const updateSocials = actionClient
  .schema(socialSchema.array())
  .action(async ({ parsedInput: socials }) => {
    try {
      // Socials
      for (const social of socials) {
        await db.social.upsert({
          where: { id: social.id },
          create: social,
          update: social,
        })
      }

      revalidatePath("/")

      return { success: "Socials updated!" }
    } catch (error) {
      console.log(error)
      return { error: "Something went wrong!" }
    }
  })
