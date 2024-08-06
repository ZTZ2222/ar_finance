"use client"

import React from "react"
import { Plus, Trash2 } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { useAction } from "next-safe-action/hooks"
import { useFieldArray, useForm } from "react-hook-form"
import { toast } from "sonner"
import { v4 as uuidv4 } from "uuid"
import { AppConfig } from "@/lib/i18n"
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
import ImageUpload from "@/components/ui/image-upload"
import { Input } from "@/components/ui/input"
import { updateSocials } from "@/server/actions/content-action"
import { type zSocial } from "@/types/content.schema"

type Props = {
  socialsData: zSocial[]
  className?: string
}

type FormValues = {
  socials: zSocial[]
}

export default function SocialsForm({ socialsData, className }: Props) {
  const t = useTranslations("Components.FormSection")
  const form = useForm<FormValues>({
    defaultValues: {
      socials: socialsData.length
        ? socialsData
        : [
            {
              id: "",
              name: "",
              link: "",
              icon: "",
            },
          ],
    },
  })

  const {
    fields: socialFields,
    append,
    remove,
  } = useFieldArray({
    control: form.control,
    name: "socials",
  })

  const { execute, isExecuting } = useAction(updateSocials, {
    onSuccess() {
      toast.success(t("update-success"))
    },
    onError() {
      toast.error(t("update-error"))
    },
  })

  function onSubmit(data: FormValues) {
    // toast(JSON.stringify(data))
    const formData = data.socials
    execute(formData)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
        <CardContent className="space-y-10">
          {/* Карточки */}
          <div className="flex flex-wrap gap-10 xl:col-span-2">
            {socialFields.map((social, index) => (
              <div
                key={index}
                className={cn(
                  "space-y-5 rounded-lg border border-slate-200 p-5",
                  socialsData.length <= 3 && "flex-1",
                )}
              >
                {/* Delete button */}
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="ml-auto w-full text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-5 w-5" />
                </button>

                {/* Image Upload */}
                <FormField
                  control={form.control}
                  name={`socials.${index}.icon`}
                  render={({ field }) => (
                    <ImageUpload
                      field={field}
                      existingImage={social.icon || undefined}
                      className="mx-auto"
                    />
                  )}
                />

                {/* Card Name (RU) */}
                <FormField
                  control={form.control}
                  name={`socials.${index}.name`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Card {index + 1} - Name (RU)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter card name (ru)"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Card Link */}
                <FormField
                  control={form.control}
                  name={`socials.${index}.link`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Card {index + 1} - Link</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter card link"
                          {...field}
                          value={(field.value as string) || ""}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="space-x-5 border-t px-6 py-4">
          <Button
            variant="secondary"
            type="button"
            onClick={() =>
              append({
                id: uuidv4(),
                name: "",
                link: "",
                icon: "",
              })
            }
            className="flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>Add element</span>
          </Button>
          <Button type="submit" disabled={isExecuting}>
            {t("form-save")}
          </Button>
        </CardFooter>
      </form>
    </Form>
  )
}
