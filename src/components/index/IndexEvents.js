import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import IndexEvent from "./IndexEvent"
import IndexEventFeatured from "./IndexEventFeatured"

export default function IndexEvents() {
  const data = useStaticQuery(graphql`
    query {
      allEvents: allWpProgrampunkt(
        sort: { fields: informationProgram___startdatum, order: ASC }
      ) {
        nodes {
          title
          slug
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: DOMINANT_COLOR
                    layout: CONSTRAINED
                    aspectRatio: 1.5
                    transformOptions: {
                      duotone: { highlight: "#e198b2", shadow: "#111111" }
                    }
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
      featuredEvent: wpProgrampunkt(id: { eq: "cG9zdDo4OTA5" }) {
        title
        slug
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
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
  `)
  const posts = data.allEvents.nodes
  const featuredPost = data.featuredEvent
  return (
    <>
      <div className="">
        <IndexEventFeatured post={featuredPost} />
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        {posts.map(post => {
          return <IndexEvent key={post.id} post={post} />
        })}
      </div>
    </>
  )
}
