import React, { useState } from "react"
import Layout from "../components/layout"
import { navigate } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function AirtableAlt() {
  const [state, setState] = useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/api/airtable", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate("/"))
      .catch(error => alert(error))
  }
  return (
    <Layout>
      <div id="contact-form" className="bg-sixth p-8 my-16 max-w-xl mx-auto">
        <h3 className="pb-4">Contact us</h3>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="contact" value="contact" />

          <div className="flex flex-col w-full space-y-4 ">
            <div className="space-y-2 flex-1">
              <div>
                <label>Your Name: </label>
              </div>
              <div>
                <input type="text" name="name" onChange={handleChange} />
              </div>
            </div>

            <div className="space-y-2 w-full">
              <div>
                <label>Your Email: </label>
              </div>
              <div>
                <input type="email" name="email" onChange={handleChange} />
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <label>Message: </label>
              </div>
              <div>
                <textarea name="message" onChange={handleChange}></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-brandpurple block px-4 py-2  tracking-wider uppercase mt-4"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}
