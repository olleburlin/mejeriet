import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LongDate from "../common/LongDate"

export default function IndexEventFeatured({ post }) {
  const { title, informationProgram, featuredImage, slug } = post

  const imageData = getImage(featuredImage.node.localFile)
  return (
    <div className="flex flex-col w-full bg-gradient-to-t from-brandpink to-brandorange dark:from-brandpurple mb-2 text-white">
      {/* Left */}
      <div className="w-full border-transparent border-2  p-2">
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
              <div className="absolute top-0 bg-brandorange">
                <div className="font-bold pr-2 py-2 md:px-3 md:py-3 uppercase text-xs md:text-2xl">
                  Missa inte
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      {/* Right */}
      <div className="hidden flex-grow  flex-col justify-between  px-4 pb-4 space-y-2">
        <header className="flex flex-row  justify-between">
          <div className="flex flex-row  text-brandpink font-bold">
            <div className="">
              <LongDate dateString={informationProgram.startdatum} />
            </div>
            <span>&nbsp;&bull;&nbsp;</span>
            <div>19:00</div>
          </div>
        </header>
        <div>
          <Link to={`/program/${slug}`}>
            <h3 className="uppercase text-4xl">{title}</h3>
          </Link>
          <p className="mb-2 mt-1 text-lg">{informationProgram.kortInfo}</p>
        </div>
        <div className="flex flex-row space-x-4">
          <div>
            <Link to={`/program/${slug}`}>
              <button className="bg-white text-black py-1 px-2">Läs mer</button>
            </Link>
          </div>
          <div>
            <Link to="/">
              <button className="bg-brandteal py-1 px-2 ">Köp biljett</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
