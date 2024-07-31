"use client"

import Image from "next/image"
import { usePathname } from "@/lib/i18n-navigation"
import { cn } from "@/lib/utils"
import Navigation from "@/components/layout/navigation"

export default function Header() {
  const pathname = usePathname()
  return (
    <header
      className={cn(
        "container my-[30px] flex items-center justify-between",
        pathname === "/" && "hidden",
      )}
    >
      <div className="relative size-14">
        <Image
          src="/assets/logo/ar_finance_rounded_224px.png"
          alt="AR Finance Logo"
          fill
          className="object-cover"
        />
      </div>
      <Navigation />
    </header>
  )
}
