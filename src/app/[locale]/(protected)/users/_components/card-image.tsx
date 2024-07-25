"use client"

import { type ChangeEvent, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { ImagePlus, X } from "lucide-react"
import type { ControllerRenderProps } from "react-hook-form"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

type Props = {
  field: ControllerRenderProps<any, any>
  existingImage?: string
}

export default function CardImage({ field, existingImage }: Props) {
  const [image, setImage] = useState<File | string | undefined>(existingImage)
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newImage = event.target.files[0]
      setImage(newImage)
      field.onChange("/assets/avatar/man.png")
    }
  }
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>User Image</CardTitle>
        <CardDescription>Upload a profile image for your user.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative grid size-32 place-content-center rounded-full bg-gray-400">
          {image ? (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative size-32 overflow-hidden rounded-full bg-gray-400"
              >
                <Image
                  src={
                    typeof image === "string"
                      ? image
                      : URL.createObjectURL(image)
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
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
      </CardContent>
    </Card>
  )
}
