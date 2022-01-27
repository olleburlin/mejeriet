import React from "react"
import * as Yup from "yup"
import axios from "axios"
import { Formik } from "formik"
import { getCurrentDate } from "../../utils/getCurrentDate"
import { navigate } from "gatsby"
import styled from "@emotion/styled"
const Input = styled.input`
  @apply text-red;
`
const Label = styled.label`
  @apply flex flex-col text-4xl;
`

const URL = "https://olleburl.in/mejeriet/wp-json"

const CF7_ID = "9494"
// [yourName][organisation][email][telefon][eventDate][guests][additionalInfo]
// const formSchema = Yup.object().shape({
//   yourName: Yup.string().required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
// })

function convertJsontoUrlencoded(obj) {
  let str = []
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
    }
  }
  return str.join("&")
}

export default function HyraMejeriet() {
  const [state, setState] = React.useState(null || "")

  return (
    <>
      <Formik
        initialValues={{
          yourName: "",
          email: "",
          organisation: "",
          telefon: "",
          eventDate: getCurrentDate(),
          eventDateExtra: "",
          guests: "",
          catering: "",
          tech: "",
          additionalInfo: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          const submitData = async () => {
            try {
              const result = await axios({
                url: `${URL}/contact-form-7/v1/contact-forms/${CF7_ID}/feedback`,
                headers: {
                  "Content-Type":
                    "application/x-www-form-urlencoded; charset=utf-8",
                },
                method: "POST",
                data: convertJsontoUrlencoded(values),
              })

              setSubmitting(false)
              console.log(result.data.message)
              navigate("/success")
            } catch (error) {
              setState("Misslyckades. Testa att skicka igen.")
              console.log(error)
            }
          }
          submitData()
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className="form" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="yourName">
                För- och efternamn<span className="text-brandorange">*</span>
                <Input
                  type="text"
                  name="yourName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.yourName}
                />
                {errors.yourName && touched.yourName ? (
                  <div>{errors.yourName}</div>
                ) : null}
              </Label>
            </div>
            <div>
              <label htmlFor="email">
                E-post<span className="text-brandorange">*</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
              </label>
            </div>
            <div>
              <label htmlFor="organisation">
                Organisation<span className="text-brandorange">*</span>
                <input
                  type="text"
                  name="organisation"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.organisation}
                />
                {errors.organisation && touched.organisation ? (
                  <div>{errors.organisation}</div>
                ) : null}
              </label>
            </div>
            <div>
              <label htmlFor="telefon">
                Telefon
                <input
                  type="text"
                  name="telefon"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.telefon}
                />
                {errors.telefon && touched.telefon ? (
                  <div>{errors.telefon}</div>
                ) : null}
              </label>
            </div>
            <div>
              <label htmlFor="eventDate">
                Önskat datum<span className="text-brandorange">*</span>
                <input
                  type="date"
                  name="eventDate"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.eventDate}
                />
                {errors.eventDate && touched.eventDate ? (
                  <div>{errors.eventDate}</div>
                ) : null}
              </label>
            </div>
            <div>
              <label htmlFor="eventDateExtra">
                Önskar du hyra fler datum, vänligen specificera nedan
                <textarea
                  name="eventDateExtra"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.eventDateExtra}
                />
                {errors.eventDateExtra && touched.eventDateExtra ? (
                  <div>{errors.eventDateExtra}</div>
                ) : null}
              </label>
            </div>
            <div>
              <label htmlFor="guests">
                Antal deltagare<span className="text-brandorange">*</span>
                <input
                  type="text"
                  name="guests"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.guests}
                />
                {errors.guests && touched.guests ? (
                  <div>{errors.guests}</div>
                ) : null}
              </label>
            </div>
            <div>
              <label htmlFor="catering">
                Önskemål om catering
                <textarea
                  name="catering"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.catering}
                />
                {errors.catering && touched.catering ? (
                  <div>{errors.catering}</div>
                ) : null}
              </label>
            </div>
            <div>
              <label htmlFor="tech">
                Önskemål om teknik
                <textarea
                  name="tech"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tech}
                />
                {errors.tech && touched.tech ? <div>{errors.tech}</div> : null}
              </label>
            </div>
            <div>
              <label htmlFor="additionalInfo">
                Beskriv ditt arrangemang så detaljerat du kan
                <span className="text-brandorange">*</span>
                <textarea
                  name="additionalInfo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.additionalInfo}
                />
                {errors.additionalInfo && touched.additionalInfo ? (
                  <div>{errors.additionalInfo}</div>
                ) : null}
              </label>
            </div>
            <p className="text-brandorange text-sm">*Obligatoriska fält</p>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="opacity-75">Skickar</span>
              ) : (
                "Skicka"
              )}
            </button>
          </form>
        )}
      </Formik>

      {state ? <p>{state}</p> : null}
    </>
  )
}
