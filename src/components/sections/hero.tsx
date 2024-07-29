import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Lines } from "@/components/icons"
import Navigation from "@/components/shared/navigation"

export default async function Hero() {
  return (
    <div
      className="container relative flex h-screen flex-col"
      style={{
        backgroundImage: `url("/assets/hero-bg2.jpeg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <header
        className={cn(
          "relative z-10 flex items-center justify-between py-4",
          "",
        )}
      >
        <div className="relative size-14">
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
      <section className="relative z-10 mb-[50px] mt-auto flex h-[60vh] flex-col justify-between self-center">
        <div className="relative space-y-9">
          <h1 className="text-3xl font-black text-white">
            Мы делаем бухгалтерию простой
          </h1>
          <Lines className="absolute -right-2 top-1/4 z-20 -translate-y-2" />
          <p className="leading-6 text-gray-350">
            Оставьте заявку, чтобы узнать, как наши решения могут упростить Ваш
            бухгалтерский учет
          </p>
        </div>
        <Button variant="core" size="mobile">
          Оставить заявку
        </Button>
      </section>
      <div className="absolute inset-0 bg-black opacity-60" />
    </div>
  )
}
