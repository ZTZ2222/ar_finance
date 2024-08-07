"use client"

import { motion } from "framer-motion"
import Calculator from "@/components/shared/calculator"
import Heading from "@/components/shared/heading"
import SectionName from "@/components/shared/section-name"
import Subheading from "@/components/shared/subheading"

type Props = {
  sectionName: string | null | undefined
  heading: string | null | undefined
  subheading: string | null | undefined
}

export default function CalculatorSectionClient({
  sectionName,
  heading,
  subheading,
}: Props) {
  return (
    <section className="container mb-[100px] grid gap-[30px] overflow-x-hidden md:mb-[120px] xl:grid-cols-3 xl:gap-[60px]">
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{
          once: true,
          margin: "200px",
          amount: 0.3,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="space-y-[26px]"
      >
        <SectionName>{sectionName}</SectionName>
        <Heading>{heading}</Heading>
        <Subheading>{subheading}</Subheading>
      </motion.div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 100 }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="xl:col-span-2 xl:w-full"
      >
        <Calculator className="xl:gap-9" />
      </motion.div>
    </section>
  )
}
