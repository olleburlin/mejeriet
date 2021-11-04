import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProgrampunktPageEvent from "./ProgramPunktPageEvent"
import IsoTopeGrid from "react-isotope"

// const filtersDefault = [
//   {
//     label: "elektroniskt-experimentellt",
//     name: "Elektroniskt / Experimentellt",
//     isChecked: true,
//   },
//   {
//     label: "humor-scen",
//     name: "Humor / Scen",
//     isChecked: true,
//   },
//   {
//     label: "jazz-folk",
//     name: "Jazz / Folk",
//     isChecked: true,
//   },
//   {
//     label: "klubb-dans",
//     name: "Klubb / Dans",
//     isChecked: true,
//   },
//   {
//     label: "pop-indiepop",
//     name: "Pop / Indiepop",
//     isChecked: true,
//   },
//   {
//     label: "punk-metal",
//     name: "Punk / Metal",
//     isChecked: true,
//   },
//   {
//     label: "rock-indierock",
//     name: "Rock / Indierock",
//     isChecked: true,
//   },
// ]
const filtersDefault = [
  { label: "humor-scen", isChecked: true },
  { label: "jazz-folk", isChecked: true },
  { label: "klubb-dans", isChecked: true },
  { label: "pop-indiepop", isChecked: true },
  { label: "punk-metal", isChecked: true },
]
const cardsDefault = [
  {
    id: "a",
    filter: ["humor-scen", "elektroniskt-experimentellt"],
  },
  {
    id: "b",
    filter: ["jazz-folk", "pop-indiepop"],
  },
  {
    id: "c",
    filter: ["klubb-dans", "punk-metal"],
  },
  {
    id: "d",
    filter: ["jazz-folk", "punk-metal"],
  },
  {
    id: "e",
    filter: ["klubb-dans", "pop-indiepop"],
  },
  {
    id: "f",
    filter: ["punk-metal", "klubb-dans"],
  },
]
export default function ProgramPageIsotope() {
  const [filters, updateFilters] = useState(filtersDefault)

  const onFilter = event => {
    const {
      target: { value, checked },
    } = event

    updateFilters(state =>
      state.map(f => {
        if (f.label === value) {
          return {
            ...f,
            isChecked: checked,
          }
        }

        return f
      })
    )
  }
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

  const posts = data.allWpProgrampunkt.nodes
  console.log(filters)
  return (
    <div>
      {filters.map(f => (
        <div key={`${f.label}_key`}>
          <input
            id={f.label}
            type="checkbox"
            value={f.label}
            onChange={onFilter}
            checked={f.isChecked}
          />
          <label htmlFor={f.label}>{f.label}</label>
        </div>
      ))}

      <section className="flex flex-col md:flex-row mb-8 md:space-x-8">
        <div className="w-full md:w-3/4 ">
          <div
            gridLayout={cardsDefault}
            noOfCols={1}
            unitWidth={200}
            unitHeight={100}
            filters={filters}
          >
            {cardsDefault.map(card => {
              return (
                <div key={card.id} className={`h-24 ${card.filter[0]}`}>
                  {card.id}hej
                </div>
              )
            })}
          </div>
        </div>
        <div className=" w-full md:w-1/4 order-first md:order-last mb-8 md:mb-0">
          <div className="bg-brandpurple dark:bg-opacity-50 p-4 sticky sticky-filter text-white">
            <div className="flex flex-start"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
