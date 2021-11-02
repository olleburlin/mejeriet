import React from "react";
import moment from "moment";

export default function MomentDate({ dateString, newDate }) {
  const output = moment(dateString).format(newDate);

  return <>{output}</>;
}
