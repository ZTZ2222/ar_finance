import React from "react"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
  children: React.ReactNode
}

export default function Paragraph({ className, children }: Props) {
  return (
    <p
      className={cn(
        "leading-6 text-gray-650 xl:text-lg xl:leading-[27px]",
        className,
      )}
    >
      {children}
    </p>
  )
}
