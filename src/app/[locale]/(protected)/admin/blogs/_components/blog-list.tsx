/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2MqJbvnhlgi
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { FilePenIcon, TrashIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function BlogList() {
  return (
    <div className="flex w-full flex-col gap-4 bg-muted p-4 sm:p-6 md:p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Blog Posts</h1>
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Create New Post
        </Link>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                <Link href="#" className="hover:underline" prefetch={false}>
                  The Importance of Blogging for Businesses
                </Link>
              </TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>2023-04-15</TableCell>
              <TableCell>
                <Badge variant="outline">Published</Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Link
                    href="#"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    prefetch={false}
                  >
                    <FilePenIcon className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-red-500 hover:bg-red-500/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    <TrashIcon className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 px-3">
                    Unpublish
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <Link href="#" className="hover:underline" prefetch={false}>
                  10 Tips for Effective Content Marketing
                </Link>
              </TableCell>
              <TableCell>Jane Smith</TableCell>
              <TableCell>2023-03-28</TableCell>
              <TableCell>
                <Badge variant="outline">Draft</Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Link
                    href="#"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    prefetch={false}
                  >
                    <FilePenIcon className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-red-500 hover:bg-red-500/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    <TrashIcon className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 px-3">
                    Publish
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <Link href="#" className="hover:underline" prefetch={false}>
                  The Rise of Artificial Intelligence in Marketing
                </Link>
              </TableCell>
              <TableCell>Sarah Lee</TableCell>
              <TableCell>2023-02-10</TableCell>
              <TableCell>
                <Badge variant="outline">Published</Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Link
                    href="#"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    prefetch={false}
                  >
                    <FilePenIcon className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-red-500 hover:bg-red-500/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    <TrashIcon className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 px-3">
                    Unpublish
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
