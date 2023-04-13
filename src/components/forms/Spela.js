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
          <div>
            <label
              style={{ display: `block`, marginBottom: `4px` }}
              htmlFor="telefon"
            >
              Telefonnummer*
            </label>
            <input type="text" name="telefon" id="telefon" required />
          </div>

          <div className="col-span-2">
            Fyll i nedan om du är intresserad av att vara med på våra
            Vuxenkollon som arrangeras under sommaren eller om din anmälan avser
            terminsundervisning i ett av våra Spela För Livet-band.
          </div>
          <div className="flex flex-col md:flex-row gap-x-2 md:gap-4  col-span-2">
            <div className="inline-flex gap-x-2">
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
            <div className="inline-flex gap-x-2">
              <label
                className="order-last block relative top-1"
                style={{ display: `block`, marginBottom: `4px` }}
                htmlFor="terminsundervisning"
              >
                Terminsundervisning
              </label>
              <input
                type="checkbox"
                name="terminsundervisning"
                id="terminsundervisning"
                value="ja"
              />
            </div>
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
