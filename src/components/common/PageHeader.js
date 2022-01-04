import React from "react"

export default function PageHeader({ text }) {
  return (
    <>
      <h1 className="text-center md:py-8 pb-4  text-3xl md:text-5xl uppercase">
        {text}
      </h1>
    </>
  )
}
