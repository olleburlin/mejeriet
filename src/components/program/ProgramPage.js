import React, { useState, useEffect, Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProgramPageEvent from "./ProgramPageEvent"

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

  const types = data.allWpProgramkategori.nodes
  const posts = data.allWpProgrampunkt.nodes
  // const [selected, setSelected] = useState(types[0])

  const [isSelected, setIsSelected] = useState(
    types.map(category => category.slug)
  )

  // function handleChange(selected) {
  //   console.log(selected)
  //   setSelected(selected)
  // }
  const [items] = React.useState(types)
  console.log(types)
  return (
    <div>
      <section className="flex flex-col mb-8">
        <div className="w-full space-y-8">
          {posts
            .filter(post =>
              isSelected.includes(
                post.informationProgram.typAvArrangemang?.slug
              )
            )
            .map(post => {
              return <ProgramPageEvent key={post.id} post={post} />
            })}
        </div>
        <div className="order-first  mb-4 md:mb-8 ">
          <div className="">
            {/* <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                  <span className="block truncate">{selected.name}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                      className="w-5 h-5 text-gray-400"
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
                  <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    <Listbox.Option
                      value="all"
                      className="  cursor-default select-none relative py-2 pl-10 pr-4"
                    >
                      Visa Allt
                    </Listbox.Option>
                    {types.map((category, i) => (
                      <Listbox.Option
                        key={i}
                        className={({ active }) =>
                          `${
                            active
                              ? "text-amber-900 bg-amber-100"
                              : "text-gray-900"
                          }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                        }
                        value={category}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`${
                                selected ? "font-medium" : "font-normal"
                              } block truncate`}
                            >
                              {category.name}
                            </span>
                            {selected ? (
                              <span
                                className={`${
                                  active ? "text-amber-600" : "text-amber-600"
                                }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                              >
                                <CheckIcon
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox> */}
          </div>
          <div className="flex flex-row gap-4 ">
            <div className="order-1 inline-block text-xl w-full">
              {" "}
              <div className="flex flex-row items-center justify-center w-full">
                <div className="flex flex-row items-center bg-brandorange">
                  <select
                    className="cursor-pointer py-2 px-4 w-full bg-brandorange text-white appearance-none  before:text-black border-none focus:none outline-none uppercase font-heavy"
                    onChange={e => setIsSelected(e.currentTarget.value)}
                  >
                    <option value={types.map(category => category.slug)}>
                      Visa Allt
                    </option>
                    {items.map(category => {
                      return (
                        <option
                          value={category.slug}
                          key={category.slug}
                          id={category.slug}
                          name={category.slug}
                        >
                          {category.name}
                        </option>
                      )
                    })}
                  </select>
                  <div className="pr-4 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
