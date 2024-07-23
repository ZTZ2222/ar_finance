"use server"

import { credentialsSchema } from "@/types/auth.schema"
import { actionClient } from "./safe-action"
import { signIn } from "@/lib/auth"
import { AuthError } from "next-auth"

export const loginUser = actionClient
  .schema(credentialsSchema)
  .action(async ({ parsedInput: { email, password } }) => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirectTo: "/dashboard",
      })
      return { success: "User logged in" }
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case "CredentialsSignin":
            return { error: "Email or Password Incorrect" }
          case "AccessDenied":
            return { error: error.message }
          case "OAuthSignInError":
            return { error: error.message }
          default:
            return { error: "Something went wrong" }
        }
      }
      throw error
    }
  })
