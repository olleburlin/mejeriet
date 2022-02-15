import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Link from "../common/Link"
import { info } from "autoprefixer"
import LongDate from "../common/LongDate"
export default function DuKanskeGillar({ events }) {
  return (
    <div className="grid md:grid-cols-3 gap-4 md:gap-8 auto-cols-auto">
      {events?.map(event => {
        return <Event key={event.id} event={event} />
      })}
    </div>
  )
}

function Event({ event }) {
  const { title, featuredImage, informationProgram, uri } = event
  const { kortInfo, startdatum } = informationProgram
  return (
    <div className="bg-white shadow-sm">
      <Link to={uri}>
        <div className="w-full text-base font-normal ">
          <GatsbyImage
            image={getImage(featuredImage?.node.localFile.childImageSharp)}
            alt={title}
          />
          <div className=" text-black p-4 space-y-1">
            <div>
              {" "}
              <LongDate dateString={startdatum} />
            </div>
            <h5 className="uppercase font-bold text-base md:text-lg relative -top-1 pb-1">
              {" "}
              <span className="border-b-2 md:border-b-4 border-brandorange hover:border-black dark:hover:border-white hover:text-brandorange transition-all leading-relaxed">
                {title}
              </span>
            </h5>
            <div>
              <p className="">{kortInfo}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
