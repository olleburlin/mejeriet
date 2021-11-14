import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LongDate from "../common/LongDate"

export default function IndexEventFeatured({ post }) {
  const { title, informationProgram, featuredImage, slug } = post

  const imageData = getImage(featuredImage.node.localFile)
  return (
    <div className="flex flex-col w-full bg-gradient-to-t from-brandpink to-brandorange dark:from-brandpurple mb-4 text-white">
      {/* Left */}
      <div className="w-full border-transparent border-2  p-4">
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
                <div className="bg-brandorange font-bold pr-2 py-2 md:px-3 md:py-3 uppercase text-xs md:text-2xl">
                  Missa inte
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      {/* Right */}
      <Link to={`/program/${slug}`}>
        <div className="flex-col justify-between  px-4 pb-4 space-y-2 text-xl text-pink-100">
          <div>
            <header className="flex flex-col  justify-between">
              <div className="flex flex-row   font-bold">
                <div className="">
                  <LongDate dateString={informationProgram.startdatum} />
                </div>
              </div>
              <h3 className="uppercase text-4xl">{title}</h3>
            </header>

            {/* <p className="mb-2 mt-1">{informationProgram.kortInfo}</p> */}
          </div>
          <div className="hidden flex-row space-x-4">
            <div>
              <Link to={`/program/${slug}`}>
                <button className="bg-white text-black py-1 px-2">
                  Läs mer
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
