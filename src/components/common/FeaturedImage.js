import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function FeaturedImage({ image }) {
  const imageData = getImage(image?.node.localFile.childImageSharp)

  return (
    <div className="relative">
      <GatsbyImage image={imageData} alt="Featured" className="" />
    </div>
  )
}
