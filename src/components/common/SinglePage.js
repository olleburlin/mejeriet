import React from "react"
import FeaturedImage from "./FeaturedImage"
import PageHeader from "./PageHeader"
export default function SinglePage({ data }) {
  const { content, featuredImage, kartor } = data.wpPage
  const kartaLight = kartor?.kartaLight?.localFile.publicURL
  const kartaDark = kartor?.kartaDark?.localFile.publicURL
  return (
    <div id="page-template" className="min-h-screen ">
      <div className="max-w-4xl mx-auto space-y-12">
        <div>
          <PageHeader text={data.wpPage.title} />
        </div>
        <div className="relative">
          <FeaturedImage image={featuredImage} />
        </div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        {kartor && (
          <div className="py-8">
            {kartaLight && (
              <img src={kartaLight} alt="Karta" className="light" />
            )}
            {kartaDark && <img src={kartaDark} alt="Karta" className="dark" />}
          </div>
        )}
      </div>
    </div>
  )
}
