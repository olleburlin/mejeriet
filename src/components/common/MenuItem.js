import React, { useState, useRef } from "react"
import { Menu, Transition } from "@headlessui/react"
import Link from "../common/Link"

import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick"
import { ChevronDownIcon } from "@heroicons/react/solid"

export default function MenuItem({ menuItem }) {
  const dropdownRef = useRef(null)
  const [openDropdown, setOpenDropdown] = useDetectOutsideClick(
    dropdownRef,
    false
  )
  const [mouseOverButton, setMouseOverButton] = useState(false)
  const [mouseOverMenu, setMouseOverMenu] = useState(false)
  const timeoutDuration = 0
  let timeoutButton
  let timeoutMenu

  const onMouseEnterButton = () => {
    clearTimeout(timeoutButton)
    setOpenDropdown(true)
    setMouseOverButton(true)
  }
  const onMouseLeaveButton = () => {
    timeoutButton = setTimeout(() => setMouseOverButton(false), timeoutDuration)
  }

  const onMouseEnterMenu = () => {
    clearTimeout(timeoutMenu)
    setMouseOverMenu(true)
  }
  const onMouseLeaveMenu = () => {
    timeoutMenu = setTimeout(() => setMouseOverMenu(false), timeoutDuration)
  }
  const [mobileOpen, setMobileOpen] = useState(false)
  const show =
    (openDropdown && (mouseOverMenu || mouseOverButton)) || mobileOpen
  return (
    <div className="whitespace-nowrap">
      {menuItem.children.length === 0 ? (
        <Link
          className=" px-4 h-full inline-block hover:text-brandorange transition-all"
          to={menuItem.url}
        >
          {menuItem.label}
        </Link>
      ) : (
        <Menu>
          <div
            onTouchStart={() => setMobileOpen(!mobileOpen)}
            onMouseEnter={onMouseEnterButton}
            onMouseLeave={onMouseLeaveButton}
            onKeyPress={null}
            role="button"
            tabIndex="0"
            className="z-40 relative"
          >
            <Menu.Button as="div">
              <div
                className={`${
                  show ? "bg-brandorange/95 dark:bg-gray-900" : ""
                } cursor-pointer py-6 px-4   flex flex-row items-center`}
              >
                {menuItem.url !== "#" ? (
                  <Link to={menuItem.url}>
                    <div>{menuItem.label}</div>
                  </Link>
                ) : (
                  <div>{menuItem.label}</div>
                )}
                <div className="w-6">
                  <ChevronDownIcon />
                </div>
              </div>
            </Menu.Button>
          </div>
          <div className="relative">
            <Transition show={show}>
              <Menu.Items
                ref={dropdownRef}
                onMouseEnter={onMouseEnterMenu}
                onMouseLeave={onMouseLeaveMenu}
                static
                className="bg-brandorange/95  px-2 sm:px-0 z-40 absolute right-0  origin-top-right "
              >
                <div className="pr-24">
                  <div className="relative z-30  bg-third pt-12 pb-8 px-8 ">
                    <nav className="space-y-8 ">
                      {menuItem.children.map(subMenuItem => {
                        return (
                          <Menu.Item
                            as="div"
                            key={subMenuItem.id}
                            onClick={() => setOpenDropdown(false)}
                          >
                            <div className="space-y-6">
                              <div className="font-bold ">
                                <Link
                                  className="-m-3 px-3 flex items-center "
                                  to={subMenuItem.url}
                                >
                                  {subMenuItem.label}
                                </Link>
                              </div>
                              <div className="space-y-8">
                                {subMenuItem.children.map(post => {
                                  return (
                                    <div className="pl-3" key={post.id}>
                                      <Link
                                        className="-m-3 px-3 flex items-center"
                                        to={post.url}
                                      >
                                        {post.label}
                                      </Link>
                                    </div>
                                  )
                                })}
                              </div>
                            </div>
                          </Menu.Item>
                        )
                      })}
                    </nav>
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </div>
        </Menu>
      )}
    </div>
  )
}
