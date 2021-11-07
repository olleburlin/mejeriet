import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LongDate from "../common/LongDate"

export default function ProgramPunktEvent({ post }) {
  const { title, informationProgram, featuredImage, slug } = post
  const imageData = getImage(featuredImage.node.localFile)
  const { startdatum, genre, typAvArrangemang } = informationProgram
  return (
    <div className="">
      <Link to={`/program/${slug}`}>
        <div className="flex flex-col justify-between w-full  relative">
          {/* Left */}
          <div className="flex-none w-full  md:h-auto aspect-h-9 aspect-w-16 -mb-2 md:-mb-0 order-2 bg-black">
            <GatsbyImage
              image={imageData}
              alt={title}
              className="h-full opacity-60"
            />
          </div>
          {/* Right */}
          <div className="absolute flex items-center h-full ">
            <div className=" p-4">
              <div className="text-2xl md:text-lg xl:text-xl space-y-2">
                <header className="flex flex-col justify-start items-start space-y-2">
                  <div className="flex flex-row gap-1">
                    <div className="bg-brandpink text-white px-2 py-1 font-bold flex flex-row text-xs">
                      <span>
                        <LongDate dateString={startdatum} />
                      </span>
                    </div>
                    {genre && (
                      <div className="bg-brandorange uppercase text-white px-2 py-1 font-bold flex flex-row text-xs">
                        <span>{genre.name}</span>
                      </div>
                    )}
                    {typAvArrangemang && (
                      <div className="bg-brandteal uppercase text-white px-2 py-1 font-bold flex flex-row text-xs">
                        <span>{typAvArrangemang.name}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="uppercase lg:text-2xl xl:text-4xl text-white ">
                    {title}
                  </h3>
                </header>
                <p className="text-white w-10/12 leading-none text-xl">
                  {informationProgram.kortInfo}
                </p>
              </div>
              <div className="w-full h-full md:w-24 flex-none hidden">
                <Link to="/">
                  <button className="bg-brandpink text-white font-bold uppercase block w-full h-full py-2 ">
                    Köp <br className="hidden md:block" />
                    biljett
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
