import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function FeaturedImage({ image }) {
  const imageData = getImage(image?.node.localFile.childImageSharp)

  return (
    <div className="relative">
      <div className="before:absolute before:bottom-2 before:right-3 md:before:bottom-3 md:before:right-3 before:z-0   before:w-full before:h-full before:bg-brandorange ">
        <div className="relative">
          <div className="h-full w-full bg-brandlightpink mix-blend-normal ">
            <GatsbyImage
              image={imageData}
              alt="Featured"
              className="grayscale brightness-110 mix-blend-multiply "
            />
          </div>
        </div>
      </div>
    </div>
  )
}
