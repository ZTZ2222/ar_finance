"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useLocale, useTranslations } from "next-intl"
import { type FieldValues, useForm } from "react-hook-form"
import { z } from "zod"
import { cn } from "@/lib/utils"
import { useGetCalculatorFields } from "@/hooks/use-fetch-data"
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
import Spinner from "@/components/shared/spinner"
import { db } from "@/server"
import {
  getCalculatorFields,
  getServiceCost,
} from "@/server/data-access-layer/calculator"
import {
  serviceCostSchema,
  type zFieldOfActivity,
  type zFormOfOwnership,
  zServiceCost,
  type zTaxSystem,
  type zTimePeriod,
} from "@/types/calculator.schema"

const formSchema = z.object({
  formOfOwnershipId: z.coerce.number(),
  fieldOfActivityId: z.coerce.number(),
  taxSystemId: z.coerce.number(),
  employeeRangeId: z.coerce.number(),
  timePeriodId: z.coerce.number(),
})

type FormSchema = z.infer<typeof formSchema>

type Props = {
  className?: string
}

export default function Calculator({ className }: Props) {
  const locale = useLocale()
  const t = useTranslations("Components.FormServiceCost")
  const { data, loading, error } = useGetCalculatorFields(getCalculatorFields)

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      formOfOwnershipId:
        (data?.formsOfOwnership && data?.formsOfOwnership[0]?.uid) || 1,
      fieldOfActivityId:
        (data?.fieldsOfActivity && data?.fieldsOfActivity[0]?.uid) || 1,
      taxSystemId: (data?.taxSystems && data?.taxSystems[0]?.uid) || 1,
      employeeRangeId:
        (data?.employeeRanges && data?.employeeRanges[0]?.uid) || 1,
      timePeriodId: (data?.timePeriods && data?.timePeriods[0]?.uid) || 3,
    },
  })

  const [totalAmount, setTotalAmount] = useState<number | null>(null)
  const [totalAmountAfterDisc, setTotalAmountAfterDisc] = useState<
    number | null
  >(null)

  const formValues = form.watch()

  useEffect(() => {
    const calculateCost = async () => {
      try {
        const serviceCost = await getServiceCost(
          Number(formValues.formOfOwnershipId),
          Number(formValues.fieldOfActivityId),
          Number(formValues.taxSystemId),
          Number(formValues.employeeRangeId),
          Number(formValues.timePeriodId),
        )
        if (serviceCost) {
          setTotalAmount(serviceCost.total_amount)
          setTotalAmountAfterDisc(serviceCost.total_amount_after_discount)
        } else {
          console.error("Failed to get service cost:", serviceCost)
        }
      } catch (error) {
        console.log(error)
      }
    }

    calculateCost()
  }, [formValues])

  function onSubmit(values: FormSchema) {
    console.log(values)
  }
  if (loading) {
    return (
      <Card
        className={cn(
          "flex h-[850px] w-full items-center justify-center rounded-[30px] bg-white shadow-card lg:h-[480px]",
          className,
        )}
      >
        <CardHeader className="sr-only">
          <CardTitle>Калькулятор</CardTitle>
          <CardDescription>Калькулятор</CardDescription>
        </CardHeader>
        <CardContent>
          <Spinner />
        </CardContent>
      </Card>
    )
  }
  if (error) {
    return (
      <Card
        className={cn(
          "flex h-[850px] w-full items-center justify-center rounded-[30px] bg-white shadow-card lg:h-[480px]",
          className,
        )}
      >
        <CardHeader>
          <CardTitle>Error!</CardTitle>
          <CardDescription>
            Calculator is temporarily unavailable. 😔 Please try again later.
          </CardDescription>
        </CardHeader>
      </Card>
    )
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card
          className={cn(
            "rounded-[30px] bg-white shadow-card lg:flex lg:w-full lg:justify-evenly lg:gap-20 lg:px-[40px] lg:py-[50px]",
            className,
          )}
        >
          <CardHeader className="sr-only">
            <CardTitle>Калькулятор</CardTitle>
            <CardDescription>Калькулятор</CardDescription>
          </CardHeader>
          <CardContent className="shrink-0 space-y-[30px] px-4 pb-10 pt-[50px] lg:w-[320px] lg:p-0">
            {/* Форма собственности */}
            <FormField
              control={form.control}
              name="formOfOwnershipId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("form-of-ownership")}</FormLabel>
                  <Select
                    defaultValue={field.value.toString()}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={t("select-placeholder")} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {data?.formsOfOwnership?.map(option => (
                        <SelectItem
                          key={option.uid}
                          value={option.uid?.toString() || "1"}
                        >
                          {option[`name_${locale}` as keyof zFormOfOwnership]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            {/* Сфера деятельности */}
            <FormField
              control={form.control}
              name="fieldOfActivityId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("field-of-activity")}</FormLabel>
                  <Select
                    defaultValue={field.value.toString()}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={t("select-placeholder")} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {data?.fieldsOfActivity?.map(option => (
                        <SelectItem
                          key={option.uid}
                          value={option.uid?.toString() || "1"}
                        >
                          {option[`name_${locale}` as keyof zFieldOfActivity]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            {/* Система налогообложения */}
            <FormField
              control={form.control}
              name="taxSystemId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("tax-system")}</FormLabel>
                  <Select
                    defaultValue={field.value.toString()}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={t("select-placeholder")} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {data?.taxSystems?.map(option => (
                        <SelectItem
                          key={option.uid}
                          value={option.uid?.toString() || "1"}
                        >
                          {option[`name_${locale}` as keyof zTaxSystem]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            {/* Количество сотрудников */}
            <FormField
              control={form.control}
              name="employeeRangeId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("employee-range")}</FormLabel>
                  <Select
                    defaultValue={field.value.toString()}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={t("select-placeholder")} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {data?.employeeRanges?.map(option => (
                        <SelectItem
                          key={option.uid}
                          value={option.uid?.toString() || "1"}
                        >
                          {option.range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex-col gap-[50px] p-2.5 pb-[50px] pt-0 lg:shrink-0 lg:p-0">
            {/* Кнопки */}
            <FormField
              control={form.control}
              name="timePeriodId"
              render={({ field }) => (
                <FormItem className="lg:w-full">
                  <FormControl>
                    <ButtonGroup
                      defaultValue={field.value.toString()}
                      onValueChange={field.onChange}
                    >
                      {data?.timePeriods?.map(option => (
                        <ButtonGroupItem
                          key={option.uid}
                          value={option.uid?.toString() || "1"}
                          label={
                            option[
                              `period_${locale}` as keyof zTimePeriod
                            ]?.toString() || ""
                          }
                        />
                      ))}
                    </ButtonGroup>
                  </FormControl>
                </FormItem>
              )}
            />
            {totalAmount && totalAmountAfterDisc ? (
              <div className="flex flex-col gap-[50px] lg:h-full lg:max-w-[373px] lg:justify-between">
                <div className="flex flex-col items-center gap-5 text-center">
                  <h5 className="text-lg font-medium leading-[27px] text-gray-650">
                    Стоимость бухгалтерского обслуживания за{" "}
                    <span className="text-rose-750">{3} месяц(а)</span>
                  </h5>
                  <span className="text-4xl font-black text-[#101828]">
                    {totalAmountAfterDisc.toLocaleString("ru-RU")} сом
                  </span>
                  <span className="text-sm text-gray-650">
                    {totalAmount.toLocaleString("ru-RU")} сом в месяц без скидки
                  </span>
                </div>
                <Button type="button" variant="core" size="mobile">
                  {t("button-get-offer")}
                </Button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-5 text-center lg:mt-auto lg:max-w-[373px]">
                <p className="text-sm text-black">
                  {t("calculator-helper-text")}
                </p>
                <div className="relative size-[200px]">
                  <Image
                    src="/assets/calc-illustration.png"
                    alt="Illustration"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            )}
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}
