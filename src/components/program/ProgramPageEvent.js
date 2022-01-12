import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LongDate from "../common/LongDate"

export default function ProgramPunktEvent({ post }) {
  const { title, informationProgram, featuredImage, slug, uri } = post
  const imageData = getImage(featuredImage.node.localFile)
  const { startdatum, status, extraText, underrubrik, biljettlank } =
    informationProgram
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-between relative">
        {/* Left */}
        <div className=" w-full md:w-4/12 ">
          <Link to={uri}>
            <GatsbyImage
              image={imageData}
              alt={title}
              className=" dark:mix-blend-normal h-full"
            />{" "}
          </Link>
        </div>
        {/* Right */}

        <div className="w-full text-base leading-relaxed bg-white text-black">
          <div className="h-full flex flex-col justify-center">
            <div className="flex flex-row">
              <div className="w-full md:w-3/4 md:border-r-8 pr-4 border-black border-dotted p-4 md:p-8">
                <header className="flex flex-col md:space-y-2">
                  <div className="flex flex-row items-center font-normal tracking-wide ">
                    <div className="">
                      <LongDate dateString={startdatum} />
                    </div>
                    {extraText && (
                      <div className=" uppercase text-brandorange">
                        &nbsp;|&nbsp;
                        {extraText}
                      </div>
                    )}
                  </div>
                  <h3 className="uppercase inline text-2xl md:text-3xl pb-4">
                    <Link to={uri}>
                      <span className="border-b-4 md:border-b-4 border-brandorange hover:border-black dark:hover:border-white hover:text-brandorange transition-all leading-relaxed">
                        {title}
                      </span>
                    </Link>
                  </h3>{" "}
                  {underrubrik && (
                    <div className="font-bold uppercase leading-none pb-2 md:pb-0">
                      {underrubrik}
                    </div>
                  )}{" "}
                </header>
                <p className=" md:text-xl font-normal leading-normal">
                  {informationProgram.kortInfo}
                </p>
              </div>
              <div className="hidden flex-1 md:flex flex-col justify-center items-center text-center">
                <div className="">
                  <div className="">
                    <Link to={biljettlank}>
                      <button className="uppercase  bg-brandpurple  text-white py-2 px-3">
                        Köp biljett
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
