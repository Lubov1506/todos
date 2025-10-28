import { formatDistanceToNow } from "date-fns"
import { enUS } from "date-fns/locale"

export const dateToLocal = (date, formatDate = "dd MMM yyyy") => {
  return formatDistanceToNow(date, { addSuffix: true, locale: enUS  })
}
