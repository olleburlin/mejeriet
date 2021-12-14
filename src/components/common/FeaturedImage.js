import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function FeaturedImage({ image }) {
  const imageData = getImage(image?.node.localFile.childImageSharp)

  return (
    <div className="relative z-0">
      <div className="before:absolute before:bottom-5 before:right-6  before:z-10 before:mix-blend-multiply   before:w-full before:h-full before:bg-brandorange dark:before:bg-brandpurple before:bg-opacity-90 dark:before:bg-opacity-70 ">
        <GatsbyImage
          image={imageData}
          alt={image?.node.title}
          className="grayscale"
        />
      </div>
    </div>
  )
}
