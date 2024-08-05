import { Inter as FontSans } from "next/font/google"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages, getTranslations } from "next-intl/server"
import { Toaster } from "sonner"
import { AllLocales } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { AuthProvider } from "@/context/auth-provider"
// import { ThemeProvider } from "@/context/theme-provider"
import "@/styles/globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations()

  return {
    title: t("Meta.title"),
    description: t("Meta.description"),
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
    <html lang={params.locale} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen scroll-smooth bg-[#F9FAFB] font-sans antialiased",
          fontSans.variable,
        )}
      >
        <AuthProvider>
          {/* <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > */}
          <NextIntlClientProvider locale={params.locale} messages={messages}>
            {children}
            <Toaster richColors />
          </NextIntlClientProvider>
          {/* </ThemeProvider> */}
        </AuthProvider>
      </body>
    </html>
  )
}
