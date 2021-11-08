import React from "react"
import moment from "moment"

export default function Weekday({ dateString }) {
  moment().format()
  const date = moment(dateString).format("dddd")
  return <>{date}</>
}
