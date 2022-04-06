import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Link from "../common/Link"
import MomentDate from "../../utils/MomentDate"
import { YoutubeHelper } from "../../utils/YoutubeHelper"
import Priskategorier from "./Priskategorier"
import ArtistLinks from "./ArtistLinks"
import EgnaKnappar from "./EgnaKnappar"
import DuKanskeGillar from "./DuKanskeGillar"

export default function ProgrampunktPage({ post }) {
  const { title, informationProgram, featuredImage, artistLinks, knappar } =
    post
  const imageData = getImage(featuredImage?.node.localFile)
  const {
    youtubeKlipp,
    plats,
    prices,
    oppnar,
    slutar,
    borjar,
    aldersgrans,
    langInfo,
    biljettlank,
    underrubrik,
    status,
    duKanskeGillar,
    typAvArrangemang,
    samarbetspartner,
  } = informationProgram

  const youTubeId = YoutubeHelper(youtubeKlipp)

  return (
    <>
      <section className="grid md:grid-cols-2 gap-8 md:gap-x-16 py-4 md:py-8">
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

          <div className="flex flex-row space-x-4 items-center">
            {biljettlank && status !== "Inställt" && (
              <div className="py-1">
                <Link to={biljettlank}>
                  <button className="bg-brandpurple text-white rounded-sm px-3 py-2">
                    Köp biljett
                  </button>
                </Link>
              </div>
            )}
            {knappar && <EgnaKnappar knappar={knappar} />}
          </div>
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
            {slutar && (
              <div className="font-heavy">
                Slutar&nbsp;
                <span className="font-normal"> {slutar}</span>
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
                Åldersgräns:&nbsp;
                <span className="font-normal">{aldersgrans}</span>
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
        <div className="flex-1  text-black ">
          <div className="w-full hidden md:block md:mb-4">
            <GatsbyImage image={imageData} alt={title} />
          </div>
          {langInfo && (
            <div className="p-4 md:p-8 bg-white text-lg">
              <div
                dangerouslySetInnerHTML={{ __html: langInfo }}
                className="space-y-4 font-normal"
              />
            </div>
          )}
        </div>
      </section>
      {duKanskeGillar && (
        <section className="bg-gradient-to-b from-brandorange to-brandpink my-8 p-4 md:p-8 space-y-4">
          <h4 className="uppercase text-2xl text-center md:pb-4">
            Du kanske också gillar
          </h4>
          <DuKanskeGillar events={duKanskeGillar} />
        </section>
      )}
    </>
  )
}
