import { z } from "zod"

export const clientRequestCreateSchema = z.object({
  name: z.string().min(3),
  contactPhone: z.string().min(9),
  planId: z.coerce.number().optional().nullable(),
  formOfOwnershipId: z.coerce.number().optional().nullable(),
  fieldOfActivityId: z.coerce.number().optional().nullable(),
  taxSystemId: z.coerce.number().optional().nullable(),
  employeeRangeId: z.coerce.number().optional().nullable(),
  timePeriodId: z.coerce.number().optional().nullable(),
  additionalInfo: z.string().optional().nullable(),
})

export const clientRequestUpdateSchema = clientRequestCreateSchema.extend({
  uid: z.number(),
  status: z.enum(["READ", "UNREAD"]),
  createdAt: z.date(),
})

export const clientRequestReadSchema = clientRequestUpdateSchema

export type zClientRequestСreate = z.infer<typeof clientRequestCreateSchema>
export type zClientRequestUpdate = z.infer<typeof clientRequestUpdateSchema>
export type zClientRequestRead = z.infer<typeof clientRequestReadSchema>
