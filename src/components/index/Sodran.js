import { Link } from "gatsby"
import React from "react"

export default function Sodran() {
  return (
    <div className="bg-brandorange dark:bg-brandpurple dark:bg-opacity-50 text-pink-100 p-4 space-y-2">
      <h4 className="uppercase text-2xl">Filmer på södran</h4>
      <ul className="uppercase">
        {movies.map((movie, i) => {
          return (
            <li key={i} className="flex flex-row space-x-4">
              <div>{movie.time}</div>  
              <div className="font-bold">{movie.title}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const movies = [
  { time: "15:30", title: "Promising Young Woman" },
  { time: "16:30", title: "En runda till" },
  { time: "17:30", title: "Tove" },
  { time: "18:30", title: "Nomadland" },
  { time: "19:30", title: "En runda till" },
]
