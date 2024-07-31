import React from "react"
import Heading from "@/components/shared/heading"

export default async function WhyUs() {
  const advantages = [
    {
      id: "1",
      title: "Профессионализм",
      description:
        "Опытные бухгалтеры и налоговые консультанты с многолетним стажем",
    },
    {
      id: "2",
      title: "Надежность",
      description:
        "Мы гарантируем точность и своевременность выполнения всех работ",
    },
    {
      id: "3",
      title: "Индивидуальный подход",
      description:
        "Учитываем особенности вашего бизнеса и предлагаем наилучшие решения",
    },
    {
      id: "4",
      title: "Конфиденциальность",
      description: "Обеспечиваем полную защиту вашей финансовой информации",
    },
  ]
  return (
    <section className="container mb-[100px] space-y-[30px]">
      <Heading>Почему мы?</Heading>
      <div className="grid gap-5">
        {advantages.map(item => (
          <div
            key={item.id}
            className="space-y-7 rounded-[30px] border border-gray-350 bg-white p-[30px] text-center shadow-card"
          >
            <h4 className="text-lg font-bold leading-5 text-black">
              {item.title}
            </h4>
            <p className="leading-6 text-gray-650">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
