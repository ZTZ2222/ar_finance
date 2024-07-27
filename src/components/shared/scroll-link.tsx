"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

type ScrollLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
}

export default function ScrollLink({
  href,
  children,
  className,
}: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const element = document.getElementById(href)

    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <Link
      href={`#${href}`}
      onClick={handleClick}
      className={cn("w-fit leading-5 text-black", className)}
    >
      {children}
    </Link>
  )
}
