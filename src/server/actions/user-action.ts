"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "@/lib/i18n-navigation"
import { saltAndHashPassword } from "@/lib/utils"
import { db } from "@/server"
import { userCreateSchema } from "@/types/user.schema"
import { actionClient } from "./safe-action"

export const createUser = actionClient
  .schema(userCreateSchema)
  .action(async ({ parsedInput }) => {
    const { email, password, confirmPassword, ...rest } = parsedInput
    const normalizedEmail = email.toLowerCase()

    const existingUser = await getUserByEmailDanger(normalizedEmail)
    if (existingUser) return { error: "User already exists!" }

    const hashedPassword = await saltAndHashPassword(password)
    await db.user.create({
      data: {
        ...rest,
        email: normalizedEmail,
        password: hashedPassword,
      },
    })

    revalidatePath("/users")
    redirect("/users")

    // TODO: send verification email

    return { success: "User created!" }
  })

export const getUserByEmailPasswordOmit = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: { email: email?.toLowerCase() },
      omit: {
        password: true,
      },
    })

    if (!user) {
      return null
    }
    return user
  } catch (error) {
    return null
  }
}

export const getUserByEmailDanger = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: { email: email?.toLowerCase() },
    })

    if (!user) {
      return null
    }
    return user
  } catch (error) {
    return null
  }
}

export const getUserByIdPasswordOmit = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id },
      omit: {
        password: true,
      },
    })
    return user
  } catch (error) {
    return null
  }
}

export const getUserByIdDanger = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id },
    })
    return user
  } catch (error) {
    return null
  }
}
