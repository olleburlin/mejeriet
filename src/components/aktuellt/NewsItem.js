import React from "react";
import { Link } from "gatsby";

export default function NewsItem({ post }) {
  const { title, date, slug, excerpt } = post;
  return (
    <Link to={`/aktuellt/${slug}`}>
      <article className="hover:bg-white hover:text-gray-900 p-8">
        <header>
          <date className=" text-brandorange">{date}</date>

          <h3 className="text-3xl uppercase">{title}</h3>

          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        </header>
      </article>
    </Link>
  );
}
