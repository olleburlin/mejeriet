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
                    # transformOptions: {
                    #   duotone: { highlight: "#e198b2", shadow: "#000000" }
                    # }
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
      slug: "humor-scen",
      name: "Humor / Scen",
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
  const types = [
    {
      slug: "humor",
      name: "Humor / Scen",
    },
    {
      slug: "film",
      name: "Film",
    },
  ]
  const posts = data.allWpProgrampunkt.nodes

  const [isSelected, setIsSelected] = useState({})
  const [clicked, toggleClicked] = useState(false)

  const handleFilter = category => {
    setIsSelected({
      ...isSelected,
      [category.slug]: !isSelected[category.slug],
    })
    toggleClicked(!clicked)
  }

  useEffect(() => {
    const isSelected = {}

    const genreNames = genres.map(category => category.slug)
    // const typeNames = types.map(category => category.slug)
    // const typesAndGenres = genreNames.concat(typeNames)
    genreNames.forEach(genreName => (isSelected[genreName] = true))

    setIsSelected(isSelected)
  }, [])

  console.log(isSelected)
  return (
    <div>
      <section className="flex flex-col mb-8">
        <div className="w-full space-y-4">
          {posts
            // .filter(
            //   post =>
            //     isSelected[post.informationProgram.genre?.slug] ||
            //     isSelected[post.informationProgram.typAvArrangemang?.slug]
            // )
            .map(post => {
              return <ProgramPageEvent key={post.id} post={post} />
            })}
        </div>
        <div className="order-first  mb-4 md:mb-8 ">
          <div className="w-full hidden">
            <div className="flex flex-row w-full flex-wrap">
              {genres.map(genre => {
                return <Genre key={genre.slug} genre={genre} />
              })}
            </div>
          </div>
          <div className="bg-brandpink text-pink-100 dark:bg-brandpurple dark:bg-opacity-50  order-1 inline-block text-sm w-full p-4">
            <div className="flex flex-row gap-x-4 space-x-2 w-full flex-wrap justify-evenly items-center">
              {genres.map(category => {
                return (
                  <div className="space-x-2 flex flex-row items-center">
                    <input
                      classname="checked:text-pink-400"
                      type="checkbox"
                      defaultChecked={isSelected}
                      data={isSelected}
                      // className={`${
                      //   clicked
                      //     ? `bg-opacity-70`
                      //     : `bg-brandpink dark:bg-brandpurple`
                      // } inline-block px-2 py-2 text-white text-xs whitespace-nowrap border  bg-brandpink dark:bg-brandpurple  hover:bg-opacity-50  flex-auto`}
                      key={category.slug}
                      id={category.slug}
                      name={category.slug}
                      onClick={() => handleFilter(category)}
                    />
                    <label classname="" for={category.slug}>
                      {" "}
                      {category.name}
                    </label>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
function Genre({ genre, clicked }) {
  return (
    <button
      className={`${
        clicked
          ? `bg-opacity-90 bg-brandpink`
          : `bg-brandpink dark:bg-brandpurple`
      } inline-block px-2 py-2 text-white text-sm whitespace-nowrap border border-white bg-brandpink dark:bg-brandpurple  hover:bg-opacity-50  flex-auto`}
    >
      {genre.name}
    </button>
  )
}
