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
        <div className="flex flex-col md:flex-row justify-between relative">
          {/* Left */}
          <div className=" w-full md:w-1/3 ">
            <GatsbyImage image={imageData} alt={title} className="h-full " />
          </div>
          {/* Right */}
          <div className="absolute  items-center h-full hidden">
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
          <div className="w-2/3 ">
            <div className=" p-8 h-full flex flex-col justify-center">
              <div className="text-2xl md:text-lg xl:text-xl space-y-2">
                <header className="flex flex-col justify-center items-start space-y-2">
                  <div className="flex flex-row gap-1">
                    <div className="">
                      <LongDate dateString={startdatum} />
                    </div>
                  </div>
                  <h3 className="uppercase lg:text-2xl xl:text-4xl ">
                    {title}
                  </h3>
                </header>
                <p className="w-10/12 leading-none ">
                  {informationProgram.kortInfo}
                </p>
                <div>
                  {genre && (
                    <div className="bg-brandorange uppercase text-pink-100 px-2 py-1 font-bold flex-row text-xs inline-block">
                      <span>{genre.name}</span>
                    </div>
                  )}
                  {typAvArrangemang && typAvArrangemang.name !== "konsert" ? (
                    <div className="bg-brandteal text-pink-100 uppercase  px-2 py-1 font-bold inline-block text-xs">
                      <span>{typAvArrangemang.name}</span>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="w-full h-full md:w-24 flex-none hidden">
                <Link to="/">
                  <button className="bg-brandpink  font-bold uppercase block w-full h-full py-2 ">
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
