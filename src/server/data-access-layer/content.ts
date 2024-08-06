import { getLocale } from "next-intl/server"
import { db } from "@/server"
import type {
  NormalizedCard,
  NormalizedSection,
  zContact,
  zSection,
  zSocial,
} from "@/types/content.schema"

export async function getSectionById(id: string): Promise<zSection | null> {
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

export async function getNormalizedSectionById(
  id: string,
): Promise<NormalizedSection | null> {
  const locale = await getLocale()
  const sectionData = await db.section.findUnique({
    where: { id },
    include: {
      cards: {
        orderBy: { id: "asc" },
      },
    },
  })

  if (!sectionData) {
    return null
  }

  const sectionName = sectionData[
    `sectionName_${locale}` as keyof typeof sectionData
  ] as string | null
  const heading = sectionData[
    `heading_${locale}` as keyof typeof sectionData
  ] as string | null
  const subheading = sectionData[
    `subheading_${locale}` as keyof typeof sectionData
  ] as string | null
  const primaryButton = sectionData[
    `primaryButton_${locale}` as keyof typeof sectionData
  ] as string | null
  const secondaryButton = sectionData[
    `secondaryButton_${locale}` as keyof typeof sectionData
  ] as string | null

  const normalizedCards: NormalizedCard[] = sectionData.cards.map(card => ({
    id: card.id,
    title: card[`title_${locale}` as keyof typeof card] as string,
    description: card[`description_${locale}` as keyof typeof card] as string,
    extra: card[`extra_${locale}` as keyof typeof card] as string,
    bullets: card[`bullets_${locale}` as keyof typeof card] as string[],
    image: card.image as string,
  }))

  return {
    sectionName,
    heading,
    subheading,
    primaryButton,
    secondaryButton,
    cards: normalizedCards,
  }
}

export async function getContacts(): Promise<zContact[] | null> {
  try {
    const contacts = await db.contact.findMany({
      orderBy: { id: "asc" },
    })
    if (!contacts) return null
    return contacts
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function getSocials(): Promise<zSocial[] | null> {
  try {
    const socials = await db.social.findMany({
      orderBy: { id: "asc" },
    })
    if (!socials) return null
    return socials
  } catch (error) {
    console.log(error)
    return null
  }
}
