import { getLocale } from "next-intl/server"
import { db } from "@/server"
import type {
  NormalizedCard,
  NormalizedSection,
  zContact,
  zSection,
  zSocial,
} from "@/types/content.schema"

export async function getSectionById(uid: number): Promise<zSection | null> {
  const sectionData = await db.section.findUnique({
    where: { uid },
    include: {
      cards: {
        orderBy: { uid: "asc" },
      },
    },
  })
  return sectionData
}

export async function getNormalizedSectionById(
  slug: string,
): Promise<NormalizedSection | null> {
  const locale = await getLocale()
  const sectionData = await db.section.findUnique({
    where: { slug },
    include: {
      cards: {
        orderBy: { uid: "asc" },
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
    uid: card.uid,
    title: card[`title_${locale}` as keyof typeof card] as string,
    description: card[`description_${locale}` as keyof typeof card] as string,
    extra: card[`extra_${locale}` as keyof typeof card] as string,
    bullets: card[`bullets_${locale}` as keyof typeof card] as string[],
    image: card.image as string,
  }))

  return {
    uid: sectionData.uid,
    slug: sectionData.slug,
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
      orderBy: { uid: "asc" },
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
      orderBy: { uid: "asc" },
    })
    if (!socials) return null
    return socials
  } catch (error) {
    console.log(error)
    return null
  }
}
