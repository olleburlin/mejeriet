import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getCurrentDate } from "../../utils/getCurrentDate"
export default function Biljetter() {
  const data = useStaticQuery(graphql`
    {
      allWpProgrampunkt(
        sort: { fields: informationProgram___startdatum, order: ASC }
      ) {
        nodes {
          title
          id
          informationProgram {
            startdatum
            status
          }
        }
      }
    }
  `)
  const posts = data.allWpProgrampunkt.nodes
  return (
    <div className="w-full mb-16">
      <div className="text-center mt-4 mb-8">
        <button className="bg-brandpurple text-lg px-3 py-2 text-white rounded-sm">
          <a href="https://www.tickster.com/sv/events/nm8kdtw3b485ram/2045-01-01/presentkort">
            Köp presentkort
          </a>
        </button>
      </div>
      <div className="divide-y-8 divide-black">
        {posts
          .filter(post => post.informationProgram.startdatum > getCurrentDate())
          .map(post => {
            return <Biljett key={post.id} post={post} />
          })}
      </div>
    </div>
  )
}

function Biljett({ post }) {
  const { title, informationProgram } = post
  return (
    <div className="text-base flex flex-row justify-between items-center bg-white  uppercase text-black ">
      <div className="flex flex-row space-x-4  p-4 w-full">
        <div className=" text-brandorange ">
          {informationProgram.startdatum}
        </div>
        <div className="flex-1 font-heavy ">{title}</div>
        <div>
          {" "}
          {informationProgram.status !== "Aktivt" && (
            <span className="uppercase text-brandpink">
              {informationProgram.status}
            </span>
          )}{" "}
        </div>
      </div>

      <div className="flex-none  p-4 border-l-4 border-black border-dotted">
        {" "}
        <button className="bg-brandpurple text-white py-1 px-2 text-sm rounded-sm">
          Köp biljett
        </button>
      </div>
    </div>
  )
}
