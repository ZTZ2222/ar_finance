"use client"

import React from "react"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useLocale, useTranslations } from "next-intl"
import { useAction } from "next-safe-action/hooks"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { AppConfig } from "@/lib/i18n"
import FormCards from "@/app/[locale]/(protected)/admin/cms/[section]/form-cards"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { updateSection } from "@/server/actions/content-action"
import {
  sectionSchema,
  type zCard,
  type zSection,
} from "@/types/content.schema"

type Props = {
  sectionData: zSection
  className?: string
}

export default function SectionForm({ sectionData, className }: Props) {
  const locale = useLocale()
  const t = useTranslations("Components.FormSection")
  const form = useForm<zSection>({
    resolver: zodResolver(sectionSchema),
    defaultValues: sectionData,
  })

  const { execute, isExecuting } = useAction(updateSection, {
    onSuccess() {
      toast.success(t("update-success"))
    },
    onError() {
      toast.error(t("update-error"))
    },
  })

  function onSubmit(data: zSection) {
    execute(data)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
        <CardContent className="space-y-10">
          <Tabs defaultValue={locale}>
            <TabsList className="mb-5">
              {AppConfig.locales.map(locale => (
                <TabsTrigger key={locale.id} value={locale.id}>
                  {locale.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {AppConfig.locales.map(locale => (
              <TabsContent
                key={locale.id}
                value={locale.id}
                className="grid gap-x-5 gap-y-10 xl:grid-cols-2"
              >
                {/* Название секции */}
                {sectionData[`sectionName_${locale.id}` as keyof zSection] && (
                  <FormField
                    control={form.control}
                    name={`sectionName_${locale.id}` as keyof zSection}
                    render={({ field }) => (
                      <FormItem className="xl:col-span-2">
                        <FormLabel>{t("section-name-label")}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("section-name-placeholder")}
                            {...field}
                            value={(field.value as string) || ""}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                )}

                {/* Заголовок */}
                {sectionData[`heading_${locale.id}` as keyof zSection] && (
                  <FormField
                    control={form.control}
                    name={`heading_${locale.id}` as keyof zSection}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("heading-label")}</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={6}
                            placeholder={t("heading-placeholder")}
                            {...field}
                            value={(field.value as string) || ""}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                )}

                {/* Подзаголовок */}
                {sectionData[`subheading_${locale.id}` as keyof zSection] && (
                  <FormField
                    control={form.control}
                    name={`subheading_${locale.id}` as keyof zSection}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("subheading-label")}</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={6}
                            placeholder={t("subheading-placeholder")}
                            {...field}
                            value={(field.value as string) || ""}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                )}

                {/* Основная кнопка */}
                {sectionData[
                  `primaryButton_${locale.id}` as keyof zSection
                ] && (
                  <FormField
                    control={form.control}
                    name={`primaryButton_${locale.id}` as keyof zSection}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("primary-button-label")}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("primary-button-placeholder")}
                            {...field}
                            value={(field.value as string) || ""}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                )}

                {/* Дополнительная кнопка */}
                {sectionData[
                  `secondaryButton_${locale.id}` as keyof zSection
                ] && (
                  <FormField
                    control={form.control}
                    name={`secondaryButton_${locale.id}` as keyof zSection}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("secondary-button-label")}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("secondary-button-placeholder")}
                            {...field}
                            value={(field.value as string) || ""}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                )}

                {/* Карточки */}
                <FormCards sectionData={sectionData} locale={locale.id} />
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button type="submit" disabled={isExecuting}>
            {t("form-save")}
          </Button>
        </CardFooter>
      </form>
    </Form>
  )
}

{
  /* <FormDescription>
      <strong className="text-black">
        {t("current-value")}:
      </strong>{" "}
      {sectionData[
        `heading_${locale.id}` as keyof zSection
      ] || ""}
    </FormDescription> */
}
