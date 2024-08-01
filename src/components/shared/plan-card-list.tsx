import React from "react"
import { cn } from "@/lib/utils"
import PlanCard from "@/components/shared/plan-card"
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
    <div className={cn("grid gap-5 md:grid-cols-2 lg:grid-cols-3", className)}>
      {plans.map((plan, index) => (
        <PlanCard key={plan.id} index={index} {...plan} />
      ))}
    </div>
  )
}
