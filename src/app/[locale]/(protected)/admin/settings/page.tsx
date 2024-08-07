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
        <CardTitle>General Settings</CardTitle>
        <CardDescription>
          Manage the overall settings of your application. This section includes
          options for configuring site information and appearance.
        </CardDescription>
      </CardHeader>
      <GeneralSettingsForm />
    </Card>
  )
}
