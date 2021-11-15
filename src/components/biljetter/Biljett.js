import React from "react"

export default function Biljett({ post }) {
  const { title, informationProgram } = post
  return (
    <div className="flex flex-row justify-between items-start space-x-4 odd:bg-brandpurple odd:bg-opacity-75 p-4 uppercase text-pink-100">
      <div className="flex-none text-brandpink">
        {informationProgram.startdatum}
      </div>

      <div className="flex-1 text-gray-900 dark:text-pink-100">{title}</div>
      <div className="flex-none">
        {" "}
        <button className="bg-brandteal py-1 px-2 text-sm">Köp</button>
      </div>
    </div>
  )
}
