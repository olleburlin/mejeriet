import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import IndexMiniEvent from "./IndexMiniEvent"

export default function IndexMiniEvents() {
  const data = useStaticQuery(graphql`
    {
      allWpProgrampunkt(
        sort: { fields: informationProgram___startdatum, order: ASC }
      ) {
        nodes {
          title
          slug
          id
          informationProgram {
            borjar
            oppnar
            startdatum
          }
        }
      }
    }
  `)
  const posts = data.allWpProgrampunkt.nodes

  return (
    <div className="bg-brandpurple dark:bg-opacity-75 p-4 text-white">
      <div>
        <h5 className="uppercase text-2xl mb-2">Kommande evenemang</h5>
      </div>
      {posts.map(post => {
        return (
          <IndexMiniEvent post={post} key={post.id}>
            {post.title}
          </IndexMiniEvent>
        )
      })}
      <Link to="/program">
        <button className="mt-4 text-xs bg-white text-brandpurple px-2 py-1">
          Visa alla
        </button>
      </Link>
    </div>
  )
}
