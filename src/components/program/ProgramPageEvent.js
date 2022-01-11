import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LongDate from "../common/LongDate"

export default function ProgramPunktEvent({ post }) {
  const { title, informationProgram, featuredImage, slug } = post
  const imageData = getImage(featuredImage.node.localFile)
  const { startdatum, status, extraText, underrubrik } = informationProgram
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-between relative">
        {/* Left */}
        <div className=" w-full md:w-4/12 ">
          <Link to={`/program/${slug}`}>
            <GatsbyImage
              image={imageData}
              alt={title}
              className="grayscale mix-blend-multiply dark:mix-blend-normal"
            />{" "}
          </Link>
        </div>
        {/* Right */}

        <div className="w-full md:w-8/12 text-xl leading-relaxed">
          <div className=" md:px-8 h-full flex flex-col justify-center">
            <div className="">
              <header className="flex flex-col justify-center items-start pt-4 md:pt-0">
                <div className="">
                  {/* <Link to="/">
                      <button className=" font-bold uppercase block w-full h-full ">
                        {status === "Aktivt" || status === null
                          ? "Köp biljett"
                          : status}
                      </button>
                    </Link> */}
                </div>
                {extraText && (
                  <div className="text-brandorange uppercase">{extraText}</div>
                )}{" "}
                <div className="text-base md:text-xl">
                  <LongDate dateString={startdatum} />
                </div>
                <h3 className="uppercase inline text-2xl md:text-4xl pb-4">
                  <Link to={`/program/${slug}`}>
                    <span className="border-b-4 md:border-b-8 border-brandorange hover:border-black dark:hover:border-white hover:text-brandorange transition-all leading-relaxed">
                      {title}
                    </span>
                  </Link>
                </h3>{" "}
                {underrubrik && <div className="font-bold">{underrubrik}</div>}{" "}
              </header>
              <p className="text-base md:text-xl">
                {informationProgram.kortInfo}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
