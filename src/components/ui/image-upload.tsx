"use client"

import { type ChangeEvent, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { ImagePlus, Upload } from "lucide-react"
import type { ControllerRenderProps } from "react-hook-form"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

type Props = {
  field: ControllerRenderProps<any, any>
  existingImage?: string
  className?: string
}

export default function ImageUpload({
  field,
  existingImage,
  className,
}: Props) {
  const [image, setImage] = useState<File | string | undefined>(existingImage)
  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newImage = event.target.files[0]
      setImage(newImage)
      const formData = new FormData()
      formData.append("file", newImage)
      const imageUrl = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })
        .then(res => res.json())
        .then(res => res.url)

      field.onChange(imageUrl)
    }
  }
  return (
    <div
      className={cn(
        "group relative grid size-32 place-content-center rounded-lg bg-gray-400",
        className,
      )}
    >
      {image ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative size-32 overflow-hidden rounded-lg bg-gray-400"
          >
            <Image
              src={
                typeof image === "string" ? image : URL.createObjectURL(image)
              }
              alt={`User Avatar Image`}
              className="object-cover"
              fill
              sizes="(max-width: 600px) 100vw, 50vw"
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        <ImagePlus className="size-12 stroke-white" />
      )}

      <Input
        type="file"
        className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
        accept="image/*"
        onChange={handleImageUpload}
      />
      <Upload className="absolute left-1/2 top-1/2 size-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-black/35 stroke-white opacity-0 transition-all group-hover:opacity-100" />
    </div>
  )
}
