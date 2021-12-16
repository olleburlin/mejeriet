import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
    <div className="w-full ">
      <div className="text-center mt-4 mb-8">
        <button className="bg-brandteal text-lg px-3 py-2 text-white rounded-sm">
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

function Biljett({ post }) {
  const { title, informationProgram } = post
  return (
    <div className="text-base flex flex-row justify-between items-center space-x-4  p-4 uppercase even:bg-brandpink dark:even:bg-brandpurple even:bg-opacity-10 dark:even:bg-opacity-30">
      <div className="flex-none ">{informationProgram.startdatum}</div>

      <div className="flex-1 font-heavy">{title}</div>
      <div className="flex-none">
        {" "}
        <button className="bg-brandteal text-white py-1 px-2 text-sm rounded-sm">
          Köp biljett
        </button>
      </div>
    </div>
  )
}
