import React from "react"
import moment from "moment"

export default function LongDate({ dateString }) {
  moment().locale("sv")
  const date = moment(dateString).format("LL")

  return <>{date}</>
}
