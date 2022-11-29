import React, { useState, useEffect, Fragment } from "react"
import Link from "../common/Link"
import { useStaticQuery, graphql, navigate } from "gatsby"
import ProgramPageEvent from "./ProgramPageEvent"
import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid"
import { getCurrentDate } from "../../utils/getCurrentDate"
import { Menu } from "@headlessui/react"

export default function ProgramGenrePage({ posts, programIndex }) {
  // const people = [
  //   { id: 1, name: "Visa allt", slug: "visa-allt" },
  //   { id: 5, name: "Konsert", slug: "konsert" },
  //   { id: 4, name: "Klubb / Bar", slug: "klubb" },
  //   { id: 3, name: "Humor/Scen", slug: "humor" },
  // ]

  const links = [
    { href: "/program", label: "Visa Allt" },
    { href: "/program/konsert", label: "Konsert" },
    { href: "/program/klubb", label: "Klubb / Bar" },
    { href: "/program/humor", label: "Humor / Scen" },
    { href: "/program/film", label: "Film" },
  ]

  const [selected, setSelected] = useState(links[programIndex])

  return (
    <div>
      <section className="flex flex-col mb-8 ">
        <div className="w-full grid gap-4 md:gap-6">
          {posts.length > 0 ? (
            <>
              {posts.map(post => {
                return <ProgramPageEvent key={post.id} post={post} />
              })}
            </>
          ) : (
            <div>Inga arrangemang för denna kategorin för tillfället</div>
          )}
        </div>

        <div className="order-first  my-4 md:mb-8 flex flex-col items-center justify-center">
          <div className="w-72 mb-16 relative">
            <div className="absolute w-full">
              <Menu>
                <Menu.Button className="w-full inline-block relative  py-2 pl-3 pr-10 text-left bg-brandpurple cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500">
                  {" "}
                  <span>{selected.label}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                      className="w-5 h-5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </Menu.Button>
                <Menu.Items
                  as="div"
                  className="ring-1 ring-brandpurple ring-opacity-5 focus:outline-none"
                >
                  <div className="flex flex-col bg-brandpurple  ring-1 ring-brandpurple ring-opacity-5 focus:outline-none">
                    {links.map(link => (
                      /* Use the `active` state to conditionally style the active item. */
                      <Menu.Item
                        key={link.href}
                        as={Fragment}
                        className="cursor-pointer select-none relative py-2 pl-3 pr-4 uppercase  font-heavy hover:bg-white hover:text-brandpurple ring-1 ring-brandpurple ring-opacity-5 focus:outline-none"
                      >
                        {({ active }) => (
                          <Link
                            to={link.href}
                            className={`${
                              active
                                ? "bg-blue-500 text-white"
                                : "bg-white text-black"
                            }`}
                          >
                            {link.label}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Menu>
            </div>
            {/* <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-brandpurple cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500">
                  <span className="block truncate text-white">
                    {selected.label}
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
                    {links.map((link, i) => (
                      <Listbox.Option
                        key={i}
                        className={({ active }) =>
                          `${
                            active ? "text-brandpurple bg-white" : "text-white"
                          }
                          cursor-pointer select-none relative py-2 pl-3 pr-4 uppercase  font-heavy`
                        }
                        value={link}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`${selected ? "" : ""} block truncate`}
                            >
                              {link.label}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox> */}
          </div>
        </div>
      </section>
    </div>
  )
}
