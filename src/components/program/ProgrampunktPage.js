import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Link from "../common/Link"
import MomentDate from "../../utils/MomentDate"
import { YoutubeHelper } from "../../utils/YoutubeHelper"
import Priskategorier from "./Priskategorier"
import ArtistLinks from "./ArtistLinks"

export default function ProgrampunktPage({ post }) {
  const { title, informationProgram, featuredImage, artistLinks } = post
  const imageData = getImage(featuredImage?.node.localFile)
  const {
    youtubeKlipp,
    plats,
    prices,
    oppnar,
    borjar,
    aldersgrans,
    langInfo,
    biljettlank,
    underrubrik,
    status,

    typAvArrangemang,
    samarbetspartner,
    covid19,
  } = informationProgram

  const youTubeId = YoutubeHelper(youtubeKlipp)

  return (
    <>
      <section className="grid md:grid-cols-2 gap-8 md:gap-x-16 md:py-8">
        {/* Primary column */}

        <div className="flex flex-col space-y-4">
          <header className="flex flex-col">
            <h1 className="uppercase text-5xl">{title}</h1>
            <div className="flex md:flex-row flex-wrap  ">
              <MomentDate
                dateString={informationProgram.startdatum}
                newDate="YYYY.MM.DD"
              />
            </div>
          </header>

          {status !== "Aktivt" && (
            <div className="uppercase text-brandpink">{status}</div>
          )}
          {underrubrik && (
            <div className="uppercase font-bold">{underrubrik}</div>
          )}

          {biljettlank && status !== "Inställt" && (
            <div className="py-1">
              <Link to={biljettlank}>
                <button className="bg-brandpurple text-white rounded-sm px-3 py-2">
                  Köp biljett
                </button>
              </Link>
            </div>
          )}

          <div className="w-full block md:hidden pb-2">
            <GatsbyImage image={imageData} alt={title} />
          </div>
          <div className="program-information border-t-4 py-4 border-b-4 border-white">
            <div>{prices && <Priskategorier prices={prices} />}</div>
            {typAvArrangemang?.name && (
              <div className="font-heavy">
                Typ av arrangemang:&nbsp;
                <span className="font-normal"> {typAvArrangemang.name}</span>
              </div>
            )}
            {samarbetspartner && (
              <div className="font-heavy">
                Samarbetspartner:&nbsp;
                <span className="font-normal"> {samarbetspartner.title}</span>
              </div>
            )}
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
          {youTubeId && (
            <div className="pt-4">
              <div className=" embed-container ">
                <iframe
                  width="560"
                  height="315"
                  src={"https://www.youtube.com/embed/" + youTubeId}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          )}
          <div className="pt-4">
            {artistLinks && <ArtistLinks artistLinks={artistLinks} />}
          </div>
        </div>

        {/* Secondary column */}
        <div className="flex-1  bg-white text-black mb-4 md:mb-8">
          <div className="w-full hidden md:block">
            <GatsbyImage image={imageData} alt={title} />
          </div>
          {langInfo && (
            <div className="p-8">
              <div
                dangerouslySetInnerHTML={{ __html: langInfo }}
                className="space-y-4 font-normal"
              />
            </div>
          )}
        </div>
      </section>
    </>
  )
}
