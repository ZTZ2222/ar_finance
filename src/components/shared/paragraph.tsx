import React from "react"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
  children: React.ReactNode
}

export default function Paragraph({ className, children }: Props) {
  return <p className={cn("text-gray-650 leading-6", className)}>{children}</p>
}
