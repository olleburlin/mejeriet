import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import MomentDate from "../../utils/MomentDate"

export default function IndexNews() {
  const data = useStaticQuery(graphql`
    {
      allWpPost(limit: 5) {
        nodes {
          title
          id
          date(formatString: "YYYYMMDD")
          slug
        }
      }
    }
  `)
  const posts = data.allWpPost.nodes
  return (
    <div className="bg-brandorange dark:bg-brandpurple dark:bg-opacity-50 text-pink-100 p-4">
      <div>
        <h5 className="uppercase text-2xl pb-2">Aktuellt</h5>
      </div>
      <div className="space-y-1">
        {posts.map(post => {
          return <IndexNewsItem key={post.id} post={post} />
        })}
      </div>
      {/* <button className="text-xs mt-4 bg-white text-brandpurple px-2 py-1">
        Visa alla
      </button> */}
    </div>
  )
}

function IndexNewsItem({ post }) {
  const { title, slug, date } = post

  return (
    <div className="">
      <Link to={`/program/${slug}`}>
        <div className="flex flex-row space-x-4 items-baseline">
          <date className=" tracking-tight">
            <MomentDate dateString={date} newDate="YY.MM.DD" />
          </date>
          <div className="text-md font-bold uppercase ">{title}</div>
        </div>
      </Link>
    </div>
  )
}
