import React from "react"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
  children: React.ReactNode
}

export default function Subheading({ className, children }: Props) {
  return (
    <h3
      className={cn(
        "text-xl font-black leading-[22px] text-black xl:text-4xl",
        className,
      )}
    >
      {children}
    </h3>
  )
}
