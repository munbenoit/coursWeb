import React from "react";
import { Jumbotron, Container } from "reactstrap";
import ContactForm from "./ContactForm";

export default function Footer() {
  return (
    <footer>
      <Jumbotron className="my-0 py-0" fluid>
        <Container fluid className="content-section footer">
          <h1>Me contacter</h1>
          <ContactForm></ContactForm>
        </Container>
      </Jumbotron>
    </footer>
  );
}
