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
                      duotone: { highlight: "#e37e24", shadow: "#111111" }
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

      featuredEvents: wpPage(databaseId: { eq: 9046 }) {
        id
        missaInte {
          utvaltArrangemang {
            programmpunkt {
              ... on WpProgrampunkt {
                id
                title
                informationProgram {
                  startdatum
                  borjar
                  kortInfo
                  oppnar
                  plats
                }
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
          }
        }
      }
    }
  `)
  const posts = data.allEvents.nodes

  const featuredPosts = data.featuredEvents
  console.log(featuredPosts)
  return (
    <>
      <IndexEventFeatured posts={featuredPosts} />

      <div className="grid l gap-4">
        {posts.map(post => {
          return <IndexEvent key={post.id} post={post} />
        })}
      </div>
    </>
  )
}
