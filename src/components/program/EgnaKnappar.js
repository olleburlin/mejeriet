import React from "react"
import Link from "../common/Link"

export default function EgnaKnappar({ knappar }) {
  const buttons = knappar.customButton
  return (
    <div className="flex flex-row items-center space-x-4">
      {buttons?.map((knapp, i) => {
        return <Knapp key={i} knapp={knapp} />
      })}
    </div>
  )
}

function Knapp({ knapp }) {
  const { buttonLink, buttonText, file } = knapp
  return (
    <div>
      <Link to={buttonLink || file.sourceUrl}>
        <button className="bg-brandpurple hover:bg-opacity-80 text-white rounded-sm px-3 py-2">
          {buttonText}
        </button>
      </Link>
    </div>
  )
}
