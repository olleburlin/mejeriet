import React from "react"
import NewsItem from "../../components/aktuellt/NewsItem"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
export default function WpPost({ data }) {
  return (
    <Layout>
      <div className="min-h-[80vh]">
        <div className="max-w-4xl mx-auto">
          <NewsItem post={data.wpPost} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    wpPost(id: { eq: $id }) {
      date
      title
      slug
      status
      content
      excerpt
      uri
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
