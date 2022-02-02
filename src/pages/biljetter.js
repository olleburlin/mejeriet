import React from "react"
import Biljetter from "../components/biljetter/Biljetter"
import PageHeader from "../components/common/PageHeader"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function BiljetterPage() {
  return (
    <Layout>
      <SEO
        keywords={[`Mejeriet`, `Biljetter`, `Konserter`]}
        title="Biljetter"
      />
      <PageHeader text="Biljetter" />
      <div className="max-w-4xl mx-auto">
        <Biljetter />
      </div>
    </Layout>
  )
}
