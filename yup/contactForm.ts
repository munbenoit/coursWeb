import Yup from "../config/yupConfig";

export interface ContactFormValues {
  lastname: string;
  firstname: string;
  company: string;
  email: string;
  message: string;
}

export const contactFormInitialValues = {
  lastname: "",
  firstname: "",
  company: "",
  email: "",
  message: "",
};

const contactFormSchema = Yup.object().shape({
  lastname: Yup.string().required(),
  firstname: Yup.string().required(),
  company: Yup.string().required(),
  email: Yup.string().required().email(),
  message: Yup.string().required(),
});

export default contactFormSchema;
