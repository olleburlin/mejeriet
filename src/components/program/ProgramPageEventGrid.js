import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LongDate from "../common/LongDate"

export default function ProgramPunktEventGrid({ post }) {
  const { title, informationProgram, featuredImage, slug } = post
  const imageData = getImage(featuredImage.node.localFile)
  const { startdatum, genre, typAvArrangemang, borjar } = informationProgram
  return (
    <div className="text-3xl font-bold">
      <Link to={`/program/${slug}`}>
        <div className="flex flex-row">
          <div className="w-48">{startdatum}</div>
          <div className="flex-1">{title}</div>
          <div className="flex text-xl">{borjar}</div>
          <div className="w-32 text-xl">Köp biljett</div>
          <div className=""></div>
        </div>
      </Link>
    </div>
  )
}
