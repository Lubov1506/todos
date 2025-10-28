import * as yup from "yup"
import { phoneRegex } from "./regex"

export const phonesFormSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .min(2, "Should be at least 2 symbols")
    .max(15, "Too long"),
  lastName: yup
    .string()
    .required()
    .min(2, "Should be at least 2 symbols")
    .max(15, "Too long"),
  phoneNumber: yup
    .string()
    .required()
    .matches(phoneRegex, "Incorrect format, +XXX XX XX XXX "),
})
