"use server"

import { revalidatePath } from "next/cache"
import { getTranslations } from "next-intl/server"
import { z } from "zod"
import { db } from "@/server"
import { actionClient } from "@/server/actions/safe-action"
import {
  EmployeeRangeSchema,
  fieldOfActivitySchema,
  formOfOwnershipSchema,
  serviceCostSchema,
  taxSystemSchema,
  timePeriodSchema,
} from "@/types/calculator.schema"

// Create actions
export const createFormOfOwnership = actionClient
  .schema(formOfOwnershipSchema.array())
  .action(async ({ parsedInput: options }) => {
    const t = await getTranslations()
    try {
      for (const option of options) {
        if (!option.uid) {
          await db.formOfOwnership.create({ data: option })
        }
      }
      revalidatePath("/admin/settings/calculator")
      return { success: t("Server.actions.success-create") }
    } catch (error) {
      return { error: t("Server.actions.error") }
    }
  })

export const createFieldOfActivity = actionClient
  .schema(fieldOfActivitySchema.array())
  .action(async ({ parsedInput: options }) => {
    const t = await getTranslations()
    try {
      for (const option of options) {
        if (!option.uid) {
          await db.fieldOfActivity.create({ data: option })
        }
      }
      revalidatePath("/admin/settings/calculator")
      return { success: t("Server.actions.success-create") }
    } catch (error) {
      return { error: t("Server.actions.error") }
    }
  })

export const createTaxSystem = actionClient
  .schema(taxSystemSchema.array())
  .action(async ({ parsedInput: options }) => {
    const t = await getTranslations()
    try {
      for (const option of options) {
        if (!option.uid) {
          await db.taxSystem.create({ data: option })
        }
      }
      revalidatePath("/admin/settings/calculator")
      return { success: t("Server.actions.success-create") }
    } catch (error) {
      return { error: t("Server.actions.error") }
    }
  })

export const createEmployeeRange = actionClient
  .schema(EmployeeRangeSchema.array())
  .action(async ({ parsedInput: options }) => {
    const t = await getTranslations()
    try {
      for (const option of options) {
        if (!option.uid) {
          await db.employeeRange.create({ data: option })
        }
      }
      revalidatePath("/admin/settings/calculator")
      return { success: t("Server.actions.success-create") }
    } catch (error) {
      return { error: t("Server.actions.error") }
    }
  })

export const createTimePeriod = actionClient
  .schema(timePeriodSchema.array())
  .action(async ({ parsedInput: options }) => {
    const t = await getTranslations()
    try {
      for (const option of options) {
        if (!option.uid) {
          await db.timePeriod.create({ data: option })
        }
      }
      revalidatePath("/admin/settings/calculator")
      return { success: t("Server.actions.success-create") }
    } catch (error) {
      return { error: t("Server.actions.error") }
    }
  })

// Upsert actions
export const upsertServiceCosts = actionClient
  .schema(serviceCostSchema.array())
  .action(async ({ parsedInput: serviceCosts }) => {
    const t = await getTranslations()
    try {
      for (const serviceCost of serviceCosts) {
        if (serviceCost.uid) {
          await db.serviceCost.update({
            where: { uid: serviceCost.uid },
            data: serviceCost,
          })
        } else {
          await db.serviceCost.create({
            data: serviceCost,
          })
        }
      }
      revalidatePath("/admin/settings/calculator")

      return { success: t("Server.actions.success-update") }
    } catch (error) {
      return { error: t("Server.actions.error") }
    }
  })

// Delete actions
export const deleteFormOfOwnership = actionClient
  .schema(z.object({ uid: z.number() }))
  .action(async ({ parsedInput }) => {
    const t = await getTranslations()
    try {
      await db.formOfOwnership.delete({ where: { uid: parsedInput.uid } })
      revalidatePath("/admin/settings/calculator")

      return { success: t("Server.actions.success-delete") }
    } catch (error) {
      return { error: t("Server.actions.error") }
    }
  })

export const deleteFieldOfActivity = actionClient
  .schema(z.object({ uid: z.number() }))
  .action(async ({ parsedInput }) => {
    const t = await getTranslations()
    try {
      await db.fieldOfActivity.delete({ where: { uid: parsedInput.uid } })
      revalidatePath("/admin/settings/calculator")

      return { success: t("Server.actions.success-delete") }
    } catch (error) {
      return { error: t("Server.actions.error") }
    }
  })

export const deleteTaxSystem = actionClient
  .schema(z.object({ uid: z.number() }))
  .action(async ({ parsedInput }) => {
    const t = await getTranslations()
    try {
      await db.taxSystem.delete({ where: { uid: parsedInput.uid } })
      revalidatePath("/admin/settings/calculator")

      return { success: t("Server.actions.success-delete") }
    } catch (error) {
      return { error: t("Server.actions.error") }
    }
  })

export const deleteEmployeeRange = actionClient
  .schema(z.object({ uid: z.number() }))
  .action(async ({ parsedInput }) => {
    const t = await getTranslations()
    try {
      await db.employeeRange.delete({ where: { uid: parsedInput.uid } })
      revalidatePath("/admin/settings/calculator")

      return { success: t("Server.actions.success-delete") }
    } catch (error) {
      return { error: t("Server.actions.error") }
    }
  })

export const deleteTimePeriod = actionClient
  .schema(z.object({ uid: z.number() }))
  .action(async ({ parsedInput }) => {
    const t = await getTranslations()
    try {
      await db.timePeriod.delete({ where: { uid: parsedInput.uid } })
      revalidatePath("/admin/settings/calculator")

      return { success: t("Server.actions.success-delete") }
    } catch (error) {
      console.log(error)

      return { error: t("Server.actions.error") }
    }
  })

export const deleteServiceCost = actionClient
  .schema(z.object({ uid: z.number() }))
  .action(async ({ parsedInput }) => {
    const t = await getTranslations()
    try {
      await db.serviceCost.delete({ where: { uid: parsedInput.uid } })
      revalidatePath("/admin/settings/calculator")

      return { success: t("Server.actions.success-delete") }
    } catch (error) {
      return { error: t("Server.actions.error") }
    }
  })
