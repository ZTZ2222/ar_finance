"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { cn } from "@/lib/utils"
import { useGetCalculatorFields } from "@/hooks/use-fetch-data"
import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import FormRequest from "@/components/forms/form-request"
import Spinner from "@/components/shared/spinner"
import {
  getCalculatorFields,
  getServiceCost,
} from "@/server/data-access-layer/calculator"
import {
  type zFieldOfActivity,
  type zFormOfOwnership,
  type zTaxSystem,
  type zTimePeriod,
} from "@/types/calculator.schema"

type Props = {
  className?: string
}

export default function Calculator({ className }: Props) {
  const locale = useLocale()
  const t = useTranslations("Components.FormServiceCost")
  const { data, loading, error } = useGetCalculatorFields(getCalculatorFields)

  const [formOfOwnershipId, setFormOfOwnershipId] = useState<number>(
    (data?.formsOfOwnership && data?.formsOfOwnership[0]?.uid) || 1,
  )
  const [fieldOfActivityId, setFieldOfActivityId] = useState<number>(
    (data?.fieldsOfActivity && data?.fieldsOfActivity[0]?.uid) || 1,
  )
  const [taxSystemId, setTaxSystemId] = useState<number>(
    (data?.taxSystems && data?.taxSystems[0]?.uid) || 1,
  )
  const [employeeRangeId, setEmployeeRangeId] = useState<number>(
    (data?.employeeRanges && data?.employeeRanges[0]?.uid) || 1,
  )
  const [timePeriodId, setTimePeriodId] = useState<number>(
    (data?.timePeriods && data?.timePeriods[0]?.uid) || 1,
  )

  const [totalAmount, setTotalAmount] = useState<number>(0)
  const [totalAmountAfterDiscount, setTotalAmountAfterDiscount] =
    useState<number>(0)

  // Define calculateCost as a memoized callback function
  const calculateCost = useCallback(async () => {
    try {
      const serviceCost = await getServiceCost(
        formOfOwnershipId,
        fieldOfActivityId,
        taxSystemId,
        employeeRangeId,
        timePeriodId,
      )
      if (serviceCost) {
        setTotalAmount(serviceCost.totalAmount)
        setTotalAmountAfterDiscount(serviceCost.totalAmountAfterDiscount)
      } else {
        console.error("Failed to get service cost:", serviceCost)
      }
    } catch (error) {
      console.log(error)
    }
  }, [
    formOfOwnershipId,
    fieldOfActivityId,
    taxSystemId,
    employeeRangeId,
    timePeriodId,
  ])

  useEffect(() => {
    calculateCost()
  }, [calculateCost])

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
    <Card
      className={cn(
        "overflow-y-auto rounded-[30px] bg-white shadow-card lg:flex lg:w-full lg:justify-evenly lg:gap-20 lg:px-[40px] lg:py-[50px]",
        className,
      )}
    >
      <CardHeader className="sr-only">
        <CardTitle>Калькулятор</CardTitle>
        <CardDescription>Калькулятор</CardDescription>
      </CardHeader>
      <CardContent className="shrink-0 space-y-3 px-4 pb-[25px] pt-[30px] lg:w-[320px] lg:space-y-[30px] lg:p-0 lg:pb-10 lg:pt-[50px]">
        {/* Форма собственности */}
        <div className="space-y-2">
          <Label>{t("form-of-ownership")}</Label>
          <Select
            defaultValue={formOfOwnershipId.toString()}
            onValueChange={value => setFormOfOwnershipId(parseInt(value))}
          >
            <SelectTrigger>
              <SelectValue placeholder={t("select-placeholder")} />
            </SelectTrigger>
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
        </div>

        {/* Сфера деятельности */}
        <div className="space-y-2">
          <Label>{t("field-of-activity")}</Label>
          <Select
            defaultValue={fieldOfActivityId.toString()}
            onValueChange={value => setFieldOfActivityId(parseInt(value))}
          >
            <SelectTrigger>
              <SelectValue placeholder={t("select-placeholder")} />
            </SelectTrigger>
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
        </div>

        {/* Система налогообложения */}
        <div className="space-y-2">
          <Label>{t("tax-system")}</Label>
          <Select
            defaultValue={taxSystemId.toString()}
            onValueChange={value => setTaxSystemId(parseInt(value))}
          >
            <SelectTrigger>
              <SelectValue placeholder={t("select-placeholder")} />
            </SelectTrigger>
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
        </div>

        {/* Количество сотрудников */}
        <div className="space-y-2">
          <Label>{t("employee-range")}</Label>
          <Select
            defaultValue={employeeRangeId.toString()}
            onValueChange={value => setEmployeeRangeId(parseInt(value))}
          >
            <SelectTrigger>
              <SelectValue placeholder={t("select-placeholder")} />
            </SelectTrigger>
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
        </div>
      </CardContent>

      <CardFooter className="flex-col gap-[30px] p-2.5 pb-[30px] pt-0 lg:shrink-0 lg:gap-[50px] lg:p-0 lg:pb-[50px]">
        {/* Кнопки */}
        <div className="space-y-2 lg:w-full">
          <ButtonGroup
            defaultValue={timePeriodId.toString()}
            onValueChange={value => setTimePeriodId(parseInt(value))}
          >
            {data?.timePeriods?.map(option => (
              <ButtonGroupItem
                key={option.uid}
                value={option.uid?.toString() || "1"}
                label={
                  option[`period_${locale}` as keyof zTimePeriod]?.toString() ||
                  ""
                }
              />
            ))}
          </ButtonGroup>
        </div>

        {totalAmountAfterDiscount ? (
          <div className="flex flex-col gap-[30px] lg:h-full lg:max-w-[373px] lg:justify-between lg:gap-[50px]">
            <div className="flex flex-col items-center gap-5 text-center">
              <h5 className="text-lg font-medium leading-[27px] text-gray-650">
                {t("cost-of-accounting-services")}{" "}
                <span className="text-rose-750">
                  {
                    data?.timePeriods?.find(
                      option => option.uid === timePeriodId,
                    )?.[`period_${locale}` as keyof zTimePeriod]
                  }
                </span>
              </h5>
              <span className="text-4xl font-black text-[#101828]">
                {totalAmountAfterDiscount.toLocaleString("ru-RU")}{" "}
                {t("currency")}
              </span>
              {totalAmount && (
                <span className="text-sm text-gray-650">
                  <s>
                    {totalAmount.toLocaleString("ru-RU")}{" "}
                    {t("price-without-discount")}
                  </s>
                </span>
              )}
            </div>
            <FormRequest
              btnText={t("button-get-offer")}
              additionalInfo={{
                formOfOwnershipId,
                fieldOfActivityId,
                taxSystemId,
                employeeRangeId,
                timePeriodId,
                totalAmount,
                totalAmountAfterDiscount,
              }}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-5 text-center lg:mt-auto lg:max-w-[373px]">
            <p className="text-sm text-black">{t("calculator-helper-text")}</p>
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
  )
}
