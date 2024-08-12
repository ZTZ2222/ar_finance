import type { Metadata, ResolvingMetadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { getLocale, getTranslations } from "next-intl/server"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  FacebookColored,
  InstagramColored,
  TelegramColored,
  TikTokColored,
  WhatsAppColored,
} from "@/components/icons"
import BlogCard from "@/components/shared/blog-card"
import Heading from "@/components/shared/heading"
import SectionName from "@/components/shared/section-name"
import {
  getNormalizedArticleById,
  getNormalizedArticles,
} from "@/server/data-access-layer/article"

type Props = {
  params: { articleId: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const post = await getNormalizedArticleById(Number(params.articleId))
  const previousImages = (await parent).openGraph?.images || []
  return {
    title: post?.title,
    description: post?.content,
    openGraph: {
      images: [post?.image!, ...previousImages],
    },
  }
}

export default async function BlogDetail({
  params,
}: {
  params: { articleId: string }
}) {
  const locale = await getLocale()
  const t = await getTranslations()
  const post = await getNormalizedArticleById(Number(params.articleId))

  const other_posts = (await getNormalizedArticles()).filter(
    post => post.uid !== Number(params.articleId),
  )

  return (
    <div className="container mb-[150px] space-y-[100px]">
      <div className="flex flex-col items-center gap-10 lg:gap-[60px]">
        <Breadcrumb className="self-start">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">
                {t("Components.Breadcrumb.blog")}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="max-w-[75vw] truncate md:max-w-[55vw]">
                {post?.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Title and date */}
        <div className="space-y-[30px] text-center lg:max-w-[800px]">
          <span className="text-sm font-medium leading-[18.2px] text-rose-750">
            {post?.createdAt.toLocaleDateString(locale)}
          </span>
          <Heading>{post?.title}</Heading>
        </div>

        {/* Image */}
        <div className="relative h-[218px] w-full overflow-hidden rounded-lg md:h-[300px] lg:h-[400px] xl:h-[500px]">
          <Image
            src={post?.image || ""}
            alt={`Blog #${post?.uid} image`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div dangerouslySetInnerHTML={{ __html: post?.content || "" }} />

        <div className="space-y-10">
          {post?.linkTitle && post.linkHref && (
            <Button variant="support" size="mobile" className="gap-2 px-2.5">
              <Link href={post.linkHref} className="max-w-[220px] truncate">
                {post?.linkTitle}
              </Link>
              <ArrowDown className="size-5" />
            </Button>
          )}
          {post?.socials && post.socials.length > 0 && (
            <div className="flex justify-center gap-10">
              <WhatsAppColored className="size-8" />
              <TelegramColored className="size-8" />
              <FacebookColored className="size-8" />
              <InstagramColored className="size-8" />
              <TikTokColored className="size-8" />
            </div>
          )}
        </div>
      </div>
      <div className="space-y-[30px]">
        <SectionName>{t("Pages.Blog.other-articles")}</SectionName>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {other_posts.map(blog => (
            <BlogCard key={blog.uid} {...blog} />
          ))}
        </div>
      </div>
    </div>
  )
}
