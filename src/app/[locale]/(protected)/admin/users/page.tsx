import React, { Suspense } from "react"
import Link from "next/link"
import { PlusCircle } from "lucide-react"
import SkeletonUserTable from "@/app/[locale]/(protected)/admin/users/_components/skeleton-user-table"
import { Button } from "@/components/ui/button"
import Search from "@/components/ui/search"
import PaginationComponent from "@/components/layout/pagination-component"
import { db } from "@/server"
import UserTable from "./_components/user-table"

type Props = {
  searchParams?: {
    query?: string
    page?: string
  }
}

export default async function Users({ searchParams }: Props) {
  const query = searchParams?.query || ""
  const currentPage = Number(searchParams?.page) || 1

  const totalCount = await db.user.count({
    where: {
      name: {
        contains: query,
        mode: "insensitive",
      },
    },
  })
  const totalPages = Math.ceil(totalCount / 10)

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">User Management</h1>
        <div className="flex justify-end">
          <Search placeholder="Search user..." />
          <Button className="gap-2" asChild>
            <Link href="/admin/users/create">
              <PlusCircle className="size-5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                New User
              </span>
            </Link>
          </Button>
        </div>
      </div>
      <Suspense key={query + currentPage} fallback={<SkeletonUserTable />}>
        <UserTable query={query} currentPage={currentPage} />
      </Suspense>
      <PaginationComponent totalPages={totalPages} />
    </div>
  )
}
