import { getTranslations } from "next-intl/server"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { db } from "@/server"
import SectionForm from "./form"

type Props = {
  params: { section: string }
}

export default async function AdminHero({ params }: Props) {
  const t = await getTranslations()
  const sectionData = await db.section.findUnique({
    where: { id: params.section },
    include: {
      cards: {
        orderBy: { id: "asc" },
      },
    },
  })

  return (
    <Card className="mb-10 lg:my-0">
      <CardHeader>
        <CardTitle>{t("Pages.Admin.CMS.Section.card-heading")}</CardTitle>
        <CardDescription>
          {t("Pages.Admin.CMS.Section.card-subheading")}
        </CardDescription>
      </CardHeader>
      {sectionData && <SectionForm sectionData={sectionData} />}
    </Card>
  )
}
