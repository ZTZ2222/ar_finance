import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { getLocale } from "next-intl/server"
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
import Subheading from "@/components/shared/subheading"
import type { zPostRead } from "@/types/post.schema"

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const locale = await getLocale()
  // const data = await getBlogBySlug(slug)
  return {
    title: "Блог",
  }
}

export default function BlogDetail({ params }: { params: { slug: string } }) {
  // const post = await getBlogBySlug(slug)
  const post: zPostRead = {
    id: "1",
    title: "Как выбрать правильную бухгалтерскую программу для вашего бизнеса",
    short_description:
      "В современном мире технологий выбор подходящей бухгалтерской программы может значительно упростить вашу работу. В этой статье мы расскажем о ключевых критериях выбора и рассмотрим популярные решения на рынке.",
    content:
      "В современном мире технологий выбор подходящей бухгалтерской программы может значительно упростить вашу работу. Правильный выбор программного обеспечения может помочь вам сэкономить время, улучшить точность учета и обеспечить соответствие законодательным требованиям. В этой статье мы расскажем о ключевых критериях выбора и рассмотрим популярные решения на рынке.",
    primaryImage: "/assets/blog/blog_image_1.jpg",
    slug: "kak-vybrat-pravilnuyu-buhgalterskuyu-programmu-dlya-vashego-biznesa",
    createdAt: new Date(),
  }

  const other_posts: zPostRead[] = [
    {
      id: "1",
      title:
        "Как выбрать правильную бухгалтерскую программу для вашего бизнеса",
      short_description:
        "В современном мире технологий выбор подходящей бухгалтерской программы может значительно упростить вашу работу. В этой статье мы расскажем о ключевых критериях выбора и рассмотрим популярные решения на рынке.",
      content: "Содержание статьи",
      primaryImage: "/assets/blog/blog_image_1.jpg",
      slug: "kak-vybrat-pravilnuyu-buhgalterskuyu-programmu-dlya-vashego-biznesa",
      createdAt: new Date(),
    },
    {
      id: "2",
      title:
        "Как выбрать правильную бухгалтерскую программу для вашего бизнеса",
      short_description:
        "В современном мире технологий выбор подходящей бухгалтерской программы может значительно упростить вашу работу. В этой статье мы расскажем о ключевых критериях выбора и рассмотрим популярные решения на рынке.",
      content: "Содержание статьи",
      primaryImage: "/assets/blog/blog_image_2.jpg",
      slug: "kak-vybrat-pravilnuyu-buhgalterskuyu-programmu-dlya-vashego-biznesa",
      createdAt: new Date(),
    },
    {
      id: "3",
      title:
        "Как выбрать правильную бухгалтерскую программу для вашего бизнеса",
      short_description:
        "В современном мире технологий выбор подходящей бухгалтерской программы может значительно упростить вашу работу. В этой статье мы расскажем о ключевых критериях выбора и рассмотрим популярные решения на рынке.",
      content: "Содержание статьи",
      primaryImage: "/assets/blog/blog_image_3.jpg",
      slug: "kak-vybrat-pravilnuyu-buhgalterskuyu-programmu-dlya-vashego-biznesa",
      createdAt: new Date(),
    },
  ]

  return (
    <div className="container mb-[150px] space-y-[100px]">
      <div className="flex flex-col items-center gap-10 lg:gap-[60px]">
        <Breadcrumb className="self-start">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Блог</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="max-w-[75vw] truncate md:max-w-[55vw]">
                {post.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Title and date */}
        <div className="space-y-[30px] text-center lg:max-w-[800px]">
          <span className="text-sm font-medium leading-[18.2px] text-rose-750">
            {post.createdAt.toLocaleDateString("ru-RU", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <Subheading>{post.title}</Subheading>
        </div>

        {/* Image */}
        <div className="relative h-[218px] w-full overflow-hidden rounded-lg md:h-[300px] lg:h-[400px] xl:h-[500px]">
          <Image
            src={post.primaryImage}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div>{post.content}</div>

        <div className="space-y-10">
          <Button variant="support" size="mobile" className="gap-2">
            Законопроект №123 от 12.01.2022 г
            <ArrowDown className="size-5" />
          </Button>
          <div className="flex justify-center gap-10">
            <WhatsAppColored className="size-8" />
            <TelegramColored className="size-8" />
            <FacebookColored className="size-8" />
            <InstagramColored className="size-8" />
            <TikTokColored className="size-8" />
          </div>
        </div>
      </div>
      <div className="space-y-[30px]">
        <Heading>Другие статьи</Heading>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {other_posts
            .filter(blog => blog.id !== post.id)
            .map(blog => (
              <BlogCard key={blog.id} {...blog} />
            ))}
        </div>
      </div>
    </div>
  )
}
