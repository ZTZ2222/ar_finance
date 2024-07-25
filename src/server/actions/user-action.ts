"use server"

import { redirect } from "@/lib/i18n-navigation"
import { revalidatePath } from "next/cache"
import { db } from "@/server"
import { actionClient } from "./safe-action"
import { userCreateSchema } from "@/types/user.schema"
import bcrypt from "bcrypt"

export const createUser = actionClient
  .schema(userCreateSchema)
  .action(async ({ parsedInput }) => {
    const { email, password, confirmPassword, ...rest } = parsedInput
    const existingUser = await db.user.findFirst({
      where: { email },
    })
    if (existingUser) return { error: "User already exists!" }

    const hashedPassword = await bcrypt.hash(password, 10)
    await db.user.create({
      data: {
        ...rest,
        email,
        password: hashedPassword,
      },
    })

    revalidatePath("/users")
    redirect("/users")

    // TODO: send verification email

    return { success: "User created!" }
  })
