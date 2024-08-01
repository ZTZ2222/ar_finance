"use client"

import Image from "next/image"
import useMediaQuery from "@custom-react-hooks/use-media-query"
import { motion } from "framer-motion"
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
import type { zService } from "@/types/content.schema"

type Props = zService & {
  index: number
  className?: string
}

export default function ServiceCard({
  title,
  description,
  icon,
  bullets,
  price,
  index,
  className,
}: Props) {
  const isDesktop = useMediaQuery("(min-width: 1280px)")
  return (
    <motion.div
      className={cn(
        "space-y-5 rounded-[30px] bg-white px-6 py-10 shadow-card",
        className,
      )}
      initial={isDesktop ? { y: 300 } : {}}
      whileInView={isDesktop ? { y: 0 } : {}}
      transition={
        isDesktop ? { duration: 0.5, delay: index * 0.1, ease: "easeOut" } : {}
      }
      viewport={{ once: true, margin: "100px" }}
    >
      {/* Icon */}
      <div className="relative size-9">
        <Image
          src={icon}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Title */}
      <h4 className="text-lg font-semibold leading-5 text-[#1E1E1E]">
        {title}
      </h4>

      {/* Description and bullets */}
      <div className="line-clamp-4 leading-6 text-[#757575]">
        <p>{description}</p>
        {bullets.length > 0 && (
          <ul className="line-clamp-4 list-inside list-disc xl:hidden">
            {bullets.map(bullet => (
              <li key={bullet.id}>{bullet.point}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Price */}
      <p className="text-lg font-bold leading-5 text-[#1E1E1E]">
        {price.toLocaleString("ru-RU")} сом
      </p>

      {/* Dialog Button */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="support" size="mobile">
            Подробнее
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[358px] gap-5 rounded-[30px] bg-white md:max-w-[585px] lg:max-w-[685px]">
          {/* Icon */}
          <div className="relative size-9">
            <Image
              src={icon}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Title */}
          <h4 className="text-lg font-semibold leading-5 text-[#1E1E1E]">
            {title}
          </h4>

          {/* Description and bullets */}
          <div className="leading-6 text-[#757575]">
            <p>{description}</p>
            {bullets.length > 0 && (
              <ul className="list-inside list-disc">
                {bullets.map(bullet => (
                  <li key={bullet.id}>{bullet.point}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Price */}
          <p className="text-lg font-bold leading-5 text-[#1E1E1E]">
            {price.toLocaleString("ru-RU")} сом
          </p>

          {/* Close Button */}
          <DialogClose asChild>
            <Button variant="support" size="mobile">
              Закрыть
            </Button>
          </DialogClose>
          <DialogHeader className="sr-only">
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}
