import React from "react"
import { getLocale } from "next-intl/server"
import SectionName from "@/components/shared/section-name"
import getSectionById from "@/server/data-access-layer/content"
import type { zCard, zSection } from "@/types/content.schema"

export default async function WhyUs() {
  const locale = await getLocale()
  const sectionData = await getSectionById("why-us")

  const sectionName =
    sectionData &&
    (sectionData[`sectionName_${locale}` as keyof zSection] as string)

  const advantages = sectionData?.cards

  return (
    <section className="container mb-[100px] space-y-[30px] md:mb-[120px] md:space-y-[50px]">
      <SectionName>{sectionName}</SectionName>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {advantages?.map(item => (
          <div
            key={item.id}
            className="space-y-7 rounded-[30px] border border-gray-350 bg-white p-[30px] text-center shadow-card xl:space-y-4 xl:px-[22px]"
          >
            <h4 className="text-lg font-bold leading-5 text-black xl:leading-[22px]">
              {item[`title_${locale}` as keyof zCard]}
            </h4>
            <p className="leading-6 text-gray-650 xl:leading-5">
              {item[`description_${locale}` as keyof zCard]}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
