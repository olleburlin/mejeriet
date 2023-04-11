import React from "react"
import Layout from "../components/layout"

export default function TackPageMusikskola() {
  return (
    <Layout>
      <div className="min-h-screen text-center flex flex-col justify-center items-center -mt-32 space-y-4">
        <h1 className="text-3xl md:text-5xl">Tack för er anmälan!</h1>
        <p>
          Vi kommer höra av oss så snart vi kan erbjuda en plats. Om ni har
          frågor eller funderingar innan dess är ni välkomna att höra av er till
          musikskolan@kulturmejeriet.se
        </p>
      </div>
    </Layout>
  )
}
