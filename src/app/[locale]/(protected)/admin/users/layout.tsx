import React from "react"
import HeaderAdmin from "@/components/layout/header-admin"

export default function UserManagementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen w-full flex-col bg-muted">
      <HeaderAdmin />
      <main className="flex-1 overflow-auto px-10 py-4">{children}</main>
    </div>
  )
}
