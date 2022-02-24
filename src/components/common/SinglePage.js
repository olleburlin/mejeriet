import React from "react"
import HyraMejeriet from "../forms/HyraMejeriet"
import Musikskolan from "../forms/Musikskolan"
import Korsang from "../forms/Korsang"
import Spela from "../forms/Spela"
import Replokal from "../forms/Replokal"
import Volontar from "../forms/Volontar"
import FeaturedImage from "./FeaturedImage"
import PageHeader from "./PageHeader"
import PersonalKategorier from "./PersonalKategorier"
export default function SinglePage({ data }) {
  const { content, featuredImage, kartor, personal, synlighet, databaseId } =
    data.wpPage
  const kartaLight = kartor?.kartaLight?.localFile.publicURL
  const personalKategorier = personal.underkategorier
  return (
    <div id="page-template" className="wp-content min-h-screen pt-8 pb-16">
      <div className="max-w-4xl mx-auto space-y-8">
        {!synlighet.gomRubrik && (
          <div>
            <PageHeader text={data.wpPage.title} />
          </div>
        )}
        <div className="relative">
          {featuredImage && <FeaturedImage image={featuredImage} />}
        </div>
        <div className="text-lg">
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
        {databaseId === 9148 && <HyraMejeriet />}
        {databaseId === 11396 && <Musikskolan />}
        {databaseId === 11399 && <Korsang />}
        {databaseId === 11402 && <Spela />}
        {databaseId === 9143 && (
          <div className="space-y-8">
            <div>
              <Volontar />
            </div>
            <div className="border-b-4 border-white" />
            <div>
              <Replokal />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
