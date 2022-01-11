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
      artistLinks {
        urlFacebook
        urlFacebookevent
        urlHomepage
        urlSpotify
      }
      informationProgram {
        borjar
        extraText
        underrubrik
        kortInfo
        langInfo
        biljettlank
        oppnar
        plats
        youtubeKlipp
        samarbetspartner {
          ... on WpSammarbetspartner {
            id
            title
          }
        }
        covid19 {
          informationstext
          vaccinpass
        }
        slutar
        startdatum
        typAvArrangemang {
          name
        }
        prices {
          priceDescription
          price
        }
      }
    }
  }
`
