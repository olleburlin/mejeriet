import React from "react"
import Logo from "./common/Logo"
import Markethype from "./common/Markethype"

import NewsletterForm from "./common/NewsletterForm"
import SocialIcons from "./common/SocialIcons"

export default function Footer() {
  return (
    <footer className="bg-brandpurple/50 py-8 md:py-16  text-lg text-white">
      <div className="flex flex-col lg:flex-row mx-auto items-center justify-center md:px-8 space-y-4 md:space-y-0">
        <div className="flex flex-row w-full justify-between items-center px-4">
          <div className="w-40">
            <Logo color="" />
          </div>
          <div className="md:flex-1 text-left">
            <p>
              Kulturmejeriet
              <br /> Stora Södergatan 64 <br />
              222 23 Lund
            </p>
            <p className="-ml-3">
              {" "}
              <SocialIcons fill="#ffffff" />
            </p>
          </div>
        </div>

        <div className="md:flex-none w-full md:w-auto px-4 ">
          <p className="text-center pb-4 hidden">
            Prenumerera på vårat nyhetsbrev
          </p>
          <Markethype />
        </div>
        <div className="md:flex-1 flex flex-row justify-end order-first md:order-last">
          <div className="w-40 pb-4 md:pb-0 hidden md:block">
            <Logo color="" />
          </div>
        </div>
      </div>
    </footer>
  )
}
