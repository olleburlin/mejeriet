const Airtable = require("airtable")

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  //Your API Key from Airtable
  apiKey: "keyK3ijQjPE6ysyRn",
})

// Your Table ID from Airtable
const db = Airtable.base("appyAa5uJszIRfvMU")

const handler = (req, res) => {
  try {
    if (req.method !== "POST") {
      return res.status(404).json({ message: "This endpoint requires a POST" })
    }

    const data = req.body

    if (!data) {
      return res.status(500).json({ error: "There isn't any data." })
    }

    db("Mejeriet").create(
      [
        {
          fields: {
            Name: data.name,
            Email: data.email,
            Guardian: data.guardian,
            GuardianEmail: data.guardianemail,
            Telephone: data.telephone,
            Address: data.address,
            Instrument: data.instrument,
            BirthYear: data.birthyear,
            ExtraInfo: data.extrainfo,
          },
        },
      ],
      (err, records) => {
        if (err) {
          res.json({
            message: "Error adding record to Airtable.",
            error: err.message,
          })
        } else {
          res.json({ message: `Successfully submitted message` })
        }
      }
    )
  } catch (err) {
    console.log(err)
    res.json({ message: "There has been a big error.", error: err })
  }
}

module.exports = handler
