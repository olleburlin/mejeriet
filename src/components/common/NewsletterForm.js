import React from "react"

export default function NewsletterForm() {
  return (
    <div>
      <form
        id="newsletter"
        name="fpren"
        onsubmit="return ValidateForm()"
        action="https://newsletter.paloma.se//register/"
        method="get"
        className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0"
      >
        <input type="hidden" name="distlistkey" value="36210" />
        <input type="hidden" name="gora" value="pren" />
        <input
          type="hidden"
          name="tacksida"
          value="https://kulturmejeriet.se/tack/"
        />
        <input
          type="text"
          name="namn"
          placeholder="Namn"
          className="  border-transparent flex-1 appearance-none border  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        />
        <input
          type="email"
          name="email"
          placeholder="E-post"
          className="  border-transparent flex-1 appearance-none border  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        />
        <div className="hidden">
          Lämna följande fält tomt
          <input
            type="text"
            name="donotfill"
            autocomplete="new-password"
            tabindex="-1"
          />
        </div>
        <button
          className="flex-shrink-0 bg-brandorange hover:bg-opacity-80 text-white text-base font-semibold py-3 px-4  focus:outline-none focus:ring-2 focus:ring-offset-2 "
          type="submit"
        >
          Prenumerera
        </button>
      </form>
    </div>
  )
}
