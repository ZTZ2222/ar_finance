import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import type { zPostRead } from "@/types/post.schema"

type BlogCardProps = zPostRead & {
  size?: "sm" | "md"
  className?: string
}

export default function BlogCard({
  title,
  short_description,
  primaryImage,
  slug,
  createdAt,
  size = "md",
  className,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        "shrink-0 space-y-8",
        size === "sm"
          ? "max-w-[300px] xl:max-w-[402px]"
          : "max-w-[358px] xl:max-w-[402px]",
        className,
      )}
    >
      {/* Image */}
      <div className={cn("relative h-[240px] overflow-hidden rounded-lg")}>
        <Image
          src={primaryImage}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-5">
        <span className="text-sm font-medium leading-[18.2px] text-rose-750">
          {createdAt.toLocaleDateString("ru-RU", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <div className="flex gap-4">
          <h4 className="text-lg font-bold leading-[21.6px] text-black">
            {title}
          </h4>
          <ArrowUpRight className="size-6 shrink-0" />
        </div>
        <p className="line-clamp-3 text-gray-650">{short_description}</p>

        <div className="text-end font-semibold leading-5 text-gray-650">
          Читать далее
        </div>
      </div>
    </Link>
  )
}
