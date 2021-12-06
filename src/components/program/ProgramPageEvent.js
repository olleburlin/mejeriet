import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LongDate from "../common/LongDate"

export default function ProgramPunktEvent({ post }) {
  const { title, informationProgram, featuredImage, slug } = post
  const imageData = getImage(featuredImage.node.localFile)
  const { startdatum, genre, typAvArrangemang, samarbetspartner, status } =
    informationProgram
  return (
    <div className="">
      <Link to={`/program/${slug}`}>
        <div className="flex flex-col md:flex-row justify-between relative">
          {/* Left */}
          <div className=" w-full md:w-5/12 ">
            <GatsbyImage image={imageData} alt={title} className="h-full " />
          </div>
          {/* Right */}

          <div className="w-7/12">
            <div className=" p-8 h-full flex flex-col justify-center">
              <div className="text-2xl md:text-lg xl:text-xl space-y-4">
                <div> </div>
                <header className="flex flex-col justify-center items-start space-y-4">
                  <div className="">
                    <Link to="/">
                      <button className="text-brandteal border-b-4 border-brandteal  font-bold uppercase block w-full h-full hover:opacity-75 transition-all">
                        {status === "Aktivt" || status === null
                          ? "Köp biljett"
                          : status}
                      </button>
                    </Link>
                  </div>
                  <div className="flex flex-row gap-1">
                    <div className="">
                      <LongDate dateString={startdatum} />
                    </div>
                  </div>
                  <h3 className="uppercase lg:text-2xl xl:text-4xl ">
                    {title}
                  </h3>
                </header>
                <p className="leading-none ">{informationProgram.kortInfo}</p>
                <div className="flex flex-row items-center gap-2">
                  {genre && (
                    <div className="bg-brandorange uppercase text-pink-100 px-2 py-1 font-bold flex-row text-xs inline-block">
                      <span>{genre.name}</span>
                    </div>
                  )}
                  {typAvArrangemang !== null &&
                  typAvArrangemang?.name !== "Konsert" ? (
                    <div className="bg-brandteal text-pink-100 uppercase  px-2 py-1 font-bold inline-block text-xs">
                      <span>{typAvArrangemang.name}</span>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
