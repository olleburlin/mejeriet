import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { getCurrentDate } from "../../utils/getCurrentDate"
import ProgramGenrePage from "../../components/program/ProgramGenrePage"

export default function KlubbPage({ props }) {
  const data = useStaticQuery(graphql`
    {
      allWpProgramkategori {
        nodes {
          slug
          name
        }
      }
      allWpProgrampunkt(
        sort: {
          order: [ASC, ASC]
          fields: [informationProgram___startdatum, informationProgram___oppnar]
        }
        filter: {
          status: { eq: "publish" }
          informationProgram: { typAvArrangemang: { slug: { eq: "klubb" } } }
        }
      ) {
        nodes {
          title
          slug
          uri
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    aspectRatio: 1.6
                    width: 500
                  )
                }
              }
            }
          }
          informationProgram {
            borjar
            kortInfo
            oppnar
            plats
            underrubrik
            biljettlank
            covid19 {
              vaccinpass
            }

            samarbetspartner {
              ... on WpSammarbetspartner {
                id
                title
              }
            }
            slutar
            typAvArrangemang {
              id
              slug
              name
            }
            status
            startdatum
            genre {
              slug
              name
            }
          }
        }
      }
    }
  `)

  const posts = data.allWpProgrampunkt.nodes.filter(
    post => post.informationProgram.startdatum >= getCurrentDate()
  )

  return (
    <Layout>
      <SEO
        keywords={[`Mejeriet`, `Program`, `Konsert`, `Lund`]}
        title="Program"
      />

      <ProgramGenrePage posts={posts} props={props} />
    </Layout>
  )
}
