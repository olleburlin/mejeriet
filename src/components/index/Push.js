import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function Push({ post }) {
  const imageData = getImage(post.featuredImage.node.localFile.childImageSharp);
  const { lankmal, kortText } = post.infoPushar;
  return (
    <div className="w-full relative">
      <div className="h-full w-full relative ">
        <GatsbyImage image={imageData} alt={post.title} className="h-full" />
        <div className="absolute top-0 left-0  h-full w-full flex flex-col justify-center items-center space-y-4 bg-black bg-opacity-20">
          <h4 className="text-xl uppercase">{post.title}</h4>
          <p className="text-center">{kortText}</p>
          <Link to={`/aktuellt/${lankmal.slug}`}>
            <button className="bg-brandteal py-1 px-2"> Läs mer</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
