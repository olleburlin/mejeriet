import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LongDate from "../common/LongDate"

export default function ProgramPunktEvent({ post }) {
  const { title, informationProgram, featuredImage, slug } = post
  const imageData = getImage(featuredImage.node.localFile)
  const { startdatum, status } = informationProgram
  return (
    <div className="">
      <Link to={`/program/${slug}`}>
        <div className="flex flex-col md:flex-row justify-between relative">
          {/* Left */}
          <div className=" w-full md:w-4/12 ">
            <GatsbyImage image={imageData} alt={title} className="h-full " />
          </div>
          {/* Right */}

          <div className="w-full md:w-8/12 text-3xl leading-relaxed">
            <div className=" md:p-8 h-full flex flex-col justify-center">
              <div className=" space-y-4">
                <div> </div>
                <header className="flex flex-col justify-center items-start space-y-4">
                  <div className="">
                    {/* <Link to="/">
                      <button className=" font-bold uppercase block w-full h-full ">
                        {status === "Aktivt" || status === null
                          ? "Köp biljett"
                          : status}
                      </button>
                    </Link> */}
                  </div>
                  <div className="flex flex-row gap-1">
                    <div className="">
                      <LongDate dateString={startdatum} />
                    </div>
                  </div>
                  <h3 className="uppercase inline text-5xl ">
                    <span className="border-b-8 border-brandorange hover:border-black hover:text-brandorange transition-all leading-relaxed">
                      {title}
                    </span>
                  </h3>
                </header>
                <p className="">{informationProgram.kortInfo}</p>
                {/* <div className="flex flex-row items-center gap-2">
                  {genre && (
                    <div className="bg-brandorange uppercase text-pink-100 px-2 py-1 font-bold flex-row inline-block">
                      <span>{genre.name}</span>
                    </div>
                  )}
                  {typAvArrangemang !== null &&
                  typAvArrangemang?.name !== "Konsert" ? (
                    <div className="bg-brandteal text-pink-100 uppercase  px-2 py-1 font-bold inline-block">
                      <span>{typAvArrangemang.name}</span>
                    </div>
                  ) : null}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
