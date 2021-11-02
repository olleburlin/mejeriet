import React from "react"
import Biljetter from "../components/biljetter/Biljetter"
import Layout from "../components/layout"

export default function BiljetterPage() {
  return (
    <Layout>
      <h1 className="text-center py-8 text-3xl uppercase">Biljetter</h1>
      <div className="max-w-4xl mx-auto">
        <Biljetter />
      </div>
    </Layout>
  )
}
