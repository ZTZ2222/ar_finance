import CalculatorSectionClient from "@/components/shared/calc-section-client"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function CalculatorSection() {
  const sectionData = await getNormalizedSectionById("calculator")
  return (
    <CalculatorSectionClient
      sectionName={sectionData?.sectionName}
      heading={sectionData?.heading}
      subheading={sectionData?.subheading}
    />
  )
}
