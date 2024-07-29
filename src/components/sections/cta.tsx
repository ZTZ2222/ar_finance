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

export default async function CTA() {
  const modalContent = {
    id: "1",
    icon: "/assets/service-icons/startup.png",
    title: "Дорогие стартаперы!",
    description: `Запуск и развитие стартапа – это захватывающее, но одновременно и сложное приключение. Мы понимаем, что вам нужно сосредоточиться на инновациях, привлечении клиентов и развитии вашего бизнеса. Однако финансовые и бухгалтерские вопросы также требуют вашего внимания. Именно здесь мы можем помочь вам!
    Почему именно мы? 
    Мы – бухгалтерская фирма, специализирующаяся на поддержке стартапов. Наш опыт работы с молодыми компаниями позволяет нам предлагать эффективные и гибкие решения, которые соответствуют вашим уникальным потребностям. Мы знаем, как важна для вас каждая копейка и каждая минута, поэтому предлагаем вам полный спектр бухгалтерских услуг по доступным ценам.

    Преимущества работы с нами:
    Индивидуальный подход: Мы предлагаем персонализированные решения, адаптированные под ваш бизнес.
    Прозрачные цены: Мы понимаем, что стартапы работают с ограниченными бюджетами, поэтому наши тарифы прозрачны и доступны.
    Технологии и инновации: Мы используем современные технологии для автоматизации бухгалтерского учета, что позволяет сократить время на рутинные операции и минимизировать ошибки.
    Опыт и надежность: Наши специалисты обладают многолетним опытом работы с стартапами и знают все нюансы бухгалтерского и налогового учета.
    Специальное предложение
    Для новых клиентов-стартапов мы предлагаем бесплатную консультацию и бесплатный аудит ваших текущих бухгалтерских процессов. Мы оценим вашу ситуацию и предложим наиболее эффективные решения для вашего бизнеса.`,
  }
  return (
    <div className="container relative mb-[100px]">
      <div
        className="relative space-y-[46px] overflow-hidden rounded-[30px] py-[60px]"
        style={{
          backgroundImage: `url("/assets/cta-bg.jpeg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 mx-4 space-y-[30px]">
          <h3 className="text-lg font-black leading-5 text-white">
            Спецпредложение для стартаперов
          </h3>
          <p className="font-semibold leading-5 text-gray-350">
            Для новых клиентов - стартапов мы предлагаем бесплатную консультацию
            и бесплатный аудит ваших текущих бухгалтерских процессов.
            <br />
            <br />
            Мы оценим вашу ситуацию и предложим наиболее эффективные решения для
            вашего бизнеса.
          </p>
        </div>
        <div className="relative z-10 mx-4 space-y-2.5">
          <Button variant="core" size="mobile">
            Получить предложение
          </Button>

          {/* Dialog Button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="support" size="mobile">
                Подробнее
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[358px] gap-5 rounded-[30px] bg-white">
              <ScrollArea className="h-[630px] w-full">
                <div className="space-y-5">
                  {/* Icon */}
                  <div className="relative size-[75px]">
                    <Image
                      src={modalContent.icon}
                      alt={modalContent.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-semibold leading-5 text-[#1E1E1E]">
                    {modalContent.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-650 leading-6">
                    {modalContent.description}
                  </p>

                  {/* Price */}
                  <p className="text-lg font-bold leading-5 text-[#1E1E1E]">
                    10 000 сом
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
                <DialogTitle>{modalContent.title}</DialogTitle>
                <DialogDescription>
                  {modalContent.description}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="absolute inset-x-4 inset-y-0 rounded-[30px] bg-black opacity-60" />
    </div>
  )
}
