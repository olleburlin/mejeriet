import React from "react"
import Logo from "./common/Logo"
import Markethype from "./common/Markethype"

import NewsletterForm from "./common/NewsletterForm"

export default function Footer() {
  return (
    <footer className="bg-brandpurple/50 py-8 md:py-16  text-lg text-white">
      <div className="flex flex-col md:flex-row mx-auto items-center justify-center md:px-8 space-y-4 md:space-y-0">
        <div className="md:flex-1 text-left">
          Kulturmejeriet
          <br /> Stora Södergatan 64 <br />
          222 23 Lund
        </div>
        <div className="md:flex-none w-full md:w-auto px-4 ">
          <p className="text-center pb-4">Prenumerera på vårat nyhetsbrev</p>
          <Markethype />
        </div>
        <div className="md:flex-1 flex flex-row justify-end order-first md:order-last">
          <div className="w-40 pb-4 md:pb-0">
            <Logo color="" />
          </div>
        </div>
      </div>
    </footer>
  )
}
