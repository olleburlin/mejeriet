import React from "react"
import Layout from "../components/layout"

export default function SuccessPage() {
  return (
    <Layout>
      <div className="pt-32 text-center flex flex-col justify-center items-center  space-y-4">
        <p className="text-3xl md:text-3xl transition-all">
          Tack för ditt meddelande!
        </p>
      </div>
    </Layout>
  )
}
