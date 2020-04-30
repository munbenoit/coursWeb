import React, { useRef, useState } from "react";
import { ErrorMessage, Formik, Field, Form } from "formik";
import { FormGroup, Label, Input, Row, Col, Button } from "reactstrap";
import contactFormSchema, {
  contactFormInitialValues,
  ContactFormValues,
} from "../yup/contactForm";
import TextField from "./TextField";
import sendMessage from "../services/contactService";
import ReCAPTCHA from "react-google-recaptcha";
import publicRuntimeConfig from "../config/env.config";
import ContactMessage from "./ContactMessage";

export default function ContactForm() {
  const [isOpenenedModal, setOpenModal] = useState(false);
  const [isError, setIsError] = useState(true);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  function handleOpenModal(error: boolean) {
    setIsError(error);
    setOpenModal(true);
    setTimeout(() => {
      setOpenModal(false);
    }, 3000);
  }

  async function submitForm(formValues: ContactFormValues) {
    const captcha = recaptchaRef.current.getValue();
    if (
      formValues &&
      formValues.firstname &&
      formValues.lastname &&
      formValues.email &&
      formValues.message &&
      formValues.company &&
      captcha
    ) {
      try {
        await sendMessage(formValues, captcha, new Date());
        handleOpenModal(false);
      } catch {
        handleOpenModal(true);
      }
    } else {
      handleOpenModal(true);
    }
  }

  return (
    <Formik
      initialValues={contactFormInitialValues}
      validationSchema={contactFormSchema}
      onSubmit={(fields) => submitForm(fields!)}
    >
      {({ errors, touched }) => (
        <Form>
          <Row>
            <Col md="6">
              <TextField
                label="Nom"
                name="lastname"
                isValid={!errors.lastname && !touched.lastname}
                type="text"
              ></TextField>
            </Col>
            <Col md="6">
              <TextField
                label="Prénom"
                name="firstname"
                isValid={!errors.firstname && !touched.firstname}
                type="text"
              ></TextField>
            </Col>
            <Col md="6">
              <TextField
                label="Entreprise"
                name="company"
                isValid={!errors.company && !touched.company}
                type="text"
              ></TextField>
            </Col>
            <Col md="6">
              <TextField
                label="Email"
                name="email"
                isValid={!errors.email && !touched.email}
                type="text"
              ></TextField>
            </Col>
            <Col xs="12">
              <FormGroup>
                <Field
                  component="textarea"
                  name="message"
                  id="message"
                  className="form-control"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="errorMessage"
                />
              </FormGroup>
            </Col>

            <Col>
              <FormGroup>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  size="normal"
                  sitekey={publicRuntimeConfig.NEXT_APP_RECAPTCHA_KEY}
                  className="captcha"
                ></ReCAPTCHA>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Button className="form-submit">Envoyer</Button>
              </FormGroup>
            </Col>
          </Row>
          {isOpenenedModal && <ContactMessage error={false} />}
        </Form>
      )}
    </Formik>
  );
}
