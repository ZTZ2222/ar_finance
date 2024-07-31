import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Heading from "@/components/shared/heading"
import Paragraph from "@/components/shared/paragraph"
import Subheading from "@/components/shared/subheading"

export default async function FAQ() {
  const data = [
    {
      id: "1",
      question: "В каких случаях предприниматель должен выставить ЭСФ ?",
      answer:
        "Согласно постановлению правительства от 19 июня 2020 года №343, применение электронной счет-фактуры обязательно для налогоплательщика НДС и налогоплательщика, осуществляющего импорт и/или экспорт товаров.",
    },
    {
      id: "2",
      question: "В каких случаях предприниматель должен выставить ЭСФ ?",
      answer:
        "Согласно постановлению правительства от 19 июня 2020 года №343, применение электронной счет-фактуры обязательно для налогоплательщика НДС и налогоплательщика, осуществляющего импорт и/или экспорт товаров.",
    },
  ]
  return (
    <section className="container mb-[120px] space-y-[30px]">
      <div className="space-y-[26px]">
        <Heading>Часто задаваемые вопросы</Heading>
        <Subheading>Ищете ответы? Мы здесь, чтобы помочь!</Subheading>
        <Paragraph>
          Свяжитесь с нами, если не нашли нужной информации. Мы всегда рады
          помочь!
        </Paragraph>
      </div>
      <Accordion
        type="single"
        collapsible
        className="rounded-lg border border-[#ECECEC] bg-white"
      >
        {data.map(item => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="flex flex-col items-end"
          >
            <AccordionTrigger className="p-[30px] pb-5 text-start text-lg leading-5 text-black">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="mx-[30px] mb-[30px] w-[262px] text-base text-gray-650">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
