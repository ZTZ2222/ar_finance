import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (
            credentials?.email === "admin@mail.com" &&
            credentials?.password === "admin"
          ) {
            return {
              id: "admin",
              email: "admin@mail.com",
              role: "ADMIN",
            }
          }
          return null
        } catch (error) {
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (!token.sub) {
        return token
      }
      token.role = user.role
      return token
    },
    async session({ session, token }) {
      if (token) {
        if (token.sub && session.user) {
          session.user.id = token.sub
        }

        if (token.role && session.user) {
          session.user.role = token.role
        }
      }

      return session
    },
  },
})
