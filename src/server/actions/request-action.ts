"use server"

import { revalidatePath } from "next/cache"
import { getTranslations } from "next-intl/server"
import { z } from "zod"
import { db } from "@/server"
import { actionClient } from "@/server/actions/safe-action"
import {
  clientRequestCreateSchema,
  clientRequestUpdateSchema,
} from "@/types/request.schema"

export const createClientRequest = actionClient
  .schema(clientRequestCreateSchema)
  .action(async ({ parsedInput }) => {
    const t = await getTranslations()
    try {
      await db.clientRequest.create({ data: parsedInput })
      return { success: t("Server.actions.request-submit-success") }
    } catch (error) {
      console.log(error)

      return { error: t("Server.actions.request-submit-error") }
    }
  })

export const updateClientRequest = actionClient
  .schema(clientRequestUpdateSchema)
  .action(async ({ parsedInput }) => {
    const t = await getTranslations()
    try {
      await db.clientRequest.update({
        where: { uid: parsedInput.uid },
        data: parsedInput,
      })
      revalidatePath("/admin/requests")

      return { success: t("Server.actions.success-update") }
    } catch (error) {
      return { error: t("Server.actions.error") }
    }
  })

export const deleteClientRequest = actionClient
  .schema(z.object({ uid: z.number() }))
  .action(async ({ parsedInput }) => {
    const t = await getTranslations()
    try {
      await db.clientRequest.delete({ where: { uid: parsedInput.uid } })
      revalidatePath("/admin/requests")

      return { success: t("Server.actions.success-delete") }
    } catch (error) {
      return { error: t("Server.actions.error") }
    }
  })
