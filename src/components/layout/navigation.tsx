"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  BgLogo,
  BurgerMenu,
  Calculator as CalculatorIcon,
} from "@/components/icons"
import Calculator from "@/components/shared/calculator"
import LocaleSwitcher from "@/components/shared/locale-switcher"
import ScrollLink from "@/components/shared/scroll-link"

export default function Navigation() {
  const links = [
    {
      name: "Услуги",
      href: "our-services",
    },
    {
      name: "Тарифы",
      href: "plans",
    },
    {
      name: "Блог",
      href: "blog",
    },
    {
      name: "Команда",
      href: "our-team",
    },
    {
      name: "Контакты",
      href: "contacts",
    },
  ]
  return (
    <>
      {/* Mobile */}
      <Sheet>
        <SheetTrigger asChild className="xl:hidden">
          <Button
            variant="support"
            size="menu"
            // className="border-gray-350" border-none
          >
            <BurgerMenu />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full px-4 py-[30px] xl:hidden">
          <SheetHeader className="sr-only">
            <SheetTitle>Меню навигации</SheetTitle>
            <SheetDescription>Открыть меню навигации</SheetDescription>
          </SheetHeader>
          {/* Links */}
          <nav className="mb-[50px] flex flex-col items-center">
            {links.map(link => (
              <ScrollLink key={link.name} href={link.href}>
                <SheetClose className="px-[30px] py-[18px]">
                  {link.name}
                </SheetClose>
              </ScrollLink>
            ))}
          </nav>
          <SheetFooter className="w-full items-center gap-5">
            <LocaleSwitcher />

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="core" size="mobile" className="gap-2.5">
                  Калькулятор услуг
                  <CalculatorIcon />
                </Button>
              </DialogTrigger>
              <DialogContent className="rounded-[30px] border-none bg-transparent p-0">
                <ScrollArea className="h-screen">
                  <div className="h-[870px]">
                    <Calculator />
                  </div>
                </ScrollArea>
                <DialogHeader className="sr-only">
                  <DialogTitle>Калькулятор</DialogTitle>
                  <DialogDescription>Калькулятор</DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </SheetFooter>
          <BgLogo className="mt-5 size-[224px] w-full self-center" />
        </SheetContent>
      </Sheet>

      {/* Desktop */}
      <div className="hidden xl:flex">
        <nav className="flex shrink-0 items-center overflow-hidden rounded-lg bg-white/80">
          {links.map(link => (
            <ScrollLink
              key={link.name}
              href={link.href}
              className="px-[30px] py-[22px] transition-colors hover:bg-black/80 hover:text-white"
            >
              {link.name}
            </ScrollLink>
          ))}
        </nav>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="core"
              size="mobile"
              className="ml-[50px] w-[240px] shrink-0 gap-2.5"
            >
              Калькулятор услуг
              <CalculatorIcon />
            </Button>
          </DialogTrigger>
          <DialogContent className="rounded-[30px] border-none bg-transparent p-0">
            <Calculator />
            <DialogHeader className="sr-only">
              <DialogTitle>Калькулятор</DialogTitle>
              <DialogDescription>Калькулятор</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <LocaleSwitcher className="ml-5" />
      </div>
    </>
  )
}
