import React from "react"
import FeaturedImage from "./FeaturedImage"
import PageHeader from "./PageHeader"
import PersonalKategorier from "./PersonalKategorier"
export default function SinglePage({ data }) {
  const { content, featuredImage, kartor, personal } = data.wpPage
  const kartaLight = kartor?.kartaLight?.localFile.publicURL
  const kartaDark = kartor?.kartaDark?.localFile.publicURL
  const personalKategorier = personal.underkategorier
  return (
    <div id="page-template" className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <PageHeader text={data.wpPage.title} />
        </div>
        <div className="relative">
          <FeaturedImage image={featuredImage} />
        </div>
        <div className="">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        {kartaLight && (
          <div className="max-w-4xl md:max-w-2xl mx-auto py-8">
            <div className="md:py-8 px-4 md:px-24">
              {kartaLight && (
                <img src={kartaLight} alt="Karta" className="light" />
              )}
              {/* {kartaDark && (
                <img src={kartaDark} alt="Karta" className="dark" />
              )} */}
            </div>
          </div>
        )}
        {personalKategorier && (
          <div className="max-w-4xl md:max-w-4xl mx-auto py-8">
            <PersonalKategorier personalKategorier={personalKategorier} />
          </div>
        )}
      </div>
    </div>
  )
}
