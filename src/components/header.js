import React, { useState, useLayoutEffect } from "react"
import Logo from "./common/Logo"
import Link from "../components/common/Link"
import { useStaticQuery, graphql } from "gatsby"
import { Slant as Hamburger } from "hamburger-react"
import Headroom from "react-headroom"
import { flatListToHierarchical } from "../utils/flatListToHierarchical"
import MenuItem from "./common/MenuItem"
import { Disclosure } from "@headlessui/react"
import { ChevronUpIcon } from "@heroicons/react/outline"
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
    }
  `)

  const menuItems = data.mainMenu.menuItems?.nodes
  const mobileMenuItems = data.mainMenu.menuItems?.nodes

  const desktopMenu = flatListToHierarchical(menuItems)
  const mobileMenu = flatListToHierarchical(mobileMenuItems)

  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <Headroom>
      <div className="bg-black py-6 md:py-8">
        <header id="top-header">
          <div className="  relative flex flex-wrap items-center justify-between max-w-screen-xl px-4 md:px-8 mx-auto">
            <div className="flex flex-row items-center md:justify-between lg:w-full">
              <div id="logo" className=" mr-4">
                <Link to="/">
                  <Logo color="" />
                </Link>
              </div>
              <div className="hidden lg:flex flex-row items-center">
                <nav className="text-base xl:text-xl lg:text-lg flex flex-row items-center font-bold uppercase ">
                  {desktopMenu.map(menuItem => {
                    return <MenuItem key={menuItem.label} menuItem={menuItem} />
                  })}
                </nav>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-4 ">
              <div className=" inline-block lg:hidden z-50">
                <Hamburger
                  toggled={isExpanded}
                  toggle={toggleExpansion}
                  onClick={() => toggleExpansion(!isExpanded)}
                  size="32"
                  color="white"
                  className="z-50 relative "
                  style={{ padding: "0", margin: "0" }}
                />
              </div>
            </div>
            {isExpanded && <MobileMenu menuItems={menuItems} />}
          </div>
        </header>
      </div>
    </Headroom>
  )
}

export default Header

function MobileMenu({ menuItems }) {
  useLockBodyScroll()

  const mobileMenuItems = menuItems

  const mobileMenu = flatListToHierarchical(mobileMenuItems)
  return (
    <div className="fixed top-0 left-0 overflow-x-hidden z-40 bg-black inset-0 h-screen ">
      <div className="relative h-full    text-white  pt-6 mb-32 ">
        <div className="pl-4">
          <Link to="/">
            <Logo color="" />
          </Link>
        </div>

        <div className="pt-2 pb-6 px-5 text-2xl md:text-3xl uppercase font-bold">
          <div className="mt-6 flex flex-col justify-center h-full">
            <div className="mt-4 space-y-4 max-w-xl w-full mx-auto ">
              {mobileMenu.map(menuItem => {
                return (
                  <div key={menuItem.id}>
                    {menuItem.children.length === 0 ? (
                      <div className="">
                        <Link to={menuItem.url} className="block uppercase">
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
                                className="space-y-4 my-4 pl-4"
                              >
                                {menuItem.children.map(post => {
                                  return (
                                    <div key={post.id}>
                                      <Link to={post.url}>
                                        <div key={post.id} className="">
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
  )
}

function useLockBodyScroll() {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden"
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle)
  }, []) // Empty array ensures effect is only run on mount and unmount
}
