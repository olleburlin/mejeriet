import React from "react"
import Logo from "./common/Logo"
import karta from "../images/karta.svg"
import NewsletterForm from "./common/NewsletterForm"

export default function Footer() {
  return (
    <footer className="bg-brandpurple dark:bg-opacity-50 py-8 md:py-16 text-pink-100 text-lg">
      <div className="flex flex-col md:flex-row mx-auto items-center justify-center px-8 ">
        <div className="flex-1 text-left ">
          Kulturmejeriet
          <br /> Stora Södergatan 64 <br />
          222 23 Lund
        </div>
        <div className="flex-1 hidden md:block">
          <NewsletterForm />
        </div>
        <div className="flex-1 flex flex-row justify-end">
          <div className="w-40">
            <Logo color="" />
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col items-center justify-center my-16">
        <div className="w-1/3">
          <img src={karta} />
        </div>
      </div> */}
    </footer>
  )
}
