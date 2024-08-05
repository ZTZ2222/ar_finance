import Image from "next/image"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Heading from "@/components/shared/heading"
import SectionName from "@/components/shared/section-name"
import Subheading from "@/components/shared/subheading"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function OurPartners() {
  const sectionData = await getNormalizedSectionById("our-partners")
  return (
    <section className="mb-[100px] space-y-[40px] md:mb-[120px] md:space-y-[50px]">
      <div className="container space-y-[26px]">
        <SectionName>{sectionData?.sectionName}</SectionName>
        <Heading>{sectionData?.heading}</Heading>
        <Subheading>{sectionData?.subheading}</Subheading>
      </div>
      <ScrollArea className="pb-5 pl-4 sm:container">
        <div className="flex w-max justify-center gap-[30px] lg:w-full lg:gap-[60px]">
          {sectionData?.cards.map(card => (
            <div key={card.id} className="relative size-[60px]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="h-2" />
      </ScrollArea>
    </section>
  )
}
