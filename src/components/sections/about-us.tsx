import React from "react"
import { getLocale } from "next-intl/server"
import { BgLogo } from "@/components/icons"
import CardsRotation from "@/components/shared/cards-rotation"
import Heading from "@/components/shared/heading"
import SectionName from "@/components/shared/section-name"
import Subheading from "@/components/shared/subheading"
import getSectionById from "@/server/data-access-layer/content"
import type { zSection } from "@/types/content.schema"

export default async function AboutUs() {
  const locale = await getLocale()
  const sectionData = await getSectionById("about-us")

  const sectionName =
    sectionData &&
    (sectionData[`sectionName_${locale}` as keyof zSection] as string)
  const heading =
    sectionData &&
    (sectionData[`heading_${locale}` as keyof zSection] as string)
  const subheading =
    sectionData &&
    (sectionData[`subheading_${locale}` as keyof zSection] as string)

  const images = sectionData?.cards.map(card => card.image)

  return (
    <section
      id="about"
      className="container relative mb-[100px] overflow-hidden md:mb-[120px] xl:flex xl:overflow-visible"
    >
      <CardsRotation images={images} />
      <div className="space-y-[26px] xl:mt-[140px]">
        <SectionName>{sectionName}</SectionName>
        <Heading>{heading}</Heading>
        <Subheading>{subheading}</Subheading>
      </div>
      <BgLogo className="absolute -bottom-5 -z-10 h-auto w-[calc(100vw-32px)] max-w-[1328px] xl:top-5" />
    </section>
  )
}
