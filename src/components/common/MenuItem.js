import React, { useState, useRef } from "react"
import { Menu, Transition } from "@headlessui/react"
import Link from "../common/Link"

import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick"

export default function MenuItem({ menuItem }) {
  const dropdownRef = useRef(null)
  const [openDropdown, setOpenDropdown] = useDetectOutsideClick(
    dropdownRef,
    false
  )
  const [mouseOverButton, setMouseOverButton] = useState(false)
  const [mouseOverMenu, setMouseOverMenu] = useState(false)
  const timeoutDuration = 200
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
    <div>
      {menuItem.children.length === 0 ? (
        <Link className=" px-4 h-full inline-block" to={menuItem.route}>
          <div>{menuItem.label}</div>
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
          >
            <Menu.Button as="a">
              <div
                className={`${
                  show ? "bg-third" : ""
                } cursor-pointer py-6 px-4 hover:bg-third `}
              >
                {menuItem.label}
              </div>
            </Menu.Button>
          </div>
          <div className="absolute">
            <Transition show={show}>
              <Menu.Items
                ref={dropdownRef}
                onMouseEnter={onMouseEnterMenu}
                onMouseLeave={onMouseLeaveMenu}
                static
                className=" z-20  px-2 w-screen max-w-xl sm:px-0 "
              >
                <div className="">
                  <div className="relative  bg-third px-4 py-8 ">
                    <nav className="space-y-8">
                      {menuItem.children.map(subMenuItem => {
                        return (
                          <Menu.Item onClick={() => setOpenDropdown(false)}>
                            <div className="space-y-6">
                              <div className="font-bold">
                                {subMenuItem.label}
                              </div>
                              <div className="space-y-8">
                                {subMenuItem.children.map(post => {
                                  return (
                                    <div className="pl-3 flex flex-row">
                                      <Link
                                        className="-m-3 px-3 flex items-center"
                                        to={post.route}
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