import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LongDate from "../common/LongDate"

export default function ProgramPunktEvent({ post }) {
  const { title, informationProgram, featuredImage, slug } = post
  const imageData = getImage(featuredImage.node.localFile)
  const { startdatum, status, extraText, underrubrik, biljettlank } =
    informationProgram
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-between relative">
        {/* Left */}
        <div className=" w-full md:w-4/12 ">
          <Link to={`/program/${slug}`}>
            <GatsbyImage
              image={imageData}
              alt={title}
              className="grayscale mix-blend-multiply dark:mix-blend-normal h-full"
            />{" "}
          </Link>
        </div>
        {/* Right */}

        <div className="w-full text-xl leading-relaxed bg-pink-100">
          <div className="h-full flex flex-col justify-center">
            <div className="flex flex-row">
              <div className="w-full md:w-3/4 border-r-8 pr-4 border-brandlightpink border-dotted  p-8">
                <header className="flex flex-col justify-center items-start">
                  <div className="flex flex-row items-center  ">
                    <div className="text-base md:text-xl">
                      <LongDate dateString={startdatum} />
                    </div>
                    {extraText && (
                      <div className=" uppercase">
                        &nbsp;|&nbsp;
                        {extraText}
                      </div>
                    )}
                  </div>
                  <h3 className="uppercase inline text-2xl md:text-3xl pb-4">
                    <Link to={`/program/${slug}`}>
                      <span className="border-b-4 md:border-b-4 border-brandorange hover:border-black dark:hover:border-white hover:text-brandorange transition-all leading-relaxed">
                        {title}
                      </span>
                    </Link>
                  </h3>{" "}
                  {underrubrik && (
                    <div className="font-bold">{underrubrik}</div>
                  )}{" "}
                </header>
                <p className="text-base md:text-xl">
                  {informationProgram.kortInfo}
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center text-center">
                <div className="">
                  <div className="">
                    <Link to={biljettlank}>
                      <button className="uppercase  bg-brandteal text-white py-2 px-3">
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
