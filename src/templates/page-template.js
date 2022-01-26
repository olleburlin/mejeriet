import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import SinglePage from "../components/common/SinglePage"

export default function PageTemplate({ data }) {
  return (
    <div className="">
      <Seo title={data.wpPage.title} />
      <Layout>
        <SinglePage data={data} />
      </Layout>
    </div>
  )
}

export const query = graphql`
  query ($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
      personal {
        underkategorier {
          innehall
          namnPaKategori
        }
      }
      synlighet {
        gomRubrik
      }
      kartor {
        kartaDark {
          localFile {
            id
            publicURL
          }
        }

        kartaLight {
          localFile {
            id
            publicURL
          }
        }
      }

      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, aspectRatio: 1.6)
            }
          }
        }
      }
    }
  }
`
