import { getTranslations } from "next-intl/server"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function AdminMeta() {
  const t = await getTranslations()
  return (
    <Card className="mb-10 lg:my-0">
      <CardHeader>
        <CardTitle>{t("Pages.Admin.CMS.Meta.heading")}</CardTitle>
        <CardDescription>
          {t("Pages.Admin.CMS.Meta.subheading")}
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  )
}
