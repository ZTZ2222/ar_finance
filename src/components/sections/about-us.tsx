import React from "react"
import { BgLogo } from "@/components/icons"
import CardsRotation from "@/components/shared/cards-rotation"
import Heading from "@/components/shared/heading"
import SectionName from "@/components/shared/section-name"
import Subheading from "@/components/shared/subheading"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function AboutUs() {
  const sectionData = await getNormalizedSectionById("about-us")
  const images = sectionData?.cards.map(card => card.image)

  return (
    <section
      id="about"
      className="container relative mb-[100px] overflow-hidden md:mb-[120px] xl:flex xl:overflow-visible"
    >
      <CardsRotation images={images} />
      <div className="space-y-[26px] xl:mt-[140px]">
        <SectionName>{sectionData?.sectionName}</SectionName>
        <Heading>{sectionData?.heading}</Heading>
        <Subheading>{sectionData?.subheading}</Subheading>
      </div>
      <BgLogo className="absolute -bottom-5 -z-10 h-auto w-[calc(100vw-32px)] max-w-[1328px] xl:top-5" />
    </section>
  )
}
