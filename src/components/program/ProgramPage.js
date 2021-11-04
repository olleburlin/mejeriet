import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProgrampunktPageEvent from "./ProgramPunktPageEvent"
import SearchFilter from "./SearchFilter"

export default function ProgramPage() {
  const data = useStaticQuery(graphql`
    {
      allWpTermNode {
        nodes {
          ... on WpGenre {
            slug
          }
        }
      }
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
                  gatsbyImageData(
                    placeholder: BLURRED
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
            genre {
              slug
            }
          }
        }
      }
    }
  `)
  const genres = [
    {
      slug: "elektroniskt-experimentellt",
      name: "Elektroniskt / Experimentellt",
    },
    {
      slug: "humor-scen",
      name: "Humor / Scen",
    },
    {
      slug: "jazz-folk",
      name: "Jazz / Folk",
    },
    {
      slug: "klubb-dans",
      name: "Klubb / Dans",
    },
    {
      slug: "pop-indiepop",
      name: "Pop / Indiepop",
    },
    {
      slug: "punk-metal",
      name: "Punk / Metal",
    },
    {
      slug: "rock-indierock",
      name: "Rock / Indierock",
    },
  ]
  const posts = data.allWpProgrampunkt.nodes

  const [isSelected, setIsSelected] = useState({})

  useEffect(() => {
    const isSelected = {}

    const genreNames = genres.map(category => category.slug)
    genreNames.forEach(genreName => (isSelected[genreName] = true))

    setIsSelected(isSelected)
  }, [])
  console.log(isSelected)
  return (
    <div>
      <section className="flex flex-col mb-8">
        <div className="w-full md:w-3/4 ">
          {posts
            .filter(post => isSelected[post.informationProgram.genre?.slug])
            .map(post => {
              return <ProgrampunktPageEvent key={post.id} post={post} />
            })}
        </div>
        <div className=" w-full order-first  mb-8 sticky top-0">
          <div className="bg-brandpink dark:bg-brandpurple dark:bg-opacity-50 p-4  text-white">
            <div className="flex flex-start">
              <div className="flex flex-row gap-x-4">
                {genres.map(category => {
                  return (
                    <div className="flex flex-row space-x-2 items-center">
                      <input
                        type="checkbox"
                        defaultChecked={!isSelected[category.slug]}
                        key={category.slug}
                        name={category.slug}
                        onClick={() =>
                          setIsSelected({
                            ...isSelected,
                            [category.slug]: !isSelected[category.slug],
                          })
                        }
                      />
                      <label htmlFor={category.slug}>{category.name}</label>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
