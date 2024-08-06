"use client"

import { PlusCircle, Trash2 } from "lucide-react"
import { useTranslations } from "next-intl"
import { useFormContext } from "react-hook-form"
import { cn } from "@/lib/utils"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import ImageUpload from "@/components/ui/image-upload"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { zSection } from "@/types/content.schema"

type Props = {
  sectionData: zSection
  locale: string
}

export default function FormCards({ sectionData, locale }: Props) {
  const t = useTranslations("Components.FormSection")
  const { control } = useFormContext()
  if (sectionData.cards.length < 1) return null
  return (
    <div className="flex flex-wrap gap-10 xl:col-span-2">
      {sectionData.cards.map((card, index) => (
        <div
          key={card.id}
          className={cn(
            "space-y-5 rounded-lg border border-slate-200 p-5",
            sectionData.cards.length <= 3 && "flex-1",
          )}
        >
          {/* Image Upload */}
          {card.image && (
            <FormField
              control={control}
              name={`cards.${index}.image`}
              render={({ field }) => (
                <ImageUpload
                  field={field}
                  existingImage={card.image || undefined}
                  className="mx-auto"
                />
              )}
            />
          )}

          {/* Card Title */}
          {card[`title_${locale}` as keyof typeof card] && (
            <FormField
              control={control}
              name={`cards.${index}.title_${locale}` as keyof zSection}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t("card-title", { number: index + 1 })}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("card-title-placeholder")}
                      {...field}
                      value={(field.value as string) || ""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          )}

          {/* Card Description */}
          {card[`description_${locale}` as keyof typeof card] && (
            <FormField
              control={control}
              name={`cards.${index}.description_${locale}` as keyof zSection}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t("card-description-label", {
                      number: index + 1,
                    })}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      rows={4}
                      placeholder={t("card-description-placeholder")}
                      {...field}
                      value={(field.value as string) || ""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          )}

          {/* Card Extra Field */}
          {card[`extra_${locale}` as keyof typeof card] && (
            <FormField
              control={control}
              name={`cards.${index}.extra_${locale}` as keyof zSection}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t("card-extra-label", { number: index + 1 })}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("card-extra-placeholder")}
                      {...field}
                      value={(field.value as string) || ""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          )}

          {/* Card Bullets */}
          {card[`bullets_${locale}` as keyof typeof card]!.length > 0 && (
            <FormField
              control={control}
              name={`cards.${index}.bullets_${locale}` as keyof zSection}
              render={({ field }) => {
                const bullets = (field.value as string[]) || []

                const addBullet = () => {
                  field.onChange([...bullets, ""])
                }

                const removeBullet = (bulletIndex: number) => {
                  field.onChange(
                    bullets.filter((_, idx) => idx !== bulletIndex),
                  )
                }

                const updateBullet = (bulletIndex: number, value: string) => {
                  const updatedBullets = bullets.map((bullet, idx) =>
                    idx === bulletIndex ? value : bullet,
                  )
                  field.onChange(updatedBullets)
                }

                return (
                  <FormItem>
                    <FormLabel>{t("card-bullets-label")}</FormLabel>
                    {bullets.map((bullet, bulletIndex) => (
                      <div
                        key={bulletIndex}
                        className="flex items-center space-x-2"
                      >
                        <span className="mr-2">{bulletIndex + 1}</span>
                        <FormControl>
                          <Input
                            value={bullet}
                            onChange={e =>
                              updateBullet(bulletIndex, e.target.value)
                            }
                            placeholder={t("card-bullets-placeholder")}
                          />
                        </FormControl>
                        <button
                          type="button"
                          onClick={() => removeBullet(bulletIndex)}
                          className="ml-2 text-red-500"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addBullet}
                      className="mx-auto flex items-center text-blue-500"
                    >
                      <PlusCircle className="mr-2 h-5 w-5" />
                      {t("card-bullets-add-bullet")}
                    </button>
                  </FormItem>
                )
              }}
            />
          )}
        </div>
      ))}
    </div>
  )
}
