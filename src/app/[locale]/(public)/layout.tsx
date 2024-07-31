import React from "react"
import BackToTopButton from "@/components/layout/back-to-top-button"
import FloatWhatsApp from "@/components/layout/float-whatsapp"
import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col bg-[#F9FAFB]">
      <Header />
      <main className="grow">{children}</main>
      <BackToTopButton />
      <FloatWhatsApp />
      <Footer />
    </div>
  )
}
