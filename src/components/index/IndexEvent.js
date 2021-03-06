import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LongDate from "../common/LongDate"

export default function IndexEvent({ post }) {
  const { title, informationProgram, featuredImage, slug } = post
  const { startdatum } = informationProgram
  const imageData = getImage(featuredImage?.node.localFile)
  return (
    <div className="group">
      <Link to={`/program/${slug}`}>
        <div className="flex flex-col justify-between w-full  relative">
          {/* Left */}
          <div className="flex-none w-full  md:h-auto aspect-h-9 aspect-w-16 -mb-2 md:-mb-0 order-2 ">
            <GatsbyImage image={imageData} alt={title} className="h-full  " />
          </div>
          {/* Right */}
          <div className="absolute flex items-center h-full ">
            <div className=" p-4">
              <div className="md:text-lg xl:text-xl space-y-2">
                <header className="flex flex-col justify-start items-start space-y-2">
                  <div className="bg-white dark:bg-brandpurple text-black px-2 py-1 font-bold flex flex-row text-sm">
                    <span>
                      <LongDate dateString={startdatum} />
                    </span>
                  </div>
                  <h3 className="uppercase lg:text-2xl xl:text-4xl text-white ">
                    {title}
                  </h3>
                </header>
                <p className="text-white w-10/12 leading-normal">
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
        </div>
      </Link>
    </div>
  )
}
