import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import IndexMiniEvent from "./IndexMiniEvent"

export default function IndexMiniEvents() {
  const data = useStaticQuery(graphql`
    {
      allWpProgrampunkt(
        sort: { fields: informationProgram___startdatum, order: ASC }
        limit: 8
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
    <div className="bg-brandorange dark:bg-brandorange  p-4 text-white">
      <div>
        <h5 className="uppercase text-2xl mb-2">Närmsta evenemang</h5>
      </div>
      <div className="space-y-1">
        {posts.map(post => {
          return (
            <IndexMiniEvent post={post} key={post.id}>
              {post.title}
            </IndexMiniEvent>
          )
        })}
      </div>
      {/* <Link to="/program">
        <button className="mt-4 bg-white text-brandpink py-2 px-3">
          Visa alla
        </button>
      </Link> */}
    </div>
  )
}
