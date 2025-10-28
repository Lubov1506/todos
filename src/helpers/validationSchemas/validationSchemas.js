import * as yup from "yup"
import { emailRegex, ownerRegex } from "./validationRegex"
import { serviceOptions } from "../../assets/constants/petFormOption"

export const petFormSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .min(3, "Animal name can't be less than 3 symbols")
    .max(15, "Too long"),
  owner: yup
    .string()
    .required()
    .matches(ownerRegex, "Owner is incorrect format"),
  email: yup.string().required().matches(emailRegex, "Incorrect format"),
  age: yup
    .number()
    .required()
    .positive()
    .integer()
    .max(18, "Age can not be more than 18"),
  service: yup.string().required().oneOf(serviceOptions, "Choose option"),
})

export const petFormRHFSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .min(3, "Animal name can't be less than 3 symbols")
    .max(15, "Too long"),
  owner: yup
    .string()
    .required()
    .matches(ownerRegex, "Owner is incorrect format"),
  email: yup.string().required().matches(emailRegex, "Incorrect format"),
  age: yup
    .number()
    .required()
    .positive()
    .integer()
    .max(18, "Age can not be more than 18"),
  phone: yup.string().min(10, "can't be less than 10"),
  gender: yup.string().required().oneOf(['Male', 'Female'])
})
