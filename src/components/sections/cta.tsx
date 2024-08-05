import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function CTA() {
  const sectionData = await getNormalizedSectionById("cta")
  const card = sectionData?.cards[0]
  return (
    <div className="container relative mb-[100px] md:mb-[120px]">
      <div
        className="relative space-y-[46px] overflow-hidden rounded-[30px] py-[60px] lg:px-[70px] lg:py-[75px]"
        style={{
          backgroundImage: `url("/assets/cta-bg.jpeg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 mx-4 max-w-[690px] space-y-[30px]">
          <h3 className="text-lg font-black leading-5 text-white lg:text-4xl">
            {sectionData?.heading}
          </h3>
          <p className="font-semibold leading-5 text-gray-350 lg:text-lg">
            {sectionData?.subheading}
          </p>
        </div>
        <div className="relative z-10 mx-4 space-y-2.5 lg:space-x-2.5">
          <Button variant="core" size="mobile" className="lg:max-w-[320px]">
            {sectionData?.primaryButton}
          </Button>

          {/* Dialog Button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="support"
                size="mobile"
                className="lg:max-w-[300px]"
              >
                {sectionData?.secondaryButton}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[358px] gap-5 rounded-[30px] bg-white px-0 lg:max-w-[686px]">
              <ScrollArea className="h-[630px] w-full px-6">
                <div className="space-y-5">
                  {/* Icon */}
                  <div className="relative size-[75px]">
                    <Image
                      src={card?.image as string}
                      alt={card?.title || ""}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-semibold leading-5 text-[#1E1E1E]">
                    {card?.title}
                  </h4>

                  {/* Description */}
                  <p className="leading-6 text-gray-650">{card?.description}</p>

                  {/* Price */}
                  <p className="text-lg font-bold leading-5 text-[#1E1E1E]">
                    {card?.extra}
                  </p>

                  {/* Close Button */}
                  <DialogClose asChild>
                    <Button variant="support" size="mobile">
                      Закрыть
                    </Button>
                  </DialogClose>
                </div>
              </ScrollArea>
              <DialogHeader className="sr-only">
                <DialogTitle>{card?.title}</DialogTitle>
                <DialogDescription>{card?.description}</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="absolute inset-x-4 inset-y-0 rounded-[30px] bg-black opacity-60" />
    </div>
  )
}
