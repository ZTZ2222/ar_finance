import Image from "next/image"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Heading from "@/components/shared/heading"
import Paragraph from "@/components/shared/paragraph"
import Subheading from "@/components/shared/subheading"

export default async function OurPartners() {
  const partners = [
    {
      id: "1",
      company: "Company 1",
      logo: "/assets/partners/1.png",
    },
    {
      id: "2",
      company: "Company 2",
      logo: "/assets/partners/2.png",
    },
    {
      id: "3",
      company: "Company 3",
      logo: "/assets/partners/3.png",
    },
    {
      id: "4",
      company: "Company 4",
      logo: "/assets/partners/4.png",
    },
    {
      id: "5",
      company: "Company 5",
      logo: "/assets/partners/5.png",
    },
  ]
  return (
    <section className="mb-[100px] space-y-[40px]">
      <div className="container space-y-[26px]">
        <Heading>Наши партнеры</Heading>
        <Subheading>Вместе мы сильнее</Subheading>
        <Paragraph>
          Мы гордимся нашими партнёрскими отношениями с ведущими компаниями и
          организациями. Совместная работа с нашими партнёрами позволяет нам
          предлагать клиентам лучшие решения и инновационные услуги.
        </Paragraph>
      </div>
      <ScrollArea className="pb-5 pl-4">
        <div className="flex w-max space-x-[30px]">
          {partners.map(partner => (
            <div key={partner.id} className="relative size-[60px]">
              <Image
                src={partner.logo}
                alt={partner.company}
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
