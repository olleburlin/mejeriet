import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Link from "../common/Link"
import IndexEventFeatured from "./IndexEventFeatured"
import ProgramPageEvent from "../program/ProgramPageEvent"
import { getCurrentDate } from "../../utils/getCurrentDate"
export default function IndexEvents() {
  const data = useStaticQuery(graphql`
    query {
      allEvents: allWpProgrampunkt(
        sort: { fields: informationProgram___startdatum, order: ASC }
        limit: 10
      ) {
        nodes {
          title
          slug
          uri
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(aspectRatio: 1.6, sizes: "1500")
                }
              }
            }
          }
          informationProgram {
            borjar
            kortInfo
            oppnar
            plats
            covid19 {
              vaccinpass
            }
            status
            biljettlank
            underrubrik
            genre {
              name
            }
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
          programmpunkt {
            ... on WpPost {
              id
              title
              uri
              nodeType
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        placeholder: DOMINANT_COLOR
                        layout: CONSTRAINED
                        aspectRatio: 1.5
                        sizes: "1500"
                      )
                    }
                  }
                }
              }
              pushNyheter {
                rubrikTillPushPaFramsidan
              }
            }
            ... on WpProgrampunkt {
              id
              title
            }
          }
          programmpunkt {
            ... on WpProgrampunkt {
              id
              title
              slug
              uri
              nodeType
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
                      gatsbyImageData(
                        placeholder: DOMINANT_COLOR
                        layout: CONSTRAINED
                        aspectRatio: 1.5
                        sizes: "1500"
                      )
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
  let posts = data.allEvents.nodes

  let featuredPosts = data.featuredEvents.missaInte.programmpunkt

  return (
    <div className="flex flex-col">
      <div className="block bg-red-200 h-full mb-4 md:mb-6">
        <IndexEventFeatured featuredPosts={featuredPosts} posts={posts} />
      </div>

      <div className="grid gap-4 md:gap-6">
        {posts
          .filter(post => post.informationProgram.startdatum > getCurrentDate())
          .map(post => {
            return <ProgramPageEvent key={post.id} post={post} />
          })}
      </div>
      <div className="inline-block my-6 w-full md:w-auto">
        <Link to="/program/">
          <button className="py-2 px-4 w-full bg-brandpurple   mx-auto text-white">
            Visa hela programmet &rarr;
          </button>
        </Link>
      </div>
    </div>
  )
}
