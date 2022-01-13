import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Link from "../common/Link"
import MomentDate from "../../utils/MomentDate"
import { YoutubeHelper } from "../../utils/YoutubeHelper"
import Priskategorier from "./Priskategorier"
import ArtistLinks from "./ArtistLinks"

export default function ProgrampunktPage({ post }) {
  const { title, informationProgram, featuredImage, artistLinks } = post
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
    underrubrik,
    extraText,
    typAvArrangemang,
    samarbetspartner,
    covid19,
  } = informationProgram

  const youTubeId = YoutubeHelper(youtubeKlipp)
  console.log(artistLinks)
  return (
    <>
      <section className="grid md:grid-cols-2 gap-8 md:gap-16 md:py-16">
        {/* Primary column */}
        <div className="flex-1">
          <div className="space-y-4">
            <header className="flex flex-col">
              <h1 className="uppercase text-5xl">{title}</h1>
              <div className="flex md:flex-row flex-wrap  ">
                <MomentDate
                  dateString={informationProgram.startdatum}
                  newDate="MMMM Do, YYYY"
                />
              </div>
              {extraText && <div className="text-brandorange">{extraText}</div>}{" "}
            </header>

            <div className="pb-2">
              {biljettlank && (
                <Link to={biljettlank}>
                  <button className="bg-brandpurple text-white rounded-sm px-3 py-2">
                    Köp biljett
                  </button>
                </Link>
              )}
            </div>
            <div className="program-information border-t-4 py-4 border-b-4 border-white">
              <div>{prices && <Priskategorier prices={prices} />}</div>
              {typAvArrangemang.name && (
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
            {langInfo && (
              <div
                dangerouslySetInnerHTML={{ __html: langInfo }}
                className="space-y-4"
              />
            )}
            {covid19.vaccinpass && (
              <div className="italic text-sm border-t-4 border-white pt-4">
                <div className="space-y-4">
                  <p>
                    Den 1 december 2021 verkställs Folkhälsomyndighetens krav på
                    vaccinationsbevis för alla över 18 år som besöker allmänna
                    sammankomster inomhus med fler än 100 deltagare. I linje med
                    denna bestämmelse kommer det att krävas vaccinationsbevis
                    från alla som önskar besöka våra evenemang.
                  </p>
                  <p>Kontroll av vaccinationsbevis på våra evenemang:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Ladda ned ditt vaccinationsbevis på www.covidbevis.se
                      (mobilt Bank-ID krävs).
                    </li>
                    <li>
                      Kontrollera att ditt vaccinationsbevis är giltigt över
                      konsertdatumet (både utskrivet och digitalt
                      vaccinationsbevis är giltigt).
                    </li>{" "}
                    Vad redo att visa ID-kort/legitimation i samband med
                    uppvisandet av vaccinationsbeviset.
                    <li>
                      Kom i god tid! Inpasserandet kan eventuellt ta lite längre
                      tid, så se till att vara på plats i god tid innan
                      konserten börjar för en smidig inpassering.
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Secondary column */}
        <div className="flex-1 space-y-8">
          <div className="w-full">
            <GatsbyImage image={imageData} alt={title} />
          </div>
          <div>
            {youTubeId && (
              <div className=" embed-container">
                <iframe
                  src={"https://www.youtube.com/embed//" + youTubeId}
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            )}
          </div>
          <div className="pb-4">
            {artistLinks && <ArtistLinks artistLinks={artistLinks} />}
          </div>
        </div>
      </section>
    </>
  )
}
