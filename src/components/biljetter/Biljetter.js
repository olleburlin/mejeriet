import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getCurrentDate } from "../../utils/getCurrentDate"
import Link from "../common/Link"
export default function Biljetter() {
  const data = useStaticQuery(graphql`
    {
      allWpProgrampunkt(
        sort: { fields: informationProgram___startdatum, order: ASC }
      ) {
        nodes {
          title
          id
          uri
          informationProgram {
            startdatum
            status
            biljettlank
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
  const { title, informationProgram, uri } = post
  const { status, biljettlank, startdatum } = informationProgram
  return (
    <div className="text-sm md:text-base flex flex-row justify-between items-center bg-white  uppercase text-black ">
      <div className="flex flex-row items-baseline space-x-4  p-4 w-full">
        <div className=" ">{startdatum}</div>
        <div className="flex-1 font-heavy md:text-xl">
          <Link to={uri} title={title}>
            <span className="border-b-4 md:border-b-4 border-brandorange hover:border-black dark:hover:border-white hover:text-brandorange transition-all leading-relaxed">
              {title}
            </span>
          </Link>
        </div>
        <div>
          {" "}
          {status !== "Aktivt" && (
            <span className="uppercase text-brandpink text-xs md:text-base">
              {status}
            </span>
          )}{" "}
        </div>
      </div>

      <div className="  px-4 py-2 border-l-4 border-black border-dotted">
        {" "}
        {biljettlank && status !== "Inställt" ? (
          <div className="py-1">
            <Link to={biljettlank}>
              <button className="whitespace-nowrap bg-brandpurple text-white rounded-sm px-3 py-2">
                Köp biljett
              </button>
            </Link>
          </div>
        ) : (
          <div className="py-1">
            <button className="whitespace-nowrap cursor-not-allowed bg-brandpurple bg-opacity-30 text-white rounded-sm px-3 py-2">
              Köp biljett
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
