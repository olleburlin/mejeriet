import React, { useState, useEffect, Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProgramPageEvent from "./ProgramPageEvent"
import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid"
import { getCurrentDate } from "../../utils/getCurrentDate"

export default function ProgramPage({ location }) {
  const data = useStaticQuery(graphql`
    {
      allWpProgramkategori {
        nodes {
          slug
          name
        }
      }
      allWpProgrampunkt(
        filter: { status: { eq: "publish" } }
        sort: {
          order: [ASC, ASC]
          fields: [informationProgram___startdatum, informationProgram___oppnar]
        }
      ) {
        nodes {
          title
          slug
          uri
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    aspectRatio: 1.6
                    width: 500
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
            underrubrik
            biljettlank
            covid19 {
              vaccinpass
            }

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
            status
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

  const posts = data.allWpProgrampunkt.nodes.filter(
    post => post.informationProgram.startdatum >= getCurrentDate()
  )
  let initialType = location.search.substring(5)

  const people = [
    { id: 1, name: "Visa allt", slug: "visa-allt" },
    { id: 5, name: "Konsert", slug: "konsert" },
    { id: 4, name: "Klubb / Bar", slug: "klubb" },
    { id: 3, name: "Humor/Scen", slug: "humor" },
  ]
  const [selected, setSelected] = useState(people[0])

  return (
    <div>
      <section className="flex flex-col mb-8 ">
        <div className="w-full grid gap-4 md:gap-6">
          <>
            {selected.slug === "visa-allt"
              ? posts.map(post => {
                  return <ProgramPageEvent key={post.id} post={post} />
                })
              : posts
                  .filter(
                    post =>
                      post.informationProgram.typAvArrangemang?.slug ===
                        selected.slug &&
                      post.informationProgram.startdatum > getCurrentDate()
                  )
                  .map((post, i, posts) => {
                    return <ProgramPageEvent key={i} post={post} />
                  })}
          </>
        </div>

        <div className="order-first  my-4 md:mb-8 flex flex-col items-center justify-center">
          <div className="w-72 mb-8">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-brandpurple cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500">
                  <span className="block truncate text-white">
                    {selected.name}
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                      className="w-5 h-5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute w-full  overflow-auto bg-brandpurple bg-opacity-95  ring-1 ring-brandpurple ring-opacity-5 focus:outline-none">
                    {people.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `${
                            active ? "text-brandpurple bg-white" : "text-white"
                          }
                          cursor-pointer select-none relative py-2 pl-3 pr-4 uppercase  font-heavy`
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`${selected ? "" : ""} block truncate`}
                            >
                              {person.name}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>
      </section>
    </div>
  )
}
