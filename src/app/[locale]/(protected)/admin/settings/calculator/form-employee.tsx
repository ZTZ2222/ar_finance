"use client"

import React from "react"
import { PlusCircle, X } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { useAction } from "next-safe-action/hooks"
import { useFieldArray, useForm } from "react-hook-form"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  createEmployeeRange,
  deleteEmployeeRange,
} from "@/server/actions/calculator-action"
import type { zEmployeeRange } from "@/types/calculator.schema"

type Props = {
  optionsData: zEmployeeRange[] | null
  className?: string
}

type FormValues = {
  options: zEmployeeRange[]
}

export default function EmployeeRangeForm({ optionsData, className }: Props) {
  const locale = useLocale()
  const t = useTranslations("Components.FormOptions")
  const form = useForm<FormValues>({
    defaultValues: {
      options: [],
    },
  })

  const newOption: zEmployeeRange = {
    range: "",
  }

  const {
    fields: optionFields,
    append,
    remove,
  } = useFieldArray({
    control: form.control,
    name: "options",
  })

  const { execute, isExecuting } = useAction(createEmployeeRange, {
    onSuccess: ({ data }) => {
      if (data?.error) {
        toast.error(data.error)
      }
      if (data?.success) {
        toast.success(data.success)
        form.reset()
      }
    },
  })

  const { execute: deleteDB, isExecuting: isDeleting } = useAction(
    deleteEmployeeRange,
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
    execute(data.options)
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-2.5 rounded-md border p-2.5", className)}
      >
        {/* Опции */}
        <div className="flex flex-wrap gap-4 xl:col-span-2">
          {optionsData?.map((option, index) => (
            <div
              key={option.uid}
              className={cn(
                "flex gap-2.5 rounded-lg border border-slate-200 p-2.5",
              )}
            >
              <div>{option.range}</div>

              {/* Delete button */}
              <Button
                type="button"
                variant="destructive"
                size="icon"
                onClick={handleDelete.bind(null, option.uid, index)}
                className="size-6"
                disabled={isDeleting}
              >
                <X className="size-4" />
              </Button>
            </div>
          ))}
          {/* Add new option */}
          <Button
            variant="ghost"
            size="icon"
            type="button"
            onClick={() => append(newOption)}
            className="w-fit"
          >
            <PlusCircle className="size-6" />
          </Button>
        </div>
        {optionFields.map((optionField, index) => (
          <div
            className="flex items-center gap-2.5 rounded-lg border border-slate-200 p-2.5"
            key={optionField.id}
          >
            {/* Option (Multi-lang) */}
            <FormField
              control={form.control}
              name={`options.${index}.range` as const}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder={`${t("placeholder-type")}`}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Delete button */}
            <Button
              type="button"
              variant="destructive"
              size="icon"
              onClick={handleDelete.bind(null, optionField.uid, index)}
              className="size-6 shrink-0"
              disabled={isDeleting}
            >
              <X className="size-4" />
            </Button>
          </div>
        ))}
        <Button type="submit" disabled={isExecuting}>
          {t("button-save")}
        </Button>
      </form>
    </Form>
  )
}
