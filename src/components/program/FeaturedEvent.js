import React from "react"
import Link from "../common/Link"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LongDate from "../common/LongDate"

export default function FeaturedEvent({ event }) {
  const { title, informationProgram, featuredImage, uri } = event
  const imageData = getImage(featuredImage.node.localFile)
  return (
    <>
      <div className="p-2 md:p-4   bg-gradient-to-b from-brandorange to-brandpink flex flex-col justify-end    space-y-2 md:text-xl ">
        <Link to={uri} title={title} className="relative z-40">
          <div className="">
            <div className="relative">
              <div className="block md:hidden z-30 bg-brandorange pb-2 uppercase text-lg right-0 text-right font tracking-wide font-heavy">
                Missa inte
              </div>
              <div className="">
                <GatsbyImage
                  image={imageData}
                  alt={title}
                  className="object-cover relative opacity-90"
                />
              </div>
              <div className="md:absolute inset-0 flex flex-col justify-between ">
                <div className=""></div>
                <div className="relative w-full md:bg-gradient-to-t md:from-black to-transparent">
                  <div className="relative md:space-y-2 pt-2 md:p-4">
                    <div className="text-base md:text-xl font-normal md:font-bold">
                      <LongDate dateString={informationProgram.startdatum} />
                    </div>{" "}
                    <h2 className="uppercase text-xl md:text-6xl relative">
                      {title}
                    </h2>
                    <p className="hidden md:block text-base md:text-xl  md:w-10/12">
                      {informationProgram.kortInfo}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
