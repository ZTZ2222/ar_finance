import { z } from "zod"

export const formOfOwnershipSchema = z.object({
  uid: z.number().optional(),
  name_ru: z.string(),
  name_en: z.string(),
  name_ky: z.string(),
})

export const fieldOfActivitySchema = z.object({
  uid: z.number().optional(),
  name_ru: z.string(),
  name_en: z.string(),
  name_ky: z.string(),
})

export const taxSystemSchema = z.object({
  uid: z.number().optional(),
  name_ru: z.string(),
  name_en: z.string(),
  name_ky: z.string(),
})

export const EmployeeRangeSchema = z.object({
  uid: z.number().optional(),
  range: z.string(),
})

export const timePeriodSchema = z.object({
  uid: z.number().optional(),
  period_ru: z.string(),
  period_en: z.string(),
  period_ky: z.string(),
})

export const serviceCostSchema = z.object({
  uid: z.number().optional(),
  formOfOwnershipId: z.coerce.number(),
  fieldOfActivityId: z.coerce.number(),
  taxSystemId: z.coerce.number(),
  employeeRangeId: z.coerce.number(),
  timePeriodId: z.coerce.number(),
  totalAmount: z.coerce.number(),
  totalAmountAfterDiscount: z.coerce.number(),
  createdAt: z.date().optional(),
})

export type zFormOfOwnership = z.infer<typeof formOfOwnershipSchema>
export type zFieldOfActivity = z.infer<typeof fieldOfActivitySchema>
export type zTaxSystem = z.infer<typeof taxSystemSchema>
export type zEmployeeRange = z.infer<typeof EmployeeRangeSchema>
export type zTimePeriod = z.infer<typeof timePeriodSchema>
export type zServiceCost = z.infer<typeof serviceCostSchema>

export type CalculatorFields = {
  formsOfOwnership: zFormOfOwnership[] | null
  fieldsOfActivity: zFieldOfActivity[] | null
  taxSystems: zTaxSystem[] | null
  employeeRanges: zEmployeeRange[] | null
  timePeriods: zTimePeriod[] | null
}
