import React from "react"
import { getLongDate } from "../../utils/getLongDate"
import FeaturedImage from "../common/FeaturedImage"
import Link from "../common/Link"

export default function NewsItem({ post }) {
  const { title, date, content, uri, featuredImage } = post
  const newsDate = getLongDate(date, "Do MMMM, YYYY")
  return (
    <article className="s p-8 space-y-4 wp-content">
      <div className=" text-brandorange uppercase">{newsDate}</div>

      <Link to={"/aktuellt" + uri} title={title}>
        <h3 className="text-3xl uppercase">{title}</h3>
      </Link>

      <div dangerouslySetInnerHTML={{ __html: content }} />
      <div className="my-8">
        <FeaturedImage image={featuredImage} />
      </div>
    </article>
  )
}
