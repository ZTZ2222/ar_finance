import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type Props = {
  className?: string
}

export default async function ServiceCardList({ className }: Props) {
  const services = [
    {
      id: "1",
      icon: "/assets/service-icons/file.png",
      title: "Бухгалтерский учет",
      description:
        "Мы берем на себя все аспекты ведения бухгалтерского учета, чтобы вы могли сосредоточиться на вашем бизнесе. В наши услуги входят:",
      bullets: [
        {
          id: "1",
          point: "Ведение первичной документации",
        },
        {
          id: "2",
          point: "Расчет заработной платы",
        },
        {
          id: "3",
          point: "Учет доходов и расходов",
        },
        {
          id: "4",
          point: "Подготовка бухгалтерской отчетности",
        },
        {
          id: "5",
          point: "Ведение первичной документации",
        },
        {
          id: "6",
          point: "Расчет заработной платы",
        },
        {
          id: "7",
          point: "Учет доходов и расходов",
        },
        {
          id: "8",
          point: "Подготовка бухгалтерской отчетности",
        },
      ],
      price: 10000,
    },
    {
      id: "2",
      icon: "/assets/service-icons/scale.png",
      title: "Бухгалтерский учет",
      description:
        "Мы берем на себя все аспекты ведения бухгалтерского учета, чтобы вы могли сосредоточиться на вашем бизнесе. В наши услуги входят:",
      bullets: [
        {
          id: "1",
          point: "Ведение первичной документации",
        },
        {
          id: "2",
          point: "Расчет заработной платы",
        },
        {
          id: "3",
          point: "Учет доходов и расходов",
        },
        {
          id: "4",
          point: "Подготовка бухгалтерской отчетности",
        },
        {
          id: "5",
          point: "Ведение первичной документации",
        },
        {
          id: "6",
          point: "Расчет заработной платы",
        },
        {
          id: "7",
          point: "Учет доходов и расходов",
        },
        {
          id: "8",
          point: "Подготовка бухгалтерской отчетности",
        },
      ],
      price: 10000,
    },
    {
      id: "3",
      icon: "/assets/service-icons/accounting.png",
      title: "Бухгалтерский учет",
      description:
        "Мы берем на себя все аспекты ведения бухгалтерского учета, чтобы вы могли сосредоточиться на вашем бизнесе. В наши услуги входят:",
      bullets: [
        {
          id: "1",
          point: "Ведение первичной документации",
        },
        {
          id: "2",
          point: "Расчет заработной платы",
        },
        {
          id: "3",
          point: "Учет доходов и расходов",
        },
        {
          id: "4",
          point: "Подготовка бухгалтерской отчетности",
        },
        {
          id: "5",
          point: "Ведение первичной документации",
        },
        {
          id: "6",
          point: "Расчет заработной платы",
        },
        {
          id: "7",
          point: "Учет доходов и расходов",
        },
        {
          id: "8",
          point: "Подготовка бухгалтерской отчетности",
        },
      ],
      price: 10000,
    },
    {
      id: "4",
      icon: "/assets/service-icons/taxes.png",
      title: "Бухгалтерский учет",
      description:
        "Мы берем на себя все аспекты ведения бухгалтерского учета, чтобы вы могли сосредоточиться на вашем бизнесе. В наши услуги входят:",
      bullets: [
        {
          id: "1",
          point: "Ведение первичной документации",
        },
        {
          id: "2",
          point: "Расчет заработной платы",
        },
        {
          id: "3",
          point: "Учет доходов и расходов",
        },
        {
          id: "4",
          point: "Подготовка бухгалтерской отчетности",
        },
        {
          id: "5",
          point: "Ведение первичной документации",
        },
        {
          id: "6",
          point: "Расчет заработной платы",
        },
        {
          id: "7",
          point: "Учет доходов и расходов",
        },
        {
          id: "8",
          point: "Подготовка бухгалтерской отчетности",
        },
      ],
      price: 10000,
    },
    {
      id: "5",
      icon: "/assets/service-icons/graph.png",
      title: "Восстановление бухгалтерского учета",
      description:
        "Если у вас возникли проблемы с бухгалтерским учетом, мы поможем вам их решить. Восстановим учет за любой период, исправим ошибки и приведем документацию в порядок.",
      bullets: [],
      price: 10000,
    },
    {
      id: "6",
      icon: "/assets/service-icons/report.png",
      title: "Восстановление бухгалтерского учета",
      description:
        "Если у вас возникли проблемы с бухгалтерским учетом, мы поможем вам их решить. Восстановим учет за любой период, исправим ошибки и приведем документацию в порядок.",
      bullets: [],
      price: 10000,
    },
  ]
  return (
    <div className={cn("space-y-5", className)}>
      {services.map(service => (
        <div
          key={service.id}
          className="space-y-5 rounded-[30px] bg-white px-6 py-10 shadow-card"
        >
          {/* Icon */}
          <div className="relative size-9">
            <Image
              src={service.icon}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Title */}
          <h4 className="text-lg font-semibold leading-5 text-[#1E1E1E]">
            {service.title}
          </h4>

          {/* Description and bullets */}
          <div className="leading-6 text-[#757575]">
            <p>{service.description}</p>
            {service.bullets.length > 0 && (
              <ul className="line-clamp-4 list-inside list-disc">
                {service.bullets.map(bullet => (
                  <li key={bullet.id}>{bullet.point}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Price */}
          <p className="text-lg font-bold leading-5 text-[#1E1E1E]">
            {service.price.toLocaleString("ru-RU")} сом
          </p>

          {/* Dialog Button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="support" size="mobile">
                Подробнее
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[358px] gap-5 rounded-[30px] bg-white">
              {/* Icon */}
              <div className="relative size-9">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Title */}
              <h4 className="text-lg font-semibold leading-5 text-[#1E1E1E]">
                {service.title}
              </h4>

              {/* Description and bullets */}
              <div className="leading-6 text-[#757575]">
                <p>{service.description}</p>
                {service.bullets.length > 0 && (
                  <ul className="line-clamp-4 list-inside list-disc">
                    {service.bullets.map(bullet => (
                      <li key={bullet.id}>{bullet.point}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Price */}
              <p className="text-lg font-bold leading-5 text-[#1E1E1E]">
                {service.price.toLocaleString("ru-RU")} сом
              </p>

              {/* Close Button */}
              <DialogClose asChild>
                <Button variant="support" size="mobile">
                  Закрыть
                </Button>
              </DialogClose>
              <DialogHeader className="sr-only">
                <DialogTitle>{service.title}</DialogTitle>
                <DialogDescription>{service.description}</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </div>
  )
}
