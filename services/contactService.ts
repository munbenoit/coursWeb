import axios from "axios";
import publicRuntimeConfig from "../config/env.config";
import { ContactFormValues } from "../yup/contactForm";
import sha256 from "js-sha256";

export default async function sendMessage(
  formValues: ContactFormValues,
  captcha: string,
  date: Date
) {
  const content = formatContent(
    formValues.message,
    formValues.firstname + " " + formValues.lastname,
    formValues.email,
    formValues.company
  );

  const key = Buffer.from(
    formValues.firstname +
      formValues.lastname +
      publicRuntimeConfig.NEXT_APP_CONTACT_SALT +
      formValues.email +
      content +
      date.getTime() +
      captcha,
    "base64"
  );

  return axios({
    method: "post",
    url: `${publicRuntimeConfig.NEXT_APP_SERVER_URL}/send`,
    headers: {},
    data: {
      firstname: formValues.firstname,
      lastname: formValues.lastname,
      company: formValues.company,
      email: formValues.email,
      message: formValues.message,
      content: formatContent(
        formValues.message,
        formValues.firstname + " " + formValues.lastname,
        formValues.email,
        formValues.company
      ),
      captcha,
      date: date.getTime(),
      hash: sha256.sha256(key),
    },
  });
}

const formatContent = (
  message: string,
  name: string,
  mail: string,
  company: string
) =>
  `<html><body><p>${message}</p><h3>Contact</h3><p>${name}</p><p>${mail}</p><p>${company}</p></body></html>`;
