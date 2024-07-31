import Heading from "@/components/shared/heading"
import Paragraph from "@/components/shared/paragraph"
import ServiceCardList from "@/components/shared/service-card-list"
import Subheading from "@/components/shared/subheading"

export default function OurServices() {
  return (
    <section className="container mb-[100px] space-y-[30px]">
      <div className="space-y-[26px]">
        <Heading>Наши услуги</Heading>
        <Subheading>Получите персонализированное решение</Subheading>
        <Paragraph>
          Мы берем на себя все аспекты ведения бухгалтерского учета, чтобы вы
          могли сосредоточиться на вашем бизнесе. В наши услуги входят:
        </Paragraph>
      </div>
      <ServiceCardList />
    </section>
  )
}
