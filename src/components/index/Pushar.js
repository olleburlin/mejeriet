import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Push from "./Push";

export default function Pushar() {
  const data = useStaticQuery(graphql`
    {
      allWpPush {
        nodes {
          title
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
            }
          }
          infoPushar {
            kortText
            lankmal {
              ... on WpPost {
                id
                slug
              }
              ... on WpProgrampunkt {
                id
                slug
              }
            }
          }
        }
      }
    }
  `);
  const posts = data.allWpPush.nodes;
  return (
    <div className="h-full w-full">
      {posts.map((post) => {
        return <Push key={post.id} post={post} />;
      })}
    </div>
  );
}
