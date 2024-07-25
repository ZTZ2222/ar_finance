import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/session"
import { SidebarAdmin } from "@/components/layout/sidebar-admin"

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const user = await getCurrentUser()
  if (!user) {
    redirect("/login")
  }

  return <SidebarAdmin>{children}</SidebarAdmin>
}
