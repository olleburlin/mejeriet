import React from "react"
import Logo from "./common/Logo"

import NewsletterForm from "./common/NewsletterForm"

export default function Footer() {
  return (
    <footer className="bg-brandpurple py-8 md:py-16  text-lg">
      <div className="flex flex-row mx-auto items-center justify-center md:px-8 ">
        <div className="md:flex-1 text-left">
          Kulturmejeriet
          <br /> Stora Södergatan 64 <br />
          222 23 Lund
        </div>
        <div className="md:flex-1 hidden md:block">
          <NewsletterForm />
        </div>
        <div className="md:flex-1 flex flex-row justify-end order-first md:order-last">
          <div className="w-40">
            <Logo color="" />
          </div>
        </div>
      </div>
    </footer>
  )
}
