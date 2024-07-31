import Calculator from "@/components/shared/calculator"
import Heading from "@/components/shared/heading"
import Paragraph from "@/components/shared/paragraph"
import Subheading from "@/components/shared/subheading"

export default function CalculatorSection() {
  return (
    <section className="container mb-[100px] grid gap-[30px] xl:grid-cols-3 xl:gap-[60px]">
      <div className="space-y-[26px]">
        <Heading>Калькулятор</Heading>
        <Subheading>Рассчитайте стоимость наших услуг</Subheading>
        <Paragraph>
          Мы понимаем, что каждый бизнес уникален и требует индивидуального
          подхода. Чтобы упростить процесс выбора и расчета стоимости наших
          услуг, мы предлагаем воспользоваться калькулятором услуг. Это позволит
          вам быстро и удобно узнать ориентировочную цену наших бухгалтерских
          услуг, исходя из потребностей вашего бизнеса.
        </Paragraph>
      </div>
      <Calculator />
    </section>
  )
}
