import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function IndexEvent({ post }) {
  const { title, informationProgram, featuredImage, slug } = post

  const imageData = getImage(featuredImage.node.localFile)
  return (
    <div className="my-8">
      <Link to={`/program/${slug}`}>
        <div className="flex flex-col justify-between w-full mb-4 relative">
          {/* Left */}
          <div className="flex-none w-full  md:h-auto aspect-h-9 aspect-w-16 -mb-2 md:-mb-0 order-2 bg-black">
            <GatsbyImage
              image={imageData}
              alt={title}
              className="h-full opacity-80"
            />
          </div>
          {/* Right */}
          <div className="absolute flex p-8 h-full ">
            <div>
              <div className=" text-xl">
                <header className="flex flex-col justify-start items-start space-y-2">
                  <div className="bg-brandpink text-white p-2 flex flex-row text-sm">
                    <span>{informationProgram.startdatum}</span>
                  </div>
                  <h3 className="uppercase text-5xl text-white ">{title}</h3>
                </header>
                <p className="text-white hidden">
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
