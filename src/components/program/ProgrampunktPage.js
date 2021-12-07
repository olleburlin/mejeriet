import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import YouTube from "react-youtube"
import MomentDate from "../../utils/MomentDate"
import { YoutubeHelper } from "../../utils/YoutubeHelper"

export default function ProgrampunktPage({ post }) {
  const { title, informationProgram, featuredImage } = post
  const imageData = getImage(featuredImage.node.localFile)
  const { youtubeKlipp } = informationProgram

  const youTubeId = YoutubeHelper(youtubeKlipp)
  console.log(youTubeId)

  return (
    <>
      <section className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 ">
        {/* Primary column */}
        <div className="flex-1">
          <div className="space-y-8">
            <header className="flex flex-col">
              <h1 className="uppercase text-5xl">{title}</h1>

              <div className="flex md:flex-row flex-wrap  mb-4">
                <date className="">
                  <MomentDate
                    dateString={informationProgram.startdatum}
                    newDate="MMMM Do, YYYY"
                  />
                </date>
              </div>
            </header>

            {/* <div className="my-8">
              <Link to="/">
                <button className=" px-3 py-2">Köp biljett</button>
              </Link>
            </div> */}
            <div className="program-information">
              <ul className="list-inline">
                <li>
                  <span>Pris:</span>&nbsp;195kr
                </li>
                <li>
                  <span>Öppnar:</span>&nbsp;20:00
                </li>
                <li>
                  <span>Börjar:</span>&nbsp;21:00
                </li>
                <li>
                  <span>Plats:</span>&nbsp;Mejeriet
                </li>
                <li>
                  <span>Åldersgräns:</span>&nbsp;13 år
                </li>
              </ul>
            </div>
            <div className=" ">
              <p>
                Dan Bejar är av de senaste decenniernas mest säregna sångare och
                låtskrivare. Sällan förutsägbar, aldrig ointressant, liknar inte
                riktigt någon annan. Som frontfigur för det kanadensiska bandet
                Destroyer gör han sedan mitten av nittiotalet en stämningsfull,
                teatralisk, stundom synthig, ofta jazzigt elegant och
                pratsjungen croonerpop som ibland jämförs med David Bowie,
                annars brittiskt åttiotal. Första singeln ”Crimson Tide” från
                komman plattan ”Have We Met” släpptes i oktober är en sex
                minuters resa som tar sin rättmätiga plats bland andra
                Destroyer-klassiker.{" "}
              </p>

              <p>
                Dan Bejar har sagt att skivan är inspirerad av åttiotalsfilmer
                som White Nights och Pretty In Pink. Låter hur lovande som
                helst. ”Få just nu aktiva band kan skryta med en diskografi med
                så hög lägstanivå. Processen i att bryta ner och bygga upp är
                kanske just anledningen till att man klarat av att vara
                relevanta under så lång tid, man har inte direkt förhållit sig
                till trender utan fokuserar bara på sin egen grej.” – Pontus
                Flodin, Hymn
                <p>Support blir brittiska singer/songwritern Anna B Savage.</p>
              </p>
            </div>
          </div>
          {/* <div className=" p-4 my-4 ">
            <div className="space-x-4">
              <button className="bg-white text-gray-900 text-md px-2 py-1">
                Spotify
              </button>
              <button className="bg-white text-gray-900 text-md px-2 py-1">
                Hemsida
              </button>
              <button className="bg-white text-gray-900 text-md px-2 py-1">
                Facebookevent
              </button>
            </div>
          </div> */}
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
