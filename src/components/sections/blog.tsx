import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import BlogCard from "@/components/shared/blog-card"
import Heading from "@/components/shared/heading"
import Paragraph from "@/components/shared/paragraph"
import Subheading from "@/components/shared/subheading"
import type { zPostRead } from "@/types/post.schema"

export default async function Blog() {
  const posts: zPostRead[] = [
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
    <section id="blog" className="mb-[100px] space-y-[50px]">
      <div className="container space-y-[26px]">
        <Heading>Блог</Heading>
        <Subheading>Последние статьи</Subheading>
        <Paragraph>
          Здесь вы найдете последние новости, полезные советы и экспертные
          мнения по вопросам бухгалтерии и финансов. Мы делимся знаниями и
          опытом, чтобы помочь вашему бизнесу расти и процветать.
        </Paragraph>
      </div>
      <ScrollArea className="pb-5 pl-4 xl:container">
        <div className="flex w-max space-x-5">
          {posts.map(post => (
            <BlogCard key={post.id} size="sm" {...post} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="container">
        <Button variant="core" size="mobile" asChild>
          <Link href="/blog">Смотреть все статьи</Link>
        </Button>
      </div>
    </section>
  )
}
