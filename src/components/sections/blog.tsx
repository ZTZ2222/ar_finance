import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import BlogCard from "@/components/shared/blog-card"
import Heading from "@/components/shared/heading"
import SectionName from "@/components/shared/section-name"
import Subheading from "@/components/shared/subheading"
import { getNormalizedArticles } from "@/server/data-access-layer/article"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function Blog() {
  const sectionData = await getNormalizedSectionById("blog")

  const posts = (await getNormalizedArticles()).slice(0, 3)
  return (
    <section id="blog" className="mb-[100px] space-y-[50px] md:mb-[120px]">
      <div className="container lg:flex lg:justify-between">
        <div className="space-y-[26px] lg:w-[75%]">
          <SectionName>{sectionData?.sectionName}</SectionName>
          <Heading>{sectionData?.heading}</Heading>
          <Subheading>{sectionData?.subheading}</Subheading>
        </div>
        <Button
          variant="core"
          size="mobile"
          className="mt-auto hidden h-fit w-fit px-[30px] lg:inline-flex"
          asChild
        >
          <Link href="/blog">{sectionData?.primaryButton}</Link>
        </Button>
      </div>
      <ScrollArea className="pb-5 lg:container">
        <div className="flex w-max lg:space-x-5">
          {posts.map((post, index) => (
            <BlogCard
              key={post.uid}
              size="sm"
              {...post}
              className={
                index === posts.length - 1 ? "mx-5 lg:mx-0" : "ml-5 lg:ml-0"
              }
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="container lg:hidden">
        <Button variant="core" size="mobile" asChild>
          <Link href="/blog">{sectionData?.primaryButton}</Link>
        </Button>
      </div>
    </section>
  )
}
