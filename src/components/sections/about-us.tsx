import React from "react"
import { BgLogo } from "@/components/icons"
import CardsRotation from "@/components/shared/cards-rotation"
import Heading from "@/components/shared/heading"
import Paragraph from "@/components/shared/paragraph"
import Subheading from "@/components/shared/subheading"

export default async function AboutUs() {
  const images = [
    {
      id: "1",
      src: "/assets/about/image1.jpg",
      height: 234,
      width: 159,
    },
    {
      id: "2",
      src: "/assets/about/image2.jpg",
      height: 155,
      width: 156,
    },
    {
      id: "3",
      src: "/assets/about/image3.jpg",
      height: 124,
      width: 189,
    },
    {
      id: "4",
      src: "/assets/about/image4.jpg",
      height: 232,
      width: 158,
    },
    {
      id: "5",
      src: "/assets/about/image5.jpg",
      height: 126,
      width: 186,
    },
  ]

  return (
    <section id="about" className="container relative mb-[100px] xl:flex">
      <CardsRotation images={images} />
      <div className="space-y-[26px] xl:mt-[140px]">
        <Heading>О нас</Heading>
        <Subheading>Мы - AR Finance</Subheading>
        <Paragraph>
          Наша компания специализируется на предоставлении высококачественных
          профессиональных бухгалтерских услуг для Вашего бизнеса!
          <br />
          <br />
          Наша цель - помочь Вам сфокусироваться на росте Вашего бизнеса,
          обеспечивая надежное и эффективное финансовое сопровождение
        </Paragraph>
      </div>
      <BgLogo className="absolute -bottom-5 -z-10 h-auto w-[calc(100vw-32px)] max-w-[1328px] xl:top-5" />
    </section>
  )
}
