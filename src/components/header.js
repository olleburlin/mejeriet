import React, { useState } from "react"
import DarkModeToggle from "./common/DarkModeToggle"
import useDarkMode from "use-dark-mode"
import Logo from "./common/Logo"
import Link from "../components/common/Link"
import { useStaticQuery, graphql } from "gatsby"
import { Squash as Hamburger } from "hamburger-react"
import Headroom from "react-headroom"
import { flatListToHierarchical } from "../utils/flatListToHierarchical"
import MenuItem from "./common/MenuItem"
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
          }
        }
      }
    }
  `)

  const menuItems = data.mainMenu.menuItems.nodes
  console.log(menuItems)
  const desktopMenu = flatListToHierarchical(menuItems)
  console.log(desktopMenu)
  const darkMode = useDarkMode()
  const [isExpanded, toggleExpansion] = useState(false)
  return (
    <Headroom>
      <div className="bg-white">
        <header className="py-8 bg-brandpink bg-opacity-20 dark:bg-black">
          <div className="flex flex-wrap items-center justify-between max-w-screen-2xl px-4 md:px-8 mx-auto">
            <div className="flex flex-row items-center">
              <div className="w-32 md:w-40 mr-12">
                <Link to="/">
                  <Logo color="" />
                </Link>
              </div>
              <nav className="text-xl flex flex-row items-center font-bold uppercase">
                {desktopMenu.map(menuItem => {
                  return <MenuItem key={menuItem.label} menuItem={menuItem} />
                })}
              </nav>
            </div>
            <div className="flex flex-row items-center space-x-4 ">
              <div className="pt-1 hidden md:block">
                <DarkModeToggle />
              </div>
              <div className=" inline-block z-50">
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
              } fixed top-0 inset-x-0 transition transform origin-top-right z-30`}
            >
              <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen mobilemenu text-2xl pt-4">
                <div className="flex items-center justify-between px-4 h-full">
                  <div className="w-32 mr-12 pt-4">
                    <Link to="/">
                      <Logo color="" />
                    </Link>
                  </div>
                </div>
                <div className="pt-2 pb-6 px-5 ">
                  <div className="mt-6 flex flex-col justify-center  text-center items-center h-full">
                    <div className="space-y-4 mt-4">
                      {[
                        {
                          route: `/program`,
                          title: `Program`,
                        },
                        {
                          route: `/biljetter`,
                          title: `Biljetter`,
                        },
                        {
                          route: `/mat`,
                          title: `Mat`,
                        },
                        {
                          route: `/om-mejeriet`,
                          title: `Om Mejeriet`,
                        },
                        {
                          route: `/aktuellt`,
                          title: `Aktuellt`,
                        },
                        {
                          route: `/hyra-mejeriet`,
                          title: `Hyra Mejeriet`,
                        },
                        {
                          route: `/musikskolan`,
                          title: `Musikskolan`,
                        },
                        {
                          route: `/volontar-replokaler`,
                          title: `Volontärer & Replokaler`,
                        },
                        {
                          route: `/#`,
                          title: `In English`,
                        },
                      ].map(menuItem => {
                        return (
                          <Link
                            to={menuItem.route}
                            className="block uppercase font-bold"
                          >
                            {menuItem.title}
                          </Link>
                        )
                      })}
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
