import { db } from "@/server"
import type { zSection } from "@/types/content.schema"

export default async function getSectionById(
  id: string,
): Promise<zSection | null> {
  const sectionData = await db.section.findUnique({
    where: { id },
    include: {
      cards: {
        orderBy: { id: "asc" },
      },
    },
  })
  return sectionData
}
