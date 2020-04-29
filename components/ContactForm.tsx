import React from "react";
import { ErrorMessage, Formik, Field, Form } from "formik";
import { FormGroup, Label, Input, Row, Col, Button } from "reactstrap";
import contactFormSchema, {
  contactFormInitialValues,
  ContactFormValues,
} from "../yup/contactForm";
import TextField from "./TextField";

function submitForm(formValues: ContactFormValues) {
  console.log({ ...formValues });
}

export default function ContactForm() {
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
              <Button className="form-submit">Envoyer</Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
}
