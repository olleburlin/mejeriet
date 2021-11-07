import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProgramPageEvent from "./ProgramPageEvent"
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
                    aspectRatio: 1.7
                    transformOptions: {
                      duotone: { highlight: "#e198b2", shadow: "#000000" }
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
            typAvArrangemang {
              id
              slug
              name
            }
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
  const genres = [
    {
      slug: "all",
      name: "Allt",
    },
    {
      slug: "elektroniskt-experimentellt",
      name: "Elektroniskt / Experimentellt",
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
        <div className="w-full space-y-4">
          {posts.map(post => {
            return <ProgramPageEvent key={post.id} post={post} />
          })}
        </div>
        <div className="hidden md:block w-full order-first  mb-4 md:mb-8 ">
          <div className="flex flex-row flex-wrap gap-1">
            {genres.map(genre => {
              return <Genre key={genre.slug} genre={genre} />
            })}
          </div>
          <div className="hidden bg-brandpink dark:bg-brandpurple dark:bg-opacity-50 p-4  text-white">
            <div className="flex flex-start">
              <div className="flex flex-row gap-x-4">
                {genres.map(category => {
                  return (
                    <div className="flex flex-row flex-wrap space-x-2 items-center">
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
function Genre({ genre }) {
  const [clicked, toggleClicked] = useState(false)
  console.log(clicked)
  return (
    <button
      onClick={() => toggleClicked(!clicked)}
      className={`${
        clicked ? `bg-opacity-50` : `bg-brandpink dark:bg-brandpurple`
      } inline-block px-2 py-1 text-white text-xs bg-brandpink dark:bg-brandpurple  hover:bg-opacity-50`}
    >
      {genre.name}
    </button>
  )
}
