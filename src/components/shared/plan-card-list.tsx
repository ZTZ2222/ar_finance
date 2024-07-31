import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CheckCircle } from "@/components/icons"
import type { zPlan } from "@/types/content.schema"

type Props = {
  className?: string
}

export default async function PlanCardList({ className }: Props) {
  const plans: zPlan[] = [
    {
      id: "1",
      icon: "/assets/plan-icons/zap.png",
      title: "Базовый",
      description: "Идеально подходит для малого бизнеса и стартапов",
      price: 7900,
      benefits: [
        {
          id: "1",
          point: "Ведение бухгалтерского учета",
        },
        {
          id: "2",
          point: "Подготовка и сдача отчетности",
        },
        {
          id: "3",
          point: "Консультации по основным вопросам налогообложения",
        },
        {
          id: "4",
          point: "Поддержка по email",
        },
        {
          id: "5",
          point: "Поддержка по email",
        },
        {
          id: "6",
          point: "Поддержка по email",
        },
      ],
    },
    {
      id: "2",
      icon: "/assets/plan-icons/cluster.png",
      title: "Стандарт",
      description: "Оптимальный выбор для развивающихся компаний",
      price: 17900,
      benefits: [
        {
          id: "1",
          point: "Ведение бухгалтерского учета",
        },
        {
          id: "2",
          point: "Подготовка и сдача отчетности",
        },
        {
          id: "3",
          point: "Консультации по основным вопросам налогообложения",
        },
        {
          id: "4",
          point: "Поддержка по email",
        },
        {
          id: "5",
          point: "Поддержка по email",
        },
        {
          id: "6",
          point: "Поддержка по email",
        },
      ],
    },
    {
      id: "3",
      icon: "/assets/plan-icons/star.png",
      title: "Премиум",
      description:
        "Для компаний, которым нужен комплексный подход к бухгалтерскому учету и налоговому планированию",
      price: 37900,
      benefits: [
        {
          id: "1",
          point: "Ведение бухгалтерского учета",
        },
        {
          id: "2",
          point: "Подготовка и сдача отчетности",
        },
        {
          id: "3",
          point: "Консультации по основным вопросам налогообложения",
        },
        {
          id: "4",
          point: "Поддержка по email",
        },
        {
          id: "5",
          point: "Поддержка по email",
        },
        {
          id: "6",
          point: "Поддержка по email",
        },
      ],
    },
  ]
  return (
    <div className={cn("space-y-5", className)}>
      {plans.map(plan => (
        <PlanCard key={plan.id} {...plan} />
      ))}
    </div>
  )
}

type CardProps = React.ComponentProps<typeof Card> & zPlan

export function PlanCard({
  id,
  icon,
  title,
  description,
  price,
  benefits,
  className,
  ...props
}: CardProps) {
  return (
    <Card className={cn("rounded-[30px] shadow-card", className)} {...props}>
      <CardHeader className="flex flex-col items-center gap-8 space-y-0 border-b border-[#E0E0E0] p-8">
        <CardTitle className="flex flex-col items-center gap-5">
          {/* Plan card icon */}
          <div className="relative size-10">
            <Image
              src={icon}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Plan card title */}
          <span className="text-lg font-bold text-rose-750">
            Тариф "{title}"
          </span>
        </CardTitle>

        {/* Plan card price */}
        <div className="text-2xl font-black leading-[26.4px]">
          от {price.toLocaleString("ru-RU")} сом
        </div>

        {/* Plan card description */}
        <CardDescription className="text-center font-normal text-gray-650">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-8 py-5">
        <div className="flex flex-col gap-4">
          {benefits.map(benefit => (
            <div key={benefit.id} className="flex items-center gap-3">
              <CheckCircle className="shrink-0" />
              <span className="line-clamp-2 leading-6 text-gray-650">
                {benefit.point}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center rounded-b-[30px] bg-[#F9FAFB] p-8">
        <Button variant="core" size="mobile">
          Выбрать тариф
        </Button>
      </CardFooter>
    </Card>
  )
}
