import React from "react"
import Biljetter from "../components/biljetter/Biljetter"
import PageHeader from "../components/common/PageHeader"
import Layout from "../components/layout"

export default function BiljetterPage() {
  return (
    <Layout>
      <PageHeader text="Biljetter" />
      <div className="max-w-4xl mx-auto">
        <Biljetter />
      </div>
    </Layout>
  )
}
