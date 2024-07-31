import React from "react"
import Image from "next/image"
import { CircleArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Lines } from "@/components/icons"
import Navigation from "@/components/layout/navigation"
import ScrollLink from "@/components/shared/scroll-link"

export default async function Hero() {
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
        <div className="relative size-14 xl:size-[120px]">
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
      <section className="container relative z-10 mb-[50px] mt-auto flex h-[60vh] flex-col justify-between self-center xl:justify-normal xl:gap-[50px]">
        <div className="relative max-w-[694px] space-y-9">
          <h1 className="text-3xl font-black text-white xl:text-6xl">
            Мы делаем бухгалтерию простой
          </h1>
          <Lines className="absolute -right-2 top-1/4 z-20 -translate-y-2 xl:h-[47.5px] xl:w-[311px] xl:translate-y-8" />
          <p className="leading-6 text-gray-350 xl:text-xl xl:font-medium xl:leading-[30px]">
            Оставьте заявку, чтобы узнать, как наши решения могут упростить Ваш
            бухгалтерский учет
          </p>
        </div>
        <Button variant="core" size="mobile" className="xl:max-w-[194px]">
          Оставить заявку
        </Button>
      </section>
      <div className="absolute inset-0 bg-black opacity-60" />
      <ScrollLink
        href="about"
        className="absolute bottom-16 left-1/2 z-30 hidden translate-x-[-50%] animate-bounce cursor-pointer xl:block"
      >
        <CircleArrowDown className="size-[42px] stroke-1 text-white" />
      </ScrollLink>
    </div>
  )
}
