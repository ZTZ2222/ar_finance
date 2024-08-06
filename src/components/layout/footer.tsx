import Image from "next/image"
import Link from "next/link"
import { getLocale } from "next-intl/server"
import { getContacts, getSocials } from "@/server/data-access-layer/content"

export default async function Footer() {
  const locale = await getLocale()
  const contacts = await getContacts()
  const socials = await getSocials()
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
          {contacts?.map((contact, index) => (
            <div key={index} className="flex gap-2.5">
              <div className="relative size-6">
                <Image
                  src={contact.icon}
                  alt={contact.name_ru as string}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p>{contact[`name_${locale}` as keyof typeof contact]}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 text-lg text-white">
          <h3 className="font-bold">Мы в соцсетях</h3>
          <div className="flex gap-2">
            {socials?.map((social, index) => (
              <Link key={index} href={social.link}>
                <div className="relative size-12">
                  <Image
                    src={social.icon}
                    alt={social.name as string}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
