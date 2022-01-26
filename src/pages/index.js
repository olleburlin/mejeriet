import React from "react"
// import Instagram from "../components/common/Instagram";
import IndexEvents from "../components/index/IndexEvents"
import IndexMiniEvents from "../components/index/IndexMiniEvents"
import IndexNews from "../components/index/IndexNews"

import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Hem"
      />
      <div className="flex flex-col">
        <section className="flex-1">
          <IndexEvents />
        </section>
        <section className="md:w-1/3 hidden">
          <div className="max-w-full space-y-4">
            <IndexMiniEvents />

            <IndexNews />
            {/* <Pushar /> */}
            {/* <Sodran /> */}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
