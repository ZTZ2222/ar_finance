import React from "react"

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Header /> */}
      <main className="grow">{children}</main>
      {/* <ScrollToTop /> */}
      {/* <Footer /> */}
    </div>
  )
}
