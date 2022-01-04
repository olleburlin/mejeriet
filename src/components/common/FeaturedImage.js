import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function FeaturedImage({ image }) {
  const imageData = getImage(image?.node.localFile.childImageSharp)

  return (
    <div className="px-2 -mr-2 md:-mr-0 md:mx-8">
      <div className="relative z-0 ">
        <div className="before:absolute before:bottom-2 before:right-3 md:before:bottom-5 md:before:right-6  before:z-10 before:mix-blend-multiply  before:w-full before:h-full before:bg-orange-400 dark:before:bg-brandpurple  dark:before:bg-opacity-70 ">
          <GatsbyImage image={imageData} alt="Featured" className="grayscale" />
        </div>
      </div>
    </div>
  )
}
