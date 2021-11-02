import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import IndexNewsItem from "./IndexNewsItem"

export default function IndexNews() {
  const data = useStaticQuery(graphql`
    {
      allWpPost(limit: 5) {
        nodes {
          title
          id
          date(formatString: "YYYYMMDD")
          slug
        }
      }
    }
  `)
  const posts = data.allWpPost.nodes
  return (
    <div className="bg-brandpurple dark:bg-opacity-75 text-white p-4">
      <div>
        <h5 className="uppercase text-2xl">Aktuellt</h5>
      </div>
      {posts.map(post => {
        return <IndexNewsItem key={post.id} post={post} />
      })}
      <button className="text-xs mt-4 bg-white text-brandpurple px-2 py-1">
        Visa alla
      </button>
    </div>
  )
}
