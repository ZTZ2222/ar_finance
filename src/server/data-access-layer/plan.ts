"use server"

import { getLocale } from "next-intl/server"
import { db } from "@/server"
import type { NormalizedPlan, zPlanRead } from "@/types/plan.schema"

export async function getPlans(): Promise<zPlanRead[] | null> {
  try {
    const plans = await db.plan.findMany({
      orderBy: { uid: "asc" },
    })
    if (plans.length === 0) return null
    return plans
  } catch (error) {
    return null
  }
}

export async function getNormalizedPlans(): Promise<NormalizedPlan[] | null> {
  const locale = await getLocale()
  try {
    const plans = await db.plan.findMany({
      orderBy: { uid: "asc" },
    })
    if (plans.length === 0) return null
    const normalizedPlans = plans.map(plan => ({
      uid: plan.uid,
      title: plan[`title_${locale}` as keyof typeof plan] as string,
      description: plan[`description_${locale}` as keyof typeof plan] as string,
      price: plan[`price_${locale}` as keyof typeof plan] as string,
      bullets: plan[`bullets_${locale}` as keyof typeof plan] as string[],
      icon: plan.icon as string,
    }))

    return normalizedPlans
  } catch (error) {
    return null
  }
}
