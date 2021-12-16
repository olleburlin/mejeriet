import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function PageTemplate({ post }) {
  const { title, featuredImage, content } = post
  const imageData = getImage(featuredImage.node.localFile)

  return (
    <div id="page-template" className="grid md:grid-cols-2 gap-8">
      <section className="p-2">
        <h1 className="text-4xl">{title}</h1>
        <div>
          {" "}
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </section>{" "}
      <section className="">
        <GatsbyImage image={imageData} alt={title} />
      </section>
    </div>
  )
}
