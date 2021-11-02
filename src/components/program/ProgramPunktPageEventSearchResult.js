import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function ProgramPunktEvent({
  hit: { title, featuredImage, informationProgram, slug },
}) {
  // const { title, informationProgram, featuredImage, slug } = post;
  const imageData = getImage(featuredImage.node.localFile);

  return (
    <div>
      <div className="flex flex-row w-full mb-4">
        {/* Left */}
        <div className="flex-none w-64 h-auto bg-pink-50">
          <GatsbyImage image={imageData} alt={title} className="h-full" />
        </div>
        {/* Right */}
        <div className="flex-grow flex flex-col justify-between bg-brandpurple bg-opacity-50 p-4">
          <header className="flex flex-row text-xs font-mono text-brandorange">
            <div className="">{informationProgram.startdatum}</div>
            <span>&nbsp;&bull;&nbsp;</span>
            <div>19:00</div>
          </header>
          <div>
            <Link to={`/program/${slug}`}>
              <h3 className="uppercase text-2xl">{title}</h3>
            </Link>
            <div className="mb-2 mt-1">{informationProgram.kortInfo}</div>
          </div>
          <div className="flex flex-row space-x-2 text-xs">
            <div>
              <Link to={`/program/${slug}`}>
                <button className="bg-white text-black py-1 px-2">
                  Läs mer
                </button>
              </Link>
            </div>
            <div>
              <Link to="/">
                <button className="bg-brandteal py-1 px-2">Köp biljett</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
