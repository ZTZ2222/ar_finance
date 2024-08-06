"use client"

import React from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { usePathname } from "@/lib/i18n-navigation"

const sections = [
  {
    title: "hero",
    href: "/admin/cms/hero",
  },
  {
    title: "about-us",
    href: "/admin/cms/about-us",
  },
  {
    title: "why-us",
    href: "/admin/cms/why-us",
  },
  {
    title: "cta",
    href: "/admin/cms/cta",
  },
  {
    title: "our-services",
    href: "/admin/cms/our-services",
  },
  {
    title: "plans",
    href: "/admin/cms/plans",
  },
  {
    title: "calculator",
    href: "/admin/cms/calculator",
  },
  {
    title: "blog",
    href: "/admin/cms/blog",
  },
  {
    title: "our-team",
    href: "/admin/cms/our-team",
  },
  {
    title: "our-partners",
    href: "/admin/cms/our-partners",
  },
  {
    title: "faq",
    href: "/admin/cms/faq",
  },
  {
    title: "contacts-socials",
    href: "/admin/cms/contacts-socials",
  },
  {
    title: "meta",
    href: "/admin/cms/meta",
  },
]

export default function ContentNavigation() {
  const pathname = usePathname()
  const t = useTranslations("Pages.Admin.CMS.Navigation")

  return (
    <nav
      className="grid grid-cols-2 gap-4 text-sm text-muted-foreground md:grid-cols-1"
      x-chunk="dashboard-04-chunk-0"
    >
      {sections.map(section => (
        <Link
          key={section.title}
          href={section.href}
          className={
            pathname === section.href ? "font-semibold text-primary" : ""
          }
        >
          {t(section.title)}
        </Link>
      ))}
    </nav>
  )
}
