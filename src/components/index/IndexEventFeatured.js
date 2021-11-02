import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function IndexEventFeatured({ post }) {
  const { title, informationProgram, featuredImage, slug } = post;

  const imageData = getImage(featuredImage.node.localFile);
  return (
    <div className="flex flex-col w-full bg-gradient-to-t from-brandpurple via-pink-500 to-brandorange mb-4">
      {/* Left */}
      <div className="w-full border-transparent border-8 bg-brandpurple bg-opacity-40 p-2">
        <Link to={`/program/${slug}`}>
          <GatsbyImage
            image={imageData}
            alt={title}
            className="object-cover w-full block"
          />
        </Link>
      </div>
      {/* Right */}
      <div className="flex-grow flex flex-col justify-between bg-brandpurple bg-opacity-40 px-4 pb-4 space-y-2">
        <header className="flex flex-row  justify-between">
          <div className="flex flex-row  text-brandorange font-bold">
            <div className="">{informationProgram.startdatum}</div>
            <span>&nbsp;&bull;&nbsp;</span>
            <div>19:00</div>
          </div>
        </header>
        <div>
          <Link to={`/program/${slug}`}>
            <h3 className="uppercase text-4xl">{title}</h3>
          </Link>
          <p className="mb-2 mt-1 text-lg">{informationProgram.kortInfo}</p>
        </div>
        <div className="flex flex-row space-x-4">
          <div>
            <Link to={`/program/${slug}`}>
              <button className="bg-white text-black py-1 px-2">Läs mer</button>
            </Link>
          </div>
          <div>
            <Link to="/">
              <button className="bg-brandteal py-1 px-2 ">Köp biljett</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
