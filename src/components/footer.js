import React from "react"
import Logo from "./common/Logo"
import Markethype from "./common/Markethype"

import NewsletterForm from "./common/NewsletterForm"
import SocialIcons from "./common/SocialIcons"

export default function Footer() {
  return (
    <footer className="bg-brandpurple/50 py-8 md:py-16  text-lg text-white">
      <div className="flex flex-col lg:flex-row mx-auto items-center justify-center max-w-7xl px-2 md:px-6 space-y-8 lg:space-y-0">
        <div className="flex-none lg:flex-1 flex flex-row w-full justify-between items-center px-4">
          <div className="w-40 lg:hidden">
            <Logo color="" />
          </div>
          <div className="lg:flex-1 text-left">
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

        <div className=" w-full lg:w-1/2 px-4">
          <p className="text-xl pb-4 ">Prenumerera på vårt nyhetsbrev</p>
          <Markethype />
        </div>
        <div className="md:flex-1 flex flex-row justify-end order-first md:order-last">
          <div className="w-40 pb-4 md:pb-0 hidden lg:block">
            <Logo color="" />
          </div>
        </div>
      </div>
    </footer>
  )
}
