import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import IndexEvent from "./IndexEvent";
import IndexEventFeatured from "./IndexEventFeatured";

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
            samarbetspartner
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
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: DOMINANT_COLOR
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
          samarbetspartner
          slutar
          startdatum
        }
      }
    }
  `);
  const posts = data.allEvents.nodes;
  const featuredPost = data.featuredEvent;
  return (
    <>
      <div className="">
        <IndexEventFeatured post={featuredPost} />
      </div>

      <div className="space-y-8">
        {posts.map((post) => {
          return <IndexEvent key={post.id} post={post} />;
        })}
      </div>
    </>
  );
}
