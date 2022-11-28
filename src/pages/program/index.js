import React from "react"
import Layout from "../../components/layout"
import ProgramPage from "../../components/program/ProgramPage"
import SEO from "../../components/seo"

export default function index({ location }) {
  return (
    <Layout>
      <SEO
        keywords={[`Mejeriet`, `Program`, `Konsert`, `Lund`]}
        title="Program"
      />
      <ProgramPage location={location} />
    </Layout>
  )
}
