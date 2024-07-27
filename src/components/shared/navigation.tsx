"use client"

import { Button } from "@/components/ui/button"
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
import { BgLogo, BurgerMenu, Calculator } from "@/components/icons"
import LocaleSwitcher from "@/components/shared/locale-switcher"
import ScrollLink from "@/components/shared/scroll-link"

export default function Navigation() {
  const links = [
    {
      name: "Услуги",
      href: "about",
    },
    {
      name: "Тарифы",
      href: "#",
    },
    {
      name: "Блог",
      href: "",
    },
    {
      name: "Команда",
      href: "",
    },
    {
      name: "Контакты",
      href: "#",
    },
  ]
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="support" size="menu" className="border-none">
          <BurgerMenu />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full p-4 lg:hidden">
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
          <Button variant="core" size="mobile" className="gap-2.5">
            Калькулятор услуг
            <Calculator />
          </Button>
        </SheetFooter>
        <BgLogo className="mt-5 size-[224px] w-full self-center opacity-20" />
      </SheetContent>
    </Sheet>
  )
}
