import React from "react"

export default function Biljett({ post }) {
  const { title, informationProgram } = post
  return (
    <div className="text-base flex flex-row justify-between items-center space-x-4  p-4 uppercase even:bg-brandpink dark:even:bg-brandpurple even:bg-opacity-10 dark:even:bg-opacity-30">
      <div className="flex-none text-brandorange">
        {informationProgram.startdatum}
      </div>

      <div className="flex-1 font-heavy">{title}</div>
      <div className="flex-none">
        {" "}
        <button className="bg-brandteal text-white py-1 px-2 text-sm">
          Köp biljett
        </button>
      </div>
    </div>
  )
}
