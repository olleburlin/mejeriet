import React from "react"
import NewsItem from "./NewsItem"

export default function News({ posts }) {
  return (
    <section className="max-w-4xl mx-auto">
      {posts.map(post => {
        return <NewsItem key={post.id} post={post} />
      })}
    </section>
  )
}
