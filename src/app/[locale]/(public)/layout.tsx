import React from "react"
import BackToTopButton from "@/components/layout/back-to-top-button"
import FloatWhatsApp from "@/components/layout/float-whatsapp"
import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import { getMetadata } from "@/server/data-access-layer/content"

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const logo = (await getMetadata())?.logo2
  return (
    <div className="flex flex-col">
      <Header logo={logo} />
      <main className="grow">{children}</main>
      <BackToTopButton />
      <FloatWhatsApp />
      <Footer />
    </div>
  )
}
