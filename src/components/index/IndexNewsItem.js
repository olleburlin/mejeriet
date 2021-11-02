import React from "react";
import { Link } from "gatsby";

export default function IndexNewsItem({ post }) {
  const { title, slug } = post;
  return (
    <div className="my-2 text-sm">
      <Link to={`/aktuellt/${slug}`}>
        {" "}
        <h5 className="uppercase">{title}</h5>
      </Link>
      {/* <date className="pr-2 text-gray-500">{date}</date> */}
    </div>
  );
}
