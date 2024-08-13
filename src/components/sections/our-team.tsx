import Image from "next/image"
import Heading from "@/components/shared/heading"
import SectionName from "@/components/shared/section-name"
import Subheading from "@/components/shared/subheading"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function OurTeam() {
  const sectionData = await getNormalizedSectionById("our-team")
  return (
    <section
      id="our-team"
      className="container mb-[100px] grid gap-[30px] md:mb-[120px] lg:grid-cols-3 lg:gap-[50px]"
    >
      <div className="space-y-[26px]">
        <SectionName>{sectionData?.sectionName}</SectionName>
        <Heading>{sectionData?.heading}</Heading>
        <Subheading>{sectionData?.subheading}</Subheading>
      </div>
      <div className="grid gap-16 lg:col-span-2 lg:grid-cols-3 lg:gap-8">
        {sectionData?.cards.map(card => (
          <div key={card.uid} className="flex flex-col items-center gap-5">
            {/* Team person image */}
            <div className="relative size-40 overflow-hidden rounded-full">
              <Image
                src={card.image || "/placeholder-user.jpg"}
                alt={card.title || ""}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col items-center gap-2.5">
              <h4 className="text-xl font-bold leading-[22px] text-black">
                {card.title}
              </h4>
              <span className="text-lg leading-[27px] text-gray-650">
                {card.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
