"use client"

import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
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
  ownershipType: z.string(),
  fieldOfActivity: z.string(),
  taxSystem: z.string(),
  numberOfEmployees: z.number(),
  numberOfMonths: z.coerce.number(),
})

export default function Calculator() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ownershipType: "IP",
      fieldOfActivity: "business",
      taxSystem: "ORN",
      numberOfEmployees: 5,
      numberOfMonths: 1,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast(JSON.stringify(values, null, 2))
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="rounded-[30px] bg-white shadow-card">
          <CardHeader className="sr-only">
            <CardTitle>Калькулятор</CardTitle>
            <CardDescription>Калькулятор</CardDescription>
          </CardHeader>
          <CardContent className="space-y-[30px] px-4 pb-10 pt-[50px]">
            {/* Форма собственности */}
            <FormField
              control={form.control}
              name="ownershipType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Форма собственности</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
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
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
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
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
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
                    <Input placeholder="Напишите количество" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex-col gap-[50px] p-2.5 pb-[50px] pt-0">
            <FormField
              control={form.control}
              name="numberOfMonths"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <ButtonGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value.toString()}
                    >
                      <FormControl>
                        <ButtonGroupItem value="1" label="1 месяц" />
                      </FormControl>
                      <FormControl>
                        <ButtonGroupItem value="3" label="3 месяца" />
                      </FormControl>
                      <FormControl>
                        <ButtonGroupItem value="12" label="1 год" />
                      </FormControl>
                    </ButtonGroup>
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex flex-col items-center gap-5 text-center">
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
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}
