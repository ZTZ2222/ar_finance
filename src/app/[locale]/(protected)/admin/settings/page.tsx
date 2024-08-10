import { getTranslations } from "next-intl/server"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import GeneralSettingsForm from "./form"

export default async function Settings() {
  const t = await getTranslations()
  return (
    <Card>
      <CardHeader className="space-y-3.5">
        <CardTitle>
          {t("Pages.Admin.Settings.general-settings-title")}
        </CardTitle>
        <CardDescription>
          {t("Pages.Admin.Settings.general-settings-description")}
        </CardDescription>
      </CardHeader>
      <GeneralSettingsForm />
    </Card>
  )
}
