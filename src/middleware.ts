import { auth as authMiddleware } from "@/server/auth"
import createMiddleware from "next-intl/middleware"
import { AllLocales, AppConfig } from "./lib/i18n"

const intlMiddleware = createMiddleware({
  locales: AllLocales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale,
})

export default authMiddleware(request => {
  return intlMiddleware(request)
})

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
}
