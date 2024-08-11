"use server"

import { db } from "@/server"
import type { zClientRequestRead } from "@/types/request.schema"

export async function getClientRequests(
  currentPage: number = 1,
  query?: string,
) {
  try {
    const clientRequests = await db.clientRequest.findMany({
      where: {
        ...(query && {
          OR: [
            {
              name: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
              contactPhone: {
                contains: query,
                mode: "insensitive",
              },
            },
          ],
        }),
      },
      include: {
        FormOfOwnership: {
          select: {
            name_ru: true,
            name_en: true,
            name_ky: true,
          },
        },
        FieldOfActivity: {
          select: {
            name_ru: true,
            name_en: true,
            name_ky: true,
          },
        },
        TaxSystem: {
          select: {
            name_ru: true,
            name_en: true,
            name_ky: true,
          },
        },
        EmployeeRange: {
          select: {
            range: true,
          },
        },
        TimePeriod: {
          select: {
            period_ru: true,
            period_en: true,
            period_ky: true,
          },
        },
        Plan: {
          select: {
            title_ru: true,
            title_en: true,
            title_ky: true,
          },
        },
      },
      take: 10,
      skip: (Number(currentPage) - 1) * 10,
      orderBy: {
        createdAt: "desc",
      },
    })
    if (clientRequests.length === 0) return null

    return clientRequests
  } catch (error) {
    return null
  }
}
