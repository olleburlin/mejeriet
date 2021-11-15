import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import YouTube from "react-youtube"
import MomentDate from "../../utils/MomentDate"
export default function ProgrampunktPage({ post }) {
  const { title, informationProgram, featuredImage } = post
  const imageData = getImage(featuredImage.node.localFile)

  return (
    <>
      <section className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 text-pink-100">
        {/* Primary column */}
        <div className="flex-1">
          <div className="bg-brandorange dark:bg-brandpurple dark:bg-opacity-50 p-4">
            <header className="flex flex-col my-2">
              <h1 className="uppercase text-5xl">{title}</h1>

              <div className="flex md:flex-row flex-wrap dark:text-brandorange text-lg mb-4">
                <date className="text-lg">
                  <MomentDate
                    dateString={informationProgram.startdatum}
                    newDate="MMMM Do, YYYY"
                  />
                </date>
              </div>
            </header>
            <div className="">
              <div className="text-lg mb-2 mt-1">
                {informationProgram.kortInfo}
              </div>
            </div>
            <div className="my-8">
              <Link to="/">
                <button className="bg-brandteal text-lg px-3 py-2">
                  Köp biljett
                </button>
              </Link>
            </div>
            <div className="program-information">
              <ul className="list-inline">
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
                <li>
                  <span>Pris:</span>&nbsp;195kr
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-brandorange dark:bg-brandpurple dark:bg-opacity-50 p-4 my-4 ">
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
          </div>
          <div className="my-4 embed-responsive w-full">
            <YouTube videoId="wycjnCCgUes" className="embed-responsive-item" />
          </div>
        </div>
        {/* Secondary column */}
        <div className="flex-1">
          <div className="w-full">
            <GatsbyImage image={imageData} alt={title} />
          </div>
          <div className="leading-relaxed tracking-tight text-lg p-8 bg-brandorange dark:bg-brandpurple dark:bg-opacity-50 ">
            <p>
              Dan Bejar är av de senaste decenniernas mest säregna sångare och
              låtskrivare. Sällan förutsägbar, aldrig ointressant, liknar inte
              riktigt någon annan. Som frontfigur för det kanadensiska bandet
              Destroyer gör han sedan mitten av nittiotalet en stämningsfull,
              teatralisk, stundom synthig, ofta jazzigt elegant och pratsjungen
              croonerpop som ibland jämförs med David Bowie, annars brittiskt
              åttiotal. Första singeln ”Crimson Tide” från komman plattan ”Have
              We Met” släpptes i oktober är en sex minuters resa som tar sin
              rättmätiga plats bland andra Destroyer-klassiker.{" "}
            </p>

            <p>
              Dan Bejar har sagt att skivan är inspirerad av åttiotalsfilmer som
              White Nights och Pretty In Pink. Låter hur lovande som helst. ”Få
              just nu aktiva band kan skryta med en diskografi med så hög
              lägstanivå. Processen i att bryta ner och bygga upp är kanske just
              anledningen till att man klarat av att vara relevanta under så
              lång tid, man har inte direkt förhållit sig till trender utan
              fokuserar bara på sin egen grej.” – Pontus Flodin, Hymn
              <p>Support blir brittiska singer/songwritern Anna B Savage.</p>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
