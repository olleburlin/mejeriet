import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Link from "../common/Link"
import IndexEventFeatured from "./IndexEventFeatured"
import ProgramPageEvent from "../program/ProgramPageEvent"

import moment from "moment"
export default function IndexEvents() {
  let today = moment().calendar("yyyy-mm-dd")
  console.log(today)

  const data = useStaticQuery(graphql`
    query {
      allEvents: allWpProgrampunkt(
        sort: { fields: informationProgram___startdatum, order: ASC }
        limit: 10
      ) {
        nodes {
          title
          slug
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    layout: CONSTRAINED
                    aspectRatio: 1.6
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
            status
            biljettlank
            underrubrik
            extraText
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
                        aspectRatio: 1.6
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
  const posts = data.allEvents.nodes

  const featuredPosts = data.featuredEvents
  console.log(featuredPosts)
  return (
    <>
      <div>
        <IndexEventFeatured posts={featuredPosts} />
      </div>

      <div className="grid gap-4 md:gap-6">
        {posts.map(post => {
          return <ProgramPageEvent key={post.id} post={post} />
        })}
      </div>
      <div className="inline-block my-8 ">
        <Link to="/program/">
          <button className="py-2 px-4  bg-brandorange text-white">
            Visa hela programmet &rarr;
          </button>
        </Link>
      </div>
    </>
  )
}
