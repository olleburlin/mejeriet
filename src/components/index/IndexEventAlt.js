import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LongDate from "../common/LongDate"

export default function IndexEventAlt({ post }) {
  const { title, informationProgram, featuredImage, slug } = post
  const imageData = getImage(featuredImage.node.localFile)
  const { startdatum, status } = informationProgram
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-between relative">
        <div className=" w-full md:w-5/12 ">
          <Link to={`/program/${slug}`}>
            <GatsbyImage
              image={imageData}
              alt={title}
              className="h-full grayscale mix-blend-multiply dark:mix-blend-normal"
            />{" "}
          </Link>
        </div>

        <div className="w-full md:w-7/12 text-xl leading-relaxed text-right">
          <div className=" md:px-8 h-full flex flex-col justify-center ">
            <div className="">
              <header className="flex flex-col justify-center pt-4 md:pt-0">
                <div className="">
                  {/* <Link to="/">
                      <button className=" font-bold uppercase block w-full h-full ">
                        {status === "Aktivt" || status === null
                          ? "Köp biljett"
                          : status}
                      </button>
                    </Link> */}
                </div>
                <div className="text-base md:text-xl">
                  <LongDate dateString={startdatum} />
                </div>
                <h3 className="uppercase inline text-2xl md:text-3xl pb-4">
                  <Link to={`/program/${slug}`}>
                    <span className="border-b-4 border-brandorange hover:border-black dark:hover:border-white hover:text-brandorange transition-all leading-relaxed">
                      {title}
                    </span>
                  </Link>
                </h3>{" "}
              </header>
              <p className=" text-base md:text-xl tracking-tight">
                {informationProgram.kortInfo}
              </p>
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
    </div>
  )
}
