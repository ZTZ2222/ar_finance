"use client"

import React from "react"
import { Plus, Trash2 } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { useAction } from "next-safe-action/hooks"
import { useFieldArray, useForm } from "react-hook-form"
import { toast } from "sonner"
import { v4 as uuidv4 } from "uuid"
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
import { updateContacts } from "@/server/actions/content-action"
import { type zContact } from "@/types/content.schema"

type Props = {
  contactsData: zContact[]
  className?: string
}

type FormValues = {
  contacts: zContact[]
}

export default function ContactsForm({ contactsData, className }: Props) {
  const t = useTranslations("Components.FormSection")
  const form = useForm<FormValues>({
    defaultValues: {
      contacts: contactsData.length
        ? contactsData
        : [
            {
              id: "",
              name_ru: "",
              name_en: "",
              name_ky: "",
              link: "",
              icon: "",
            },
          ],
    },
  })

  const {
    fields: contactFields,
    append,
    remove,
  } = useFieldArray({
    control: form.control,
    name: "contacts",
  })

  const { execute, isExecuting } = useAction(updateContacts, {
    onSuccess() {
      toast.success(t("update-success"))
    },
    onError() {
      toast.error(t("update-error"))
    },
  })

  function onSubmit(data: FormValues) {
    // toast(JSON.stringify(data))
    const formData = data.contacts
    execute(formData)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
        <CardContent className="space-y-10">
          {/* Карточки */}
          <div className="flex flex-wrap gap-10 xl:col-span-2">
            {contactFields.map((contact, index) => (
              <div
                key={index}
                className={cn(
                  "space-y-5 rounded-lg border border-slate-200 p-5",
                  contactsData.length <= 3 && "flex-1",
                )}
              >
                {/* Delete button */}
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-5 w-5" />
                </button>

                {/* Image Upload */}
                <FormField
                  control={form.control}
                  name={`contacts.${index}.icon`}
                  render={({ field }) => (
                    <ImageUpload
                      field={field}
                      existingImage={contact.icon || undefined}
                      className="mx-auto"
                    />
                  )}
                />

                {/* Card Name (RU) */}
                <FormField
                  control={form.control}
                  name={`contacts.${index}.name_ru`}
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

                {/* Card Name (EN) */}
                <FormField
                  control={form.control}
                  name={`contacts.${index}.name_en`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Card {index + 1} - Name (EN)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter card name (en)"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Card Name (KY) */}
                <FormField
                  control={form.control}
                  name={`contacts.${index}.name_ky`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Card {index + 1} - Name (KY)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter card name (ky)"
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
                  name={`contacts.${index}.link`}
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
                name_ru: "",
                name_en: "",
                name_ky: "",
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
