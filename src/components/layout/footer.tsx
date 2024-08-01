import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Clock, Mail, MapPin, PhoneCall } from "lucide-react"
import {
  FacebookWhite,
  InstagramWhite,
  TelegramWhite,
  TikTokWhite,
  WhatsAppWhite,
} from "@/components/icons"

export default function Footer() {
  const contacts = [
    {
      icon: <PhoneCall />,
      text: "+996 500 30 10 80",
    },
    {
      icon: <Clock />,
      text: "пн - пт с 9:00 до 18:00",
    },
    {
      icon: <MapPin />,
      text: "г.Бишкек, ул. Абдрахманова 1",
    },
    {
      icon: <Mail />,
      text: "arfinance@gmail.com",
    },
  ]
  const socials = [
    {
      icon: <WhatsAppWhite />,
      href: "#",
    },
    {
      icon: <InstagramWhite />,
      href: "#",
    },
    {
      icon: <FacebookWhite />,
      href: "#",
    },
    {
      icon: <TelegramWhite />,
      href: "#",
    },
    {
      icon: <TikTokWhite />,
      href: "#",
    },
  ]
  return (
    <footer className="rounded-t-[30px] bg-gradient-to-r from-rose-750 to-[#860525]">
      <div className="container my-[50px] flex flex-col gap-[70px] xl:my-[60px] xl:flex-row xl:gap-[80px]">
        <div className="relative size-20">
          <Image
            src="/assets/logo/ar_finance_224px.png"
            alt="AR Finance Logo"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div
          id="contacts"
          className="flex flex-col gap-4 text-lg text-[#E0E0E0]"
        >
          <h3 className="font-bold text-white">Наши контакты</h3>
          {contacts.map((contact, index) => (
            <div key={index} className="flex gap-2.5">
              {contact.icon}
              <p>{contact.text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 text-lg text-white">
          <h3 className="font-bold">Мы в соцсетях</h3>
          <div className="flex gap-2">
            {socials.map((social, index) => (
              <Link key={index} href={social.href}>
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
