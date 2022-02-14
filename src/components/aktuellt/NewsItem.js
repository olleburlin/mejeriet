import React from "react"
import { getLongDate } from "../../utils/getLongDate"

export default function NewsItem({ post }) {
  const { title, date, content } = post
  const newsDate = getLongDate(date, "Do MMMM, YYYY")
  return (
    <article className="s p-8 space-y-4 wp-content">
      <div className=" text-brandorange uppercase">{newsDate}</div>

      <h3 className="text-3xl uppercase">{title}</h3>

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}
