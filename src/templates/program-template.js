import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import ProgrampunktPage from "../components/program/ProgrampunktPage"
import { getLongDate } from "../utils/getLongDate"
export default function ProgramTemplate({ data }) {
  const post = data.wpProgrampunkt
  const { startdatum } = data.wpProgrampunkt.informationProgram
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title={post.title + ", " + getLongDate(startdatum, "MMMM Do YYYY")}
      />
      <ProgrampunktPage post={post} />
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    wpProgrampunkt(id: { eq: $id }) {
      title
      slug
      knappar {
        customButton {
          buttonLink
          buttonText
          type
          file {
            sourceUrl
          }
        }
      }
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
        duKanskeGillar {
          ... on WpProgrampunkt {
            title
            id
            slug
            uri
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(aspectRatio: 1.6)
                  }
                }
              }
            }
            informationProgram {
              borjar
              kortInfo
              underrubrik
              startdatum
            }
          }
        }
        underrubrik
        kortInfo
        langInfo
        biljettlank
        oppnar
        plats
        status
        youtubeKlipp
        samarbetspartner {
          ... on WpSammarbetspartner {
            id
            title
          }
        }
        covid19 {
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
