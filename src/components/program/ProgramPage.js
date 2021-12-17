import React, { useState, useEffect, Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProgramPageEvent from "./ProgramPageEvent"
import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid"
export default function ProgramPage() {
  const data = useStaticQuery(graphql`
    {
      allWpProgramkategori {
        nodes {
          slug
          name
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

  const posts = data.allWpProgrampunkt.nodes

  const people = [
    { id: 1, name: "Visa allt", slug: "visa-allt" },
    { id: 2, name: "Bar", slug: "bar" },
    { id: 3, name: "Film", slug: "film" },
    { id: 4, name: "Humor Scen", slug: "humor" },
    { id: 5, name: "Klubb", slug: "klubb" },
    { id: 6, name: "Konsert", slug: "konsert" },
  ]
  const [selected, setSelected] = useState(people[0])
  console.log(selected)
  return (
    <div>
      <section className="flex flex-col mb-8">
        <div className="w-full space-y-8">
          <>
            {selected.slug === "visa-allt"
              ? posts.map(post => {
                  return <ProgramPageEvent key={post.id} post={post} />
                })
              : posts
                  .filter(
                    post =>
                      post.informationProgram.typAvArrangemang?.slug ===
                      selected.slug
                  )
                  .map(post => {
                    return <ProgramPageEvent key={post.id} post={post} />
                  })}
          </>
        </div>
        <div className="order-first  mb-4 md:mb-8 flex flex-col items-center justify-center">
          <div className="w-72 mb-8">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-brandorange cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500">
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
                  <Listbox.Options className="absolute w-full  overflow-auto bg-brandorange bg-opacity-95  ring-1 ring-brandorange ring-opacity-5 focus:outline-none">
                    {people.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `${
                            active ? "text-brandorange bg-white" : "text-white"
                          }
                          cursor-default select-none relative py-2 pl-3 pr-4 uppercase  font-heavy`
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
