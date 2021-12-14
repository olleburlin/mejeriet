import React from "react"

export default function NewsletterForm() {
  return (
    <div>
      <form className="flex items-center w-full space-x-3">
        <div className=" relative w-3/4 ">
          <input
            type="text"
            className=" rounded-sm border-transparent flex-1 appearance-none border  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Namn"
          />
        </div>
        <div className=" relative w-3/4 ">
          <input
            type="text"
            className=" rounded-sm border-transparent flex-1 appearance-none border  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Email"
          />
        </div>
        <div className="flex-none">
          <button
            className="flex-shrink-0 bg-brandteal text-white text-base font-semibold py-3 px-4 rounded-sm shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
            type="submit"
          >
            Prenumerera
          </button>
        </div>
      </form>
    </div>
  )
}
