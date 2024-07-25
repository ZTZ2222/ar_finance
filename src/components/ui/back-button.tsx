"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "@/lib/i18n-navigation"
import { ChevronLeft } from "lucide-react"

export default function BackButton() {
  const { back } = useRouter()
  return (
    <Button variant="outline" size="icon" className="h-7 w-7" onClick={back}>
      <ChevronLeft className="size-4" />
      <span className="sr-only">Back</span>
    </Button>
  )
}
