import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Link from "../common/Link"
import YouTube from "react-youtube"
import MomentDate from "../../utils/MomentDate"
import { YoutubeHelper } from "../../utils/YoutubeHelper"
import Priskategorier from "./Priskategorier"

export default function ProgrampunktPage({ post }) {
  const { title, informationProgram, featuredImage } = post
  const imageData = getImage(featuredImage.node.localFile)
  const {
    youtubeKlipp,
    plats,
    prices,
    oppnar,
    borjar,
    aldersgrans,
    langInfo,
    biljettlank,
  } = informationProgram

  const youTubeId = YoutubeHelper(youtubeKlipp)
  console.log(youTubeId)

  return (
    <>
      <section className="grid md:grid-cols-2 gap-8 md:gap-16 py-16">
        {/* Primary column */}
        <div className="flex-1">
          <div className="space-y-4">
            <header className="flex flex-col">
              <h1 className="uppercase text-5xl">{title}</h1>

              <div className="flex md:flex-row flex-wrap  ">
                <date className="">
                  <MomentDate
                    dateString={informationProgram.startdatum}
                    newDate="MMMM Do, YYYY"
                  />
                </date>
              </div>
            </header>

            <div className="my-8">
              {biljettlank && (
                <Link to={biljettlank}>
                  <button className="bg-brandteal text-white rounded-sm px-3 py-2">
                    Köp biljett
                  </button>
                </Link>
              )}
            </div>
            <div className="program-information border-t-4 py-4 border-b-4 border-black">
              <div>{prices && <Priskategorier prices={prices} />}</div>
              {oppnar && (
                <div className="font-heavy">
                  Öppnar:&nbsp;
                  <span className="font-normal"> {oppnar}</span>
                </div>
              )}
              {borjar && (
                <div className="font-heavy">
                  Börjar:&nbsp;
                  <span className="font-normal"> {borjar}</span>
                </div>
              )}
              {plats && (
                <div className="font-heavy">
                  Plats:&nbsp;
                  <span className="font-normal">{plats}</span>
                </div>
              )}
              {aldersgrans && (
                <div className="font-heavy">
                  Åldersgräns:&nbsp;<span className="font-normal">13 år</span>
                </div>
              )}
            </div>
            {langInfo && (
              <div
                dangerouslySetInnerHTML={{ __html: langInfo }}
                className="space-y-4"
              />
            )}
            <div className="italic text-sm border-t-4 border-black pt-4">
              Från den 1a december 2021 kommer vi kräva att man kan uppvisar ett
              giltigt Vaccinationsbevis/Covidpass i dörren på samtliga
              arrangemang i Mejeriets lokaler. Det är ditt ansvar att ha
              vaccinationsbevis samt legitimation med dig till evenemanget. Var
              där i extra god tid!
            </div>
          </div>
        </div>
        {/* Secondary column */}
        <div className="flex-1">
          <div className="w-full">
            <GatsbyImage image={imageData} alt={title} />
          </div>
          {youTubeId && (
            <div className="my-4 embed-container w-full">
              <YouTube videoId={youTubeId} className=" w-full max-w-full" />
            </div>
          )}
        </div>
      </section>
    </>
  )
}
