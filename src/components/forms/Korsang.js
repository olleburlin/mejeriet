import React from "react"

export default function Musikskolan() {
  return (
    <div>
      {" "}
      <form
        action="https://getform.io/f/8eeae96d-9a32-4247-9594-d567623a8a51"
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
              Specificera vilken kör:
            </label>
            <input type="text" name="instrument" id="instrument" />
          </div>
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
          <button>Skicka in</button>
        </div>
      </form>
    </div>
  )
}
