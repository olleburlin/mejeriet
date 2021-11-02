import React from "react"
import moment from "moment"
export default function LongDate({ dateString }) {
  moment().format()
  const date = moment(dateString).format("YYYY.MM.DD")
  return <>{date}</>
}
