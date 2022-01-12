import React from "react"
import Link from "../common/Link"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LongDate from "../common/LongDate"

export default function FeaturedEvent({ event }) {
  const { title, informationProgram, featuredImage, uri } = event
  const imageData = getImage(featuredImage.node.localFile)
  return (
    <>
      <div className="p-2 md:p-3  inset-0 h-full  bg-gradient-to-t from-brandorange to-brandpurple via-brandpink/50 flex flex-col justify-end    space-y-2 md:text-xl ">
        <Link to={uri} title={title} className="relative z-40">
          <div className="">
            <div className="relative">
              <div className="">
                <GatsbyImage
                  image={imageData}
                  alt={title}
                  className="object-cover relative"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-between ">
                <div className=""></div>
                <div className="relative w-full bg-gradient-to-t from-gray-900 to-transparent">
                  <div className="relative space-y-2 p-2 md:p-4">
                    <div className="text-base md:text-xl ">
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
