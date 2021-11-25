import React from "react"
import PageHeader from "./PageHeader"
export default function SinglePage({ data }) {
  const { content } = data.wpPage

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto">
        <PageHeader text={data.wpPage.title} />
        <div>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  )
}
