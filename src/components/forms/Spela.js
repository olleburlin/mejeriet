import React from "react"

export default function Musikskolan() {
  return (
    <div>
      {" "}
      <form
        action="https://getform.io/f/6a42ffec-8810-44ef-80e1-e150c75a4948"
        method="POST"
        className="form"
      >
        <div className="md:grid md:grid-cols-2 md:gap-4">
          <div>
            <label
              style={{ display: `block`, marginBottom: `4px` }}
              htmlFor="name"
            >
              För- och efternamn*
            </label>
            <input type="text" name="name" id="name" required />
          </div>
          <div>
            <label
              style={{ display: `block`, marginBottom: `4px` }}
              htmlFor="email"
            >
              Email*
            </label>
            <input name="email" id="email" type="email" required />
          </div>

          <div className="flex flex-row gap-4 items-center">
            <label
              className="order-last block relative top-1"
              style={{ display: `block`, marginBottom: `4px` }}
              htmlFor="vuxenkollo"
            >
              Vuxenkollo
            </label>
            <input
              type="checkbox"
              name="vuxenkollo"
              id="vuxenkollo"
              value="ja"
            />
          </div>
        </div>

        <div>
          <label
            style={{ display: `block`, marginBottom: `4px` }}
            htmlFor="instrument"
          >
            Instrument:
          </label>
          <input type="text" name="instrument" id="instrument" />
        </div>
        <div>
          <label
            style={{ display: `block`, marginBottom: `4px` }}
            htmlFor="address"
          >
            Adress
          </label>
          <textarea name="address" id="address" />
        </div>

        <div style={{ marginBottom: `24px` }}>
          <label
            style={{ display: `block`, marginBottom: `4px` }}
            htmlFor="extrainfo"
          >
            Övrigt:
          </label>
          <textarea name="extrainfo" id="extrainfo" />
        </div>
        <div>
          <button>Skicka in</button>
        </div>
      </form>
    </div>
  )
}
