import { Inter as FontSans } from "next/font/google"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages, getTranslations } from "next-intl/server"
import { AuthProvider } from "@/lib/auth/provider/auth"
import { AllLocales } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import "@/styles/globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({
    locale: locale,
    namespace: "Meta",
  })

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const messages = await getMessages()
  if (!AllLocales.includes(params.locale)) notFound()
  return (
    <html lang={params.locale}>
      <body
        className={cn(
          "min-h-screen scroll-smooth bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <AuthProvider>
          <NextIntlClientProvider locale={params.locale} messages={messages}>
            {children}
            <Toaster />
          </NextIntlClientProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
