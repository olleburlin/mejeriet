import React from "react"

export default function KontaktaOssAlt() {
  return (
    <div>
      <form
        action="https://formsubmit.co/burlinolle@gmail.com"
        method="POST"
        className="form"
      >
        <input type="text" name="Namn" required />
        <input type="email" name="Epost" required />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
