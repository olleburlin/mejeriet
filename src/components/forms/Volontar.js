import React from "react"
import * as Yup from "yup"
import axios from "axios"
import { Formik } from "formik"

import { navigate } from "gatsby"

const URL = "https://olleburl.in/mejeriet/wp-json"

const CF7_ID = "11130"
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

export default function Volontar() {
  const [state, setState] = React.useState(null || "")

  return (
    <>
      <h4 className="text-2xl font-heavy">Ansökan om att bli volontär</h4>
      <Formik
        initialValues={{
          yourName: "",
          email: "",
          telephone: "",
          birthyear: "",
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
            <div className="md:grid md:grid-cols-2 md:gap-4">
              <div>
                <label htmlFor="yourName">
                  För- och efternamn<span className="text-brandorange">*</span>
                  <input
                    type="text"
                    name="yourName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.yourName}
                    required
                  />
                  {errors.yourName && touched.yourName ? (
                    <div>{errors.yourName}</div>
                  ) : null}
                </label>
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
                    required
                  />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </label>
              </div>

              <div>
                <label htmlFor="telephone">
                  Telefon
                  <input
                    type="text"
                    name="telephone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.telephone}
                  />
                  {errors.telephone && touched.telephone ? (
                    <div>{errors.telephone}</div>
                  ) : null}
                </label>
              </div>
              <div>
                <label htmlFor="birthyear">
                  Födelseår
                  <input
                    type="text"
                    name="birthyear"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.birthyear}
                  />
                  {errors.birthyear && touched.birthyear ? (
                    <div>{errors.birthyear}</div>
                  ) : null}
                </label>
              </div>
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
