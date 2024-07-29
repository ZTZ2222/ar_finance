"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { zCardImage } from "@/types/content.schema"

type Props = {
  images: zCardImage[]
  className?: string
}

export default function CardsRotation({ images, className }: Props) {
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
      className={cn("h-[600px]", className)}
    >
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          variants={variantsList[index]}
          transition={{ type: "spring", duration: 2.25 }}
          className={`relative overflow-hidden rounded-lg`}
          style={{ height: image.height, width: image.width }}
        >
          <Image
            src={image.src}
            alt={`Image ID: ${image.id}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      ))}
    </motion.div>
  )
}
