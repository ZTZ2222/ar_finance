"use server"

import { revalidatePath } from "next/cache"
import { getTranslations } from "next-intl/server"
import { z } from "zod"
import { db } from "@/server"
import { actionClient } from "@/server/actions/safe-action"
import { planUpsertSchema } from "@/types/plan.schema"

export const createPlan = actionClient
  .schema(planUpsertSchema.array())
  .action(async ({ parsedInput: plans }) => {
    const t = await getTranslations()
    try {
      // Update each plan individually
      for (const plan of plans) {
        await db.plan.upsert({
          where: {
            title_ru_title_en_title_ky: {
              title_ru: plan.title_ru,
              title_en: plan.title_en,
              title_ky: plan.title_ky,
            },
          },
          create: plan,
          update: plan,
        })
      }

      revalidatePath("/admin/cms/plans")

      return { success: t("Server.actions.success-update") }
    } catch (error) {
      return { error: t("Server.actions.error") }
    }
  })

export const deletePlan = actionClient
  .schema(z.object({ uid: z.number() }))
  .action(async ({ parsedInput }) => {
    const t = await getTranslations()
    try {
      await db.plan.delete({ where: { uid: parsedInput.uid } })
      revalidatePath("/", "layout")

      return { success: t("Server.actions.success-delete") }
    } catch (error) {
      return { error: t("Server.actions.error") }
    }
  })
