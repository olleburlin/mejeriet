import React, { useState } from "react"
import useDarkMode from "use-dark-mode"
import Logo from "./common/Logo"
import Link from "../components/common/Link"
import { useStaticQuery, graphql } from "gatsby"
import { Squash as Hamburger } from "hamburger-react"
import Headroom from "react-headroom"
import { flatListToHierarchical } from "../utils/flatListToHierarchical"
import MenuItem from "./common/MenuItem"
import { Disclosure } from "@headlessui/react"
import { ChevronUpIcon } from "@heroicons/react/solid"
function Header() {
  const data = useStaticQuery(graphql`
    {
      mainMenu: wpMenu(id: { eq: "dGVybToyMDU=" }) {
        id
        name
        menuItems {
          nodes {
            path
            parentId
            label
            id
            url
          }
        }
      }
      mobileMenu: wpMenu(id: { eq: "dGVybToyMzg=" }) {
        id
        name
        menuItems {
          nodes {
            path
            url
            parentId
            label
            id
          }
        }
      }
    }
  `)

  const menuItems = data.mainMenu.menuItems?.nodes
  const mobileMenuItems = data.mainMenu.menuItems?.nodes

  const desktopMenu = flatListToHierarchical(menuItems)
  const mobileMenu = flatListToHierarchical(mobileMenuItems)

  const darkMode = useDarkMode()
  const [isExpanded, toggleExpansion] = useState(false)
  return (
    <Headroom>
      <div className="bg-white">
        <header className="py-8 bg-brandpink bg-opacity-20 dark:bg-black">
          <div className="flex flex-wrap items-center justify-between max-w-screen-2xl px-4 md:px-8 mx-auto">
            <div className="flex flex-row items-center md:justify-between md:w-full">
              <div className="w-32 md:w-40 mr-12">
                <Link to="/">
                  <Logo color="" />
                </Link>
              </div>
              <nav className="text-xl  flex-row items-center font-bold uppercase hidden md:flex">
                {desktopMenu.map(menuItem => {
                  return <MenuItem key={menuItem.label} menuItem={menuItem} />
                })}
              </nav>
            </div>
            <div className="flex flex-row items-center space-x-4 ">
              <div className=" inline-block md:hidden z-50">
                <Hamburger
                  toggled={isExpanded}
                  toggle={toggleExpansion}
                  onClick={() => toggleExpansion(!isExpanded)}
                  size="32"
                  color={darkMode.value === true ? "#ffffff" : "#000000"}
                  className="z-50 relative "
                  style={{ padding: "0", margin: "0" }}
                />
              </div>
            </div>
            <div
              className={`${
                isExpanded ? `block` : `hidden`
              } fixed top-0 inset-x-0 transition transform origin-top-right z-40`}
            >
              <div className="block md:hidden bg-white dark:bg-black text-black dark:text-white min-h-screen mobilemenu  pt-4">
                <div className="max-w-screen-2xl mx-auto">
                  <div className="flex items-center justify-between px-4 h-full ">
                    <div className="w-32 md:w-40 mr-12 pt-4">
                      <Link to="/">
                        <Logo color="" />
                      </Link>
                    </div>
                  </div>
                  <div className="pt-2 pb-6 px-5 text-2xl md:text-3xl uppercase font-bold">
                    <div className="mt-6 flex flex-col justify-center h-full">
                      <div className="mt-4 space-y-4 max-w-xl w-full mx-auto">
                        {mobileMenu.map(menuItem => {
                          return (
                            <div key={menuItem.id}>
                              {menuItem.children.length === 0 ? (
                                <div className="">
                                  <Link
                                    to={menuItem.url}
                                    className="block uppercase"
                                  >
                                    {menuItem.label}
                                  </Link>
                                </div>
                              ) : (
                                <div className="" key={menuItem.id}>
                                  <Disclosure>
                                    {({ open }) => (
                                      <>
                                        <Disclosure.Button className="w-full">
                                          <div className="flex flex-row items-center justify-between w-full  overflow-hidden relative">
                                            <div>{menuItem.label}</div>
                                            <div className="w-10  overflow-hidden absolute right-0">
                                              <ChevronUpIcon
                                                className={`${
                                                  open
                                                    ? "transition-all"
                                                    : "transition-all  transform rotate-180"
                                                } `}
                                              />
                                            </div>
                                          </div>
                                        </Disclosure.Button>
                                        <Disclosure.Panel
                                          as="div"
                                          className="space-y-4 my-4 pl-2"
                                        >
                                          {menuItem.children.map(post => {
                                            return (
                                              <div key={post.id}>
                                                <Link to={post.url}>
                                                  <div
                                                    key={post.id}
                                                    className=""
                                                  >
                                                    {post.label}
                                                  </div>
                                                </Link>
                                              </div>
                                            )
                                          })}
                                        </Disclosure.Panel>
                                      </>
                                    )}
                                  </Disclosure>
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </Headroom>
  )
}

export default Header
