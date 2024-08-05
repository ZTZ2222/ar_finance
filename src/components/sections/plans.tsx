import Heading from "@/components/shared/heading"
import PlanCard from "@/components/shared/plan-card"
import SectionName from "@/components/shared/section-name"
import Subheading from "@/components/shared/subheading"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function Plans() {
  const sectionData = await getNormalizedSectionById("plans")

  return (
    <section
      id="plans"
      className="container mb-[100px] space-y-[30px] md:mb-[120px] md:space-y-[50px]"
    >
      <div className="space-y-[26px]">
        <SectionName>{sectionData?.sectionName}</SectionName>
        <Heading>{sectionData?.heading}</Heading>
        <Subheading>{sectionData?.subheading}</Subheading>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {sectionData?.cards.map((card, index) => (
          <PlanCard key={card.id} index={index} card={card} />
        ))}
      </div>
    </section>
  )
}
