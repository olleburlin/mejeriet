import moment, { locale } from "moment"
import "moment/locale/sv"
export function getLongDate(dateString, newDate) {
  moment.locale("sv")
  const output = moment(dateString).format(newDate)

  return output
}
