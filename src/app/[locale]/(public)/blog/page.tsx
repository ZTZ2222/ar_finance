import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
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
    <div className="container mb-[150px] space-y-[50px]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Главная</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Блог</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-[26px]">
        <Heading>Блог</Heading>
        <Subheading>Последние статьи</Subheading>
        <Paragraph>
          Здесь вы найдете последние новости, полезные советы и экспертные
          мнения по вопросам бухгалтерии и финансов. Мы делимся знаниями и
          опытом, чтобы помочь вашему бизнесу расти и процветать.
        </Paragraph>
      </div>
      <div className="space-y-10">
        {posts.map(post => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  )
}
