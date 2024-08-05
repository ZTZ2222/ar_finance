import React from "react"
import Image from "next/image"
import { CircleArrowDown } from "lucide-react"
import { getLocale } from "next-intl/server"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Lines } from "@/components/icons"
import Navigation from "@/components/layout/navigation"
import ScrollLink from "@/components/shared/scroll-link"
import getSectionById from "@/server/data-access-layer/content"
import type { zSection } from "@/types/content.schema"

export default async function Hero() {
  const locale = await getLocale()
  const sectionData = await getSectionById("hero")

  const heading =
    sectionData &&
    (sectionData[`heading_${locale}` as keyof zSection] as string)
  const subheading =
    sectionData &&
    (sectionData[`subheading_${locale}` as keyof zSection] as string)
  const primaryButton =
    sectionData &&
    (sectionData[`primaryButton_${locale}` as keyof zSection] as string)

  // Split heading text into words
  const words = heading?.split(" ")
  const lastWord = words?.pop() // Extract the last word
  const restOfWords = words?.join(" ") // Join the remaining words

  return (
    <div
      className="relative flex h-screen flex-col"
      style={{
        backgroundImage: `url("/assets/hero-bg2.jpeg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <header
        className={cn(
          "relative z-10 flex items-center justify-between py-[30px] xl:py-5",
          "container",
        )}
      >
        <div className="relative size-14 lg:size-[120px]">
          <Image
            src="/assets/logo/ar_finance_224px.png"
            alt="AR Finance Logo"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <Navigation />
      </header>
      <section className="container relative z-10 mb-[50px] mt-auto flex h-[60vh] flex-col justify-between self-center md:justify-normal md:gap-[50px]">
        <div className="relative max-w-[358px] space-y-9 md:max-w-[500px] xl:max-w-[694px]">
          <h1 className="relative text-3xl font-black text-white md:text-4xl xl:text-6xl">
            {restOfWords}{" "}
            <span className="relative inline-block">
              {lastWord}
              <Lines className="absolute -bottom-5 left-1/2 z-20 translate-x-[-50%] xl:-bottom-10 xl:h-[47.5px] xl:w-[311px]" />
            </span>
          </h1>
          <p className="leading-6 text-gray-350 md:text-lg xl:text-xl xl:font-medium xl:leading-[30px]">
            {subheading}
          </p>
        </div>
        <Button variant="core" size="mobile" className="w-fit px-[30px]">
          {primaryButton}
        </Button>
      </section>
      <div className="absolute inset-0 bg-black opacity-60" />
      <ScrollLink
        href="about"
        className="absolute bottom-16 left-1/2 z-30 hidden translate-x-[-50%] animate-bounce cursor-pointer lg:block"
      >
        <CircleArrowDown className="size-[42px] stroke-1 text-white" />
      </ScrollLink>
    </div>
  )
}
