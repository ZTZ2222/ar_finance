"use client"

import useMediaQuery from "@custom-react-hooks/use-media-query"
import { motion } from "framer-motion"
import Calculator from "@/components/shared/calculator"
import Heading from "@/components/shared/heading"
import Paragraph from "@/components/shared/paragraph"
import Subheading from "@/components/shared/subheading"

export default function CalculatorSectionClient() {
  const isDesktop = useMediaQuery("(min-width: 1280px)")
  return (
    <section className="container mb-[100px] grid gap-[30px] md:mb-[120px] xl:grid-cols-3 xl:gap-[60px]">
      <motion.div
        initial={isDesktop ? { y: 200, opacity: 0 } : {}}
        whileInView={isDesktop ? { y: 0, opacity: 100 } : {}}
        viewport={
          isDesktop
            ? {
                once: true,
                margin: "200px",
                amount: 0.3,
              }
            : {}
        }
        transition={isDesktop ? { duration: 1, ease: "easeInOut" } : {}}
        className="space-y-[26px]"
      >
        <Heading>Калькулятор</Heading>
        <Subheading>Рассчитайте стоимость наших услуг</Subheading>
        <Paragraph>
          Мы понимаем, что каждый бизнес уникален и требует индивидуального
          подхода. Чтобы упростить процесс выбора и расчета стоимости наших
          услуг, мы предлагаем воспользоваться калькулятором услуг. Это позволит
          вам быстро и удобно узнать ориентировочную цену наших бухгалтерских
          услуг, исходя из потребностей вашего бизнеса.
        </Paragraph>
      </motion.div>
      <motion.div
        initial={isDesktop ? { x: 200, opacity: 0 } : {}}
        whileInView={isDesktop ? { x: 0, opacity: 100 } : {}}
        viewport={
          isDesktop
            ? {
                once: true,
                amount: 0.3,
              }
            : {}
        }
        transition={isDesktop ? { duration: 1, ease: "easeInOut" } : {}}
        className="xl:col-span-2 xl:w-full"
      >
        <Calculator className="xl:gap-9" />
      </motion.div>
    </section>
  )
}
