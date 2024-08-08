"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import BlogCard from "@/components/shared/blog-card"
import Spinner from "@/components/shared/spinner"
import { getNormalizedArticles } from "@/server/data-access-layer/article"
import type { NormalizedArticleRead } from "@/types/blog.schema"

type Props = {
  initialArticles: NormalizedArticleRead[]
  className?: string
}

export default function InfiniteScroll({ initialArticles, className }: Props) {
  const [articles, setArticles] =
    useState<NormalizedArticleRead[]>(initialArticles)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(2)
  const [hasMore, setHasMore] = useState(true)
  const loaderRef = useRef(null)

  const loadMoreArticles = useCallback(async () => {
    if (!hasMore) return

    setLoading(true)

    const newArticles = await getNormalizedArticles(page, undefined, false)

    if (newArticles.length > 0) {
      setArticles(prevArticles => [...prevArticles, ...newArticles])
      setPage(prevPage => prevPage + 1)
    } else {
      setHasMore(false)
    }

    setLoading(false)
  }, [page, hasMore])

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !loading && hasMore) {
        loadMoreArticles()
      }
    }, options)

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current)
      }
    }
  }, [loadMoreArticles, loading, hasMore])
  return (
    <div
      className={cn(
        "grid gap-20 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-y-[60px]",
        className,
      )}
    >
      {articles.map(article => (
        <BlogCard key={article.uid} {...article} />
      ))}
      <div
        ref={loaderRef}
        className="col-span-full flex items-center justify-center"
      >
        {loading && <Spinner className="h-[200px]" />}
      </div>
    </div>
  )
}
