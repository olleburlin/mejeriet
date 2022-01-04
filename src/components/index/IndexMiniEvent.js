import React from "react"
import { Link } from "gatsby"
import MomentDate from "../../utils/MomentDate"

export default function IndexMiniEvent({ post }) {
  const { title, slug, informationProgram } = post

  return (
    <div className="">
      <Link to={`/program/${slug}`}>
        <div className="flex flex-row space-x-4 items-baseline">
          <div className=" tracking-tight">
            <MomentDate
              dateString={informationProgram.startdatum}
              newDate="YY.MM.DD"
            />
          </div>
          <div className="text-md font-bold uppercase ">{title}</div>
        </div>
      </Link>
    </div>
  )
}
