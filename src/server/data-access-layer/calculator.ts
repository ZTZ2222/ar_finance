"use server"

import { db } from "@/server"
import type {
  CalculatorFields,
  zEmployeeRange,
  zFieldOfActivity,
  zFormOfOwnership,
  zServiceCost,
  zTaxSystem,
  zTimePeriod,
} from "@/types/calculator.schema"

export async function getOwnershipTypes(): Promise<zFormOfOwnership[] | null> {
  try {
    const options = await db.formOfOwnership.findMany({
      orderBy: { uid: "asc" },
    })
    if (!options) return null
    return options
  } catch (error) {
    console.log(error)

    return null
  }
}

export async function getFieldOfActivities(): Promise<
  zFieldOfActivity[] | null
> {
  try {
    const options = await db.fieldOfActivity.findMany({
      orderBy: { uid: "asc" },
    })
    if (!options) return null
    return options
  } catch (error) {
    return null
  }
}

export async function getTaxSystems(): Promise<zTaxSystem[] | null> {
  try {
    const options = await db.taxSystem.findMany({
      orderBy: { uid: "asc" },
    })
    if (!options) return null
    return options
  } catch (error) {
    return null
  }
}

export async function getEmployeeRanges(): Promise<zEmployeeRange[] | null> {
  try {
    const options = await db.employeeRange.findMany({
      orderBy: { uid: "asc" },
    })
    if (!options) return null
    return options
  } catch (error) {
    return null
  }
}

export async function getTimePeriods(): Promise<zTimePeriod[] | null> {
  try {
    const options = await db.timePeriod.findMany({
      orderBy: { uid: "asc" },
    })
    if (!options) return null
    return options
  } catch (error) {
    return null
  }
}

export async function getCalculatorFields(): Promise<CalculatorFields> {
  const formsOfOwnership = await getOwnershipTypes()
  const fieldsOfActivity = await getFieldOfActivities()
  const taxSystems = await getTaxSystems()
  const employeeRanges = await getEmployeeRanges()
  const timePeriods = await getTimePeriods()

  return {
    formsOfOwnership,
    fieldsOfActivity,
    taxSystems,
    employeeRanges,
    timePeriods,
  }
}

export async function getServiceCostList(): Promise<zServiceCost[] | null> {
  try {
    const serviceCosts = await db.serviceCost.findMany({
      orderBy: { uid: "asc" },
    })
    if (!serviceCosts) return null
    return serviceCosts
  } catch (error) {
    return null
  }
}

export async function getServiceCost(
  formOfOwnershipId: number,
  fieldOfActivityId: number,
  taxSystemId: number,
  employeeRangeId: number,
  timePeriodId: number,
): Promise<zServiceCost | null> {
  try {
    const serviceCost = await db.serviceCost.findUnique({
      where: {
        formOfOwnershipId_fieldOfActivityId_taxSystemId_employeeRangeId_timePeriodId:
          {
            formOfOwnershipId,
            fieldOfActivityId,
            taxSystemId,
            employeeRangeId,
            timePeriodId,
          },
      },
    })
    if (serviceCost) {
      return serviceCost
    } else {
      console.error("Failed to get service cost:", serviceCost)
      return null
    }
  } catch (error) {
    console.log(error)
    return null
  }
}
