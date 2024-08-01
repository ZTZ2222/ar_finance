import Heading from "@/components/shared/heading"
import Paragraph from "@/components/shared/paragraph"
import PlanCardList from "@/components/shared/plan-card-list"
import Subheading from "@/components/shared/subheading"

export default async function Plans() {
  return (
    <section
      id="plans"
      className="container mb-[100px] space-y-[30px] md:mb-[120px] md:space-y-[50px]"
    >
      <div className="space-y-[26px]">
        <Heading>Тарифы</Heading>
        <Subheading>Прозрачные и доступные цены для вашего бизнеса</Subheading>
        <Paragraph>
          Мы предлагаем различные тарифные планы, чтобы вы могли выбрать тот,
          который наилучшим образом соответствует вашим потребностям и бюджету.
          Наши тарифы включают все необходимые услуги для ведения бухгалтерского
          учета, налогового консультирования и финансового планирования.
        </Paragraph>
      </div>
      <PlanCardList />
    </section>
  )
}
