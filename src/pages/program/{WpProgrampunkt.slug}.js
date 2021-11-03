import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import ProgrampunktPage from "../../components/program/ProgrampunktPage"

export default function Programpunkt({ data }) {
  const post = data.wpProgrampunkt
  console.table(post)
  return (
    <Layout>
      <ProgrampunktPage post={post} />
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    wpProgrampunkt(id: { eq: $id }) {
      title
      slug
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
            }
          }
        }
      }
      informationProgram {
        borjar
        kortInfo
        oppnar
        plats
        samarbetspartner {
          ... on WpSammarbetspartner {
            id
            title
          }
        }
        slutar
        startdatum
      }
    }
  }
`
