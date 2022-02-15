import React from "react"
import Link from "../common/Link"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LongDate from "../common/LongDate"

export default function ProgramPunktEvent({ post }) {
  const { title, informationProgram, featuredImage, uri } = post
  const imageData = getImage(featuredImage?.node.localFile)
  const { genre, startdatum, status, underrubrik, biljettlank } =
    informationProgram
  const statuses = ["Inställt", "Slutsålt", "Fri entré"]
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left */}
        <div className="flex-none w-full md:w-80 relative overflow-hidden">
          <Link to={uri} title={title} className="h-full">
            <GatsbyImage
              image={imageData}
              alt={title}
              className=" dark:mix-blend-normal h-full w-full gatsby-image-fix"
            />{" "}
          </Link>
        </div>
        {/* Right */}

        <div className="text-base md:text-xl leading-relaxed bg-white text-black flex-grow ">
          <div className=" h-full flex flex-col justify-center ">
            <div className="flex flex-row flex-grow ">
              <div className="relative flex flex-col justify-center w-full px-4 py-4 md:px-8 ">
                <div className="space-y-2">
                  <header className="font-normal tracking-wide leading-none text-base">
                    <div className="inline">
                      <LongDate dateString={startdatum} />
                    </div>
                    {status !== "Aktivt" && status ? (
                      <span>&nbsp;|&nbsp;</span>
                    ) : (
                      ""
                    )}
                    {status !== "Aktivt" && (
                      <span className="uppercase text-brandpink">{status}</span>
                    )}
                  </header>
                  <h3 className="uppercase  text-2xl md:text-3xl relative -top-1 pb-1">
                    <Link to={uri}>
                      <span className="border-b-4 md:border-b-4 border-brandorange hover:border-black dark:hover:border-white hover:text-brandorange transition-all leading-relaxed">
                        {title}
                      </span>
                    </Link>
                  </h3>{" "}
                  {underrubrik && (
                    <div className="font-bold uppercase leading-none md:w-9/12">
                      {underrubrik}
                    </div>
                  )}{" "}
                  <div className="flex flex-row justify-start">
                    {informationProgram.kortInfo && (
                      <div className="w-9/12 ">
                        <p className="font-normal tracking-normal leading-tight md:pr-4">
                          {informationProgram.kortInfo}
                        </p>
                      </div>
                    )}
                    <div className="w-3/12  flex-none flex justify-end ">
                      {biljettlank && !statuses.includes(status) && (
                        <Link to={biljettlank}>
                          <button className="uppercase  bg-brandpurple whitespace-nowrap text-lg text-white py-2 px-3">
                            Köp biljett
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="hidden flex-1 md:flex flex-col justify-center items-center text-center px-4">
                <div className="">
                  <div className="">
                    {biljettlank && !statuses.includes(status) && (
                      <Link to={biljettlank}>
                        <button className="uppercase  bg-brandpurple whitespace-nowrap  text-white py-2 px-3">
                          Köp biljett
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
