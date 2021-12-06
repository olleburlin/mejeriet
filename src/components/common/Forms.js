import React, { useState } from "react"
import { navigate } from "gatsby-link"
export default function Forms() {
  return <div></div>
}

export function StandardForm() {
  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  const [state, setState] = useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }
  return (
    <div className="w-full form">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/success/"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="contact" value="contact" />

        <div className="flex flex-col w-full space-y-8">
          <div>
            <input
              placeholder="Namn"
              type="text"
              name="name"
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              placeholder="Meddelande"
              name="message"
              onChange={handleChange}
              rows="8"
            ></textarea>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="block bg-white  px-4 py-2 tracking-wider uppercase mt-4"
          >
            Skicka
          </button>
        </div>
      </form>
    </div>
  )
}
