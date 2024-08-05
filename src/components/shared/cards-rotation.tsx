"use client"

import Image from "next/image"
import useMediaQuery from "@custom-react-hooks/use-media-query"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { zCardImage } from "@/types/content.schema"

type Props = {
  images: (string | null)[] | undefined
  className?: string
}

export default function CardsRotation({ images, className }: Props) {
  const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1280px)")
  const imageSizes = [
    {
      height: 234,
      width: 159,
    },
    {
      height: 155,
      width: 156,
    },
    {
      height: 124,
      width: 189,
    },
    {
      height: 232,
      width: 158,
    },
    {
      height: 126,
      width: 186,
    },
  ]
  const variantsList = [
    {
      initial: { x: -80, y: 110 },
      animate: { x: 35, y: 65 },
    },
    {
      initial: { x: 100, y: -215 },
      animate: { x: 204, y: -90 },
    },
    {
      initial: { x: 280, y: -310 },
      animate: { x: 282, y: -75 },
    },
    {
      initial: { x: 280, y: -250 },
      animate: { x: 115, y: -198 },
    },
    {
      initial: { x: 75, y: -405 },
      animate: { x: -80, y: -430 },
    },
  ]

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
      className={cn(
        "h-[600px] w-full shrink-0 xl:w-[620px]",
        isTablet && "translate-x-1/4",
        className,
      )}
    >
      {images?.map((image, index) => (
        <motion.div
          key={index}
          variants={variantsList[index]}
          transition={{ type: "spring", duration: 2.25 }}
          className={`relative overflow-hidden rounded-lg`}
          style={{
            height: imageSizes[index].height,
            width: imageSizes[index].width,
          }}
        >
          <Image
            src={image || ""}
            alt={`Image index: ${index}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      ))}
    </motion.div>
  )
}
