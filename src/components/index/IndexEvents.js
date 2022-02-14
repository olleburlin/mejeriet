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
                  gatsbyImageData(placeholder: BLURRED, aspectRatio: 1.7)
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
            ... on WpProgrampunkt {
              id
              title
              slug
              uri
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
                        aspectRatio: 1.7
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
    <div className="mb-8">
      <div className="block">
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
