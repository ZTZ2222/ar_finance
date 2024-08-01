"use client"

import Image from "next/image"
import useMediaQuery from "@custom-react-hooks/use-media-query"
import { motion } from "framer-motion"
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

type CardProps = React.ComponentProps<typeof Card> &
  zPlan & {
    index: number
  }

export default function PlanCard({
  id,
  icon,
  title,
  description,
  price,
  benefits,
  index,
  className,
  ...props
}: CardProps) {
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  return (
    <motion.div
      initial={isDesktop ? { opacity: 0, y: 0 } : {}}
      whileInView={
        isDesktop
          ? {
              opacity: 1,
              transition: { duration: 0.7, delay: index * 0.7 },
            }
          : {}
      }
      whileHover={
        isDesktop
          ? { y: -20, transition: { duration: 0.3, type: "spring" } }
          : {}
      }
      viewport={isDesktop ? { once: true } : {}}
      className="grid"
    >
      <Card
        className={cn(
          "flex flex-col overflow-hidden rounded-[30px] shadow-card",
          className,
        )}
        {...props}
      >
        <CardHeader className="flex flex-col items-center gap-8 space-y-0 border-b border-[#E0E0E0] p-8 xl:h-[303px]">
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
            <span className="text-lg font-bold text-rose-750 xl:text-xl xl:leading-[22px]">
              Тариф "{title}"
            </span>
          </CardTitle>

          {/* Plan card price */}
          <div className="text-2xl font-black leading-[26.4px] xl:text-4xl">
            от {price.toLocaleString("ru-RU")} сом
          </div>

          {/* Plan card description */}
          <CardDescription className="text-center font-normal text-gray-650 lg:line-clamp-2 xl:text-base">
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
        <CardFooter className="mt-auto flex max-h-[120px] justify-center bg-[#F9FAFB] p-8">
          <Button variant="core" size="mobile">
            Выбрать тариф
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
