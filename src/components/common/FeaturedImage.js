import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function FeaturedImage({ image }) {
  const imageData = getImage(image?.node.localFile.childImageSharp)

  return (
    <div className="">
      <div className="">
        <GatsbyImage
          image={imageData}
          alt="Featured"
          className="grayscale mix-blend-multiply"
        />
      </div>
    </div>
  )
}
