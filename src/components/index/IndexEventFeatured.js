import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LongDate from "../common/LongDate"

export default function IndexEventFeatured({ posts }) {
  const featuredEvents = posts.missaInte.utvaltArrangemang[0].programmpunkt

  return (
    <div className="relative flex flex-col w-full bg-gradient-to-t from-brandpink to-brandorange  mb-4 text-white">
      {featuredEvents.map(event => {
        return <FeaturedEvent key={event.id} event={event} />
      })}
    </div>
  )
}

function FeaturedEvent({ event }) {
  const { title, informationProgram, featuredImage, slug } = event
  const imageData = getImage(featuredImage.node.localFile)
  return (
    <>
      <div className="w-full border-transparent border-2  p-2 md:p-4 text-white ">
        <Link to={`/program/${slug}`}>
          <div className="relative">
            <div className="relative">
              <GatsbyImage
                image={imageData}
                alt={title}
                className="object-cover w-full block"
              />
            </div>
            <div>
              <div className="absolute top-0">
                <div className="bg-brandorange  font-bold pr-2 py-2 md:px-3 md:py-3 uppercase text-xs md:text-2xl">
                  Missa inte
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex-col justify-between  px-4 pb-4 space-y-2 md:text-xl ">
        <div className="space-y-2">
          <header className="flex flex-col  justify-between">
            <div className="text-base md:text-xl">
              <LongDate dateString={informationProgram.startdatum} />
            </div>

            <Link to={`/program/${slug}`}>
              {" "}
              <h3 className="uppercase text-2xl md:text-4xl">{title}</h3>
            </Link>
          </header>
          <p className=" text-base md:text-xl tracking-tight leading-none md:w-10/12 md:leading-normal">
            {informationProgram.kortInfo}
          </p>
        </div>
      </div>
    </>
  )
}
