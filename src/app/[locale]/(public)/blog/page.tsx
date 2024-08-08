import { getTranslations } from "next-intl/server"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Heading from "@/components/shared/heading"
import InfiniteScroll from "@/components/shared/infinite-scroll"
import SectionName from "@/components/shared/section-name"
import Subheading from "@/components/shared/subheading"
import { getNormalizedArticles } from "@/server/data-access-layer/article"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function Blog() {
  const t = await getTranslations()
  const sectionData = await getNormalizedSectionById("blog")
  const posts = await getNormalizedArticles()

  return (
    <div className="container mb-[150px] space-y-[50px] lg:space-y-[60px]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              {t("Components.Breadcrumb.home")}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{t("Components.Breadcrumb.blog")}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-[26px]">
        <SectionName>{sectionData?.sectionName}</SectionName>
        <Heading>{sectionData?.heading}</Heading>
        <Subheading>{sectionData?.subheading}</Subheading>
      </div>
      <InfiniteScroll initialArticles={posts} />
    </div>
  )
}
