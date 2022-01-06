import React from "react"
// import Instagram from "../components/common/Instagram";
import IndexEvents from "../components/index/IndexEvents"
import IndexMiniEvents from "../components/index/IndexMiniEvents"
import IndexNews from "../components/index/IndexNews"
import Instagram from "../components/common/Instagram"
import Pushar from "../components/index/Pushar"

import Sodran from "../components/index/Sodran"

import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Hem"
      />
      <div className="flex flex-col md:flex-row md:space-x-4">
        <section className="flex-1">
          <IndexEvents />
        </section>
        <section className="md:w-1/3">
          <div className="max-w-full space-y-4">
            <IndexMiniEvents />

            <IndexNews />
            {/* <Pushar /> */}
            {/* <Sodran /> */}
          </div>
        </section>
        <Instagram />
      </div>
    </Layout>
  )
}

export default IndexPage
