import React from "react"
import { getArticleById } from "@/server/data-access-layer/article"
import UpdateArticleForm from "./form"

type Props = {
  params: {
    requestId: string
  }
}

export default async function RequestEditPage({ params }: Props) {
  const article = await getArticleById(Number(params.requestId))
  if (!article)
    return (
      <div className="p-10 text-center text-2xl text-red-500">
        Article {params.requestId} not found
      </div>
    )
  return <UpdateArticleForm article={article} />
}
