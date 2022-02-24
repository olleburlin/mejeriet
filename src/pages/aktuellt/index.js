import React from "react"
import News from "../../components/aktuellt/News"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import SEO from "../../components/seo"

export default function AktuelltPage({ data }) {
  const posts = data.allWpPost.nodes
  return (
    <Layout>
      <SEO keywords={[`Mejeriet`, `Biljetter`, `Konserter`]} title="Aktuellt" />
      <News posts={posts} />
    </Layout>
  )
}
export const query = graphql`
  {
    allWpPost(
      filter: { status: { eq: "publish" } }
      sort: { fields: date, order: DESC }
      limit: 10
    ) {
      nodes {
        date
        title
        slug
        status
        content
        excerpt
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        uri
      }
    }
  }
`
