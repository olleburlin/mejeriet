import React from "react"

export default function Biljett({ post }) {
  const { title, informationProgram } = post
  return (
    <div className="text-xl flex flex-row justify-between items-start space-x-4  p-4 uppercase ">
      <div className="flex-none ">{informationProgram.startdatum}</div>

      <div className="flex-1 ">{title}</div>
      <div className="flex-none">
        {" "}
        <button className="bg-brandteal text-white py-2 px-3">
          Köp biljett
        </button>
      </div>
    </div>
  )
}
