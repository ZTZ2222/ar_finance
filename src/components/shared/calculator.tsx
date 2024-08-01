"use client"

import { useState } from "react"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { type FieldValues, useForm } from "react-hook-form"
import { z } from "zod"
import { cn } from "@/lib/utils"
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

const formSchema = z.object({
  ownershipType: z.string().min(1),
  fieldOfActivity: z.string().min(1),
  taxSystem: z.string().min(1),
  numberOfEmployees: z.coerce.number().min(1),
  numberOfMonths: z.coerce.number(),
})

export default function Calculator({ className }: { className?: string }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ownershipType: "",
      fieldOfActivity: "",
      taxSystem: "",
      numberOfEmployees: "",
      numberOfMonths: "",
    },
  })

  const [totalCost, setTotalCost] = useState<number | null>(null)
  const month = parseInt(form.watch("numberOfMonths"))

  function onSubmit(values: FieldValues) {
    const { success, data } = formSchema.safeParse(values)
    if (success) {
      setTotalCost(2900 * data.numberOfEmployees * data.numberOfMonths)
    }
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
              name="ownershipType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Форма собственности</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите вариант" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="OSOO">ОСОО</SelectItem>
                      <SelectItem value="IP">ИП</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            {/* Сфера деятельности */}
            <FormField
              control={form.control}
              name="fieldOfActivity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Сфера деятельности</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите вариант" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="enterpreneurship">
                        Предпринимательство
                      </SelectItem>
                      <SelectItem value="business">Бизнес</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            {/* Система налогообложения */}
            <FormField
              control={form.control}
              name="taxSystem"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Система налогообложения</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите вариант" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="ORN">
                        Общий режим налогообложения
                      </SelectItem>
                      <SelectItem value="SNR">
                        Специальный налоговый режим
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            {/* Количество сотрудников */}
            <FormField
              control={form.control}
              name="numberOfEmployees"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Количество сотрудников</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Напишите количество"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex-col gap-[50px] p-2.5 pb-[50px] pt-0 lg:shrink-0 lg:p-0">
            {/* Кнопки */}
            <FormField
              control={form.control}
              name="numberOfMonths"
              render={({ field }) => (
                <FormItem className="lg:w-full">
                  <FormControl>
                    <ButtonGroup onValueChange={field.onChange}>
                      <FormControl>
                        <ButtonGroupItem
                          type="submit"
                          value="1"
                          label="1 месяц"
                        />
                      </FormControl>
                      <FormControl>
                        <ButtonGroupItem
                          type="submit"
                          value="3"
                          label="3 месяца"
                        />
                      </FormControl>
                      <FormControl>
                        <ButtonGroupItem
                          type="submit"
                          value="12"
                          label="1 год"
                        />
                      </FormControl>
                    </ButtonGroup>
                  </FormControl>
                </FormItem>
              )}
            />
            {totalCost && month ? (
              <div className="flex flex-col gap-[50px] lg:h-full lg:max-w-[373px] lg:justify-between">
                <div className="flex flex-col items-center gap-5 text-center">
                  <h5 className="text-lg font-medium leading-[27px] text-gray-650">
                    Стоимость бухгалтерского обслуживания за{" "}
                    <span className="text-rose-750">{month} месяц(а)</span>
                  </h5>
                  <span className="text-4xl font-black text-[#101828]">
                    {totalCost.toLocaleString("ru-RU")} сом
                  </span>
                  <span className="text-sm text-gray-650">
                    {(totalCost / month).toLocaleString("ru-RU")} сом в месяц
                    без скидки
                  </span>
                </div>
                <Button type="button" variant="core" size="mobile">
                  Получить предложение
                </Button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-5 text-center lg:mt-auto lg:max-w-[373px]">
                <p className="text-sm text-black">
                  Выберите варианты, подходящие под Ваш бизнес, и мы рассчитаем
                  стоимость
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
