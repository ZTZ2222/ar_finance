"use client"

import React from "react"
import { PlusCircle, Trash2, X } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { useAction } from "next-safe-action/hooks"
import { useFieldArray, useForm } from "react-hook-form"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CardContent, CardFooter } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  deleteServiceCost,
  upsertServiceCosts,
} from "@/server/actions/calculator-action"
import type {
  zEmployeeRange,
  zFieldOfActivity,
  zFormOfOwnership,
  zServiceCost,
  zTaxSystem,
  zTimePeriod,
} from "@/types/calculator.schema"

type Props = {
  existingServiceCosts: zServiceCost[] | null
  ownershipTypes: zFormOfOwnership[] | null
  fieldOfActivities: zFieldOfActivity[] | null
  taxSystems: zTaxSystem[] | null
  employeeRanges: zEmployeeRange[] | null
  timePeriods: zTimePeriod[] | null
  className?: string
}

type FormValues = {
  serviceCosts: zServiceCost[]
}

export default function ServiceCostForm({
  existingServiceCosts,
  ownershipTypes,
  fieldOfActivities,
  taxSystems,
  employeeRanges,
  timePeriods,
  className,
}: Props) {
  const locale = useLocale()
  const t = useTranslations("Components.FormServiceCost")
  const form = useForm<FormValues>({
    defaultValues: {
      serviceCosts: existingServiceCosts || [],
    },
  })

  const newServiceCost: zServiceCost = {
    formOfOwnershipId: (ownershipTypes && ownershipTypes[0]?.uid) || 1,
    fieldOfActivityId: (fieldOfActivities && fieldOfActivities[0]?.uid) || 1,
    taxSystemId: (taxSystems && taxSystems[0]?.uid) || 1,
    employeeRangeId: (employeeRanges && employeeRanges[0]?.uid) || 1,
    timePeriodId: (timePeriods && timePeriods[0]?.uid) || 1,
    total_amount: 0,
    total_amount_after_discount: 0,
  }

  const tableHeadList = [
    t("form-of-ownership"),
    t("field-of-activity"),
    t("tax-system"),
    t("employee-range"),
    t("time-period"),
    t("total-amount"),
    t("total-amount-after-discount"),
    t("actions"),
  ]

  const {
    fields: serviceCostFields,
    append,
    remove,
  } = useFieldArray({
    control: form.control,
    name: "serviceCosts",
  })

  const { execute, isExecuting } = useAction(upsertServiceCosts, {
    onSuccess: ({ data }) => {
      if (data?.error) {
        toast.error(data.error)
      }
      if (data?.success) {
        toast.success(data.success)
      }
    },
  })

  const { execute: deleteDB, isExecuting: isDeleting } = useAction(
    deleteServiceCost,
    {
      onSuccess: ({ data }) => {
        if (data?.error) {
          toast.error(data.error)
        }
        if (data?.success) {
          toast.success(data.success)
        }
      },
    },
  )

  function handleDelete(itemUID: number | undefined, itemIndex: number) {
    if (!itemUID) {
      remove(itemIndex)
    } else {
      deleteDB({ uid: itemUID })
      remove(itemIndex)
    }
  }

  function onSubmit(data: FormValues) {
    execute(data.serviceCosts)
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-2.5 p-2.5", className)}
      >
        <CardContent className="space-y-10">
          <div className="flex flex-wrap gap-4 xl:col-span-2">
            <Table>
              <TableCaption>{t("table-caption")}</TableCaption>
              <TableHeader>
                <TableRow>
                  {tableHeadList.map(head => (
                    <TableHead key={head}>{head}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {serviceCostFields?.map((serviceCostField, index) => (
                  <TableRow key={serviceCostField.id}>
                    {/* Form Of Ownership */}
                    <TableCell>
                      <FormField
                        control={form.control}
                        name={`serviceCosts.${index}.formOfOwnershipId`}
                        render={({ field }) => (
                          <FormItem>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value.toString()}
                            >
                              <FormControl>
                                <SelectTrigger className="">
                                  <SelectValue placeholder="Select form of ownership" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {ownershipTypes?.map(type => (
                                  <SelectItem
                                    key={type.uid}
                                    value={type.uid?.toString() || ""}
                                  >
                                    {
                                      type[
                                        `name_${locale}` as keyof zFormOfOwnership
                                      ]
                                    }
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                    </TableCell>

                    {/* Field of activity */}
                    <TableCell>
                      <FormField
                        control={form.control}
                        name={`serviceCosts.${index}.fieldOfActivityId`}
                        render={({ field }) => (
                          <FormItem>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value.toString()}
                            >
                              <FormControl>
                                <SelectTrigger className="">
                                  <SelectValue placeholder="Select field of activity" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {fieldOfActivities?.map(type => (
                                  <SelectItem
                                    key={type.uid}
                                    value={type.uid?.toString() || ""}
                                  >
                                    {
                                      type[
                                        `name_${locale}` as keyof zFieldOfActivity
                                      ]
                                    }
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                    </TableCell>

                    {/* Tax system */}
                    <TableCell>
                      <FormField
                        control={form.control}
                        name={`serviceCosts.${index}.taxSystemId`}
                        render={({ field }) => (
                          <FormItem>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value.toString()}
                            >
                              <FormControl>
                                <SelectTrigger className="">
                                  <SelectValue placeholder="Select tax system" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {taxSystems?.map(type => (
                                  <SelectItem
                                    key={type.uid}
                                    value={type.uid?.toString() || ""}
                                  >
                                    {type[`name_${locale}` as keyof zTaxSystem]}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                    </TableCell>

                    {/* Employee range */}
                    <TableCell>
                      <FormField
                        control={form.control}
                        name={`serviceCosts.${index}.employeeRangeId`}
                        render={({ field }) => (
                          <FormItem>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value.toString()}
                            >
                              <FormControl>
                                <SelectTrigger className="">
                                  <SelectValue placeholder="Select employee range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {employeeRanges?.map(type => (
                                  <SelectItem
                                    key={type.uid}
                                    value={type.uid?.toString() || ""}
                                  >
                                    {type.range}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                    </TableCell>

                    {/* Time period */}
                    <TableCell>
                      <FormField
                        control={form.control}
                        name={`serviceCosts.${index}.timePeriodId`}
                        render={({ field }) => (
                          <FormItem>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value.toString()}
                            >
                              <FormControl>
                                <SelectTrigger className="w-max">
                                  <SelectValue placeholder="Select time period" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {timePeriods?.map(type => (
                                  <SelectItem
                                    key={type.uid}
                                    value={type.uid?.toString() || ""}
                                  >
                                    {
                                      type[
                                        `period_${locale}` as keyof zTimePeriod
                                      ]
                                    }
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                    </TableCell>

                    {/* Total amount */}
                    <TableCell>
                      <FormField
                        control={form.control}
                        name={`serviceCosts.${index}.total_amount`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="0"
                                {...field}
                                value={field.value || ""}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </TableCell>

                    {/* Total amount after discount */}
                    <TableCell>
                      <FormField
                        control={form.control}
                        name={`serviceCosts.${index}.total_amount_after_discount`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="0"
                                {...field}
                                value={field.value || ""}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </TableCell>

                    {/* Action button */}
                    <TableCell>
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={handleDelete.bind(
                          null,
                          serviceCostField.uid,
                          index,
                        )}
                        className="size-8"
                        disabled={isDeleting}
                      >
                        <Trash2 className="size-5" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <CardFooter className="gap-5 border-t px-6 py-4">
          <Button type="submit" disabled={isExecuting}>
            {t("button-save")}
          </Button>
          <Button
            variant="secondary"
            type="button"
            onClick={() => append(newServiceCost)}
            className="w-fit"
          >
            <PlusCircle className="mr-2 size-5" />
            {t("button-add-new")}
          </Button>
        </CardFooter>
      </form>
    </Form>
  )
}
