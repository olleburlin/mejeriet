import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ProgrampunktPageEvent from "./ProgramPunktPageEvent";
import SearchFilter from "./SearchFilter";

export default function ProgramPage() {
  const data = useStaticQuery(graphql`
    {
      allWpProgrampunkt(
        sort: { fields: informationProgram___startdatum, order: ASC }
      ) {
        nodes {
          title
          slug
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
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
    }
  `);
  const posts = data.allWpProgrampunkt.nodes;

  return (
    <section className="flex flex-col md:flex-row mb-8 md:space-x-8">
      <div className="w-full md:w-3/4 ">
        {posts.map((post) => {
          return <ProgrampunktPageEvent key={post.id} post={post} />;
        })}
      </div>

      <div className=" w-full md:w-1/4 order-first md:order-last mb-8 md:mb-0">
        <div className="bg-brandpurple bg-opacity-50 p-4 sticky sticky-filter">
          <SearchFilter />
        </div>
      </div>
    </section>
  );
}
