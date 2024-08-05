import { getTranslations } from "next-intl/server"
import ContentNavigation from "./_components/content-navigation"

export default async function CMSLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const t = await getTranslations("Pages.Admin.CMS")
  return (
    <div className="flex flex-1 flex-col gap-4 bg-muted/40 md:gap-8">
      <div className="mx-auto grid w-full gap-2">
        <h1 className="text-3xl font-semibold">{t("title")}</h1>
      </div>
      <div className="mx-auto grid w-full items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <ContentNavigation />
        {children}
      </div>
    </div>
  )
}
