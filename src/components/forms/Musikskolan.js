import React from "react"

export default function Musikskolan() {
  return (
    <div>
      {" "}
      <form action="/api/airtable" method="POST" className="form">
        <div>
          <label
            style={{ display: `block`, marginBottom: `4px` }}
            htmlFor="name"
          >
            För- och efternamn:
          </label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label
            style={{ display: `block`, marginBottom: `4px` }}
            htmlFor="email"
          >
            Email:
          </label>
          <input name="email" id="email" type="email" />
        </div>
        <div>
          <label
            style={{ display: `block`, marginBottom: `4px` }}
            htmlFor="guardian"
          >
            Målsman:
          </label>
          <input type="text" name="guardian" id="name" />
        </div>
        <div>
          <label
            style={{ display: `block`, marginBottom: `4px` }}
            htmlFor="guardianemail"
          >
            Målsmans email:
          </label>
          <input name="guardianemail" id="guardianemail" type="email" />
        </div>
        <div>
          <label
            style={{ display: `block`, marginBottom: `4px` }}
            htmlFor="telephone"
          >
            Telefon:
          </label>
          <input type="text" name="telephone" id="telephone" />
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
            htmlFor="birthyear"
          >
            Födelseår:
          </label>
          <input type="text" name="birthyear" id="birthyear" />
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
          <button>Submit new person</button>
        </div>
      </form>
    </div>
  )
}
