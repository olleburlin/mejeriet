import React from "react"
import FeaturedImage from "./FeaturedImage"
import PageHeader from "./PageHeader"
export default function SinglePage({ data }) {
  const { content, featuredImage } = data.wpPage

  return (
    <div id="page-template" className="min-h-screen">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <PageHeader text={data.wpPage.title} />
        </div>
        <div className="relative">
          <FeaturedImage image={featuredImage} />
        </div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  )
}
