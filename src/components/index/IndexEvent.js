import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function IndexEvent({ post }) {
  const { title, informationProgram, featuredImage, slug } = post;

  const imageData = getImage(featuredImage.node.localFile);
  return (
    <Link to={`/program/${slug}`}>
      <div className="flex flex-col md:flex-row w-full mb-4">
        {/* Left */}
        <div className="flex-none w-full md:w-52 md:h-auto aspect-h-9 aspect-w-16 -mb-2 md:-mb-0">
          <GatsbyImage image={imageData} alt={title} className="h-full " />
        </div>
        {/* Right */}
        <div className="flex flex-col justify-center flex-grow bg-brandpurple hover:bg-opacity-50 bg-opacity-75 p-4 space-y-2">
          <header className="space-y-1">
            <div className="text-brandorange flex flex-row leading-none">
              <date>{informationProgram.startdatum}</date>
              <span>&nbsp;&bull;&nbsp;</span>
              <div>19:00</div>
            </div>

            <h3 className="uppercase text-2xl leading-none">{title}</h3>
          </header>

          <p>{informationProgram.kortInfo}</p>
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
    </Link>
  );
}
