"use server"

import { redirect } from "@/lib/i18n-navigation"
import { revalidatePath } from "next/cache"
import { db } from "@/server"
import { actionClient } from "./safe-action"
import { userCreateSchema } from "@/types/user.schema"
import { saltAndHashPassword } from "@/lib/utils"

export const createUser = actionClient
  .schema(userCreateSchema)
  .action(async ({ parsedInput }) => {
    const { email, password, confirmPassword, ...rest } = parsedInput
    const normalizedEmail = email.toLowerCase()

    const existingUser = await getUserByEmail(normalizedEmail)
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

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: { email: email.toLowerCase() },
    })
    return user
  } catch (error) {
    return null
  }
}

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id },
    })
    return user
  } catch (error) {
    return null
  }
}
