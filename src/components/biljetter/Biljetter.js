import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Biljett from "./Biljett"

export default function Biljetter() {
  const data = useStaticQuery(graphql`
    {
      allWpProgrampunkt(
        sort: { fields: informationProgram___startdatum, order: ASC }
      ) {
        nodes {
          title
          informationProgram {
            startdatum
          }
        }
      }
    }
  `)
  const posts = data.allWpProgrampunkt.nodes
  return (
    <div className="w-full text-pink-100">
      <div className="text-center my-4">
        <button className="bg-brandteal text-lg px-3 py-2">
          <a href="https://www.tickster.com/sv/events/nm8kdtw3b485ram/2045-01-01/presentkort">
            Köp presentkort
          </a>
        </button>
      </div>
      {posts.map(post => {
        return <Biljett key={post.id} post={post} />
      })}
    </div>
  )
}
