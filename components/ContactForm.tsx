import React from "react";
import { Form, FormGroup, Label, Input, Row, Col, Button } from "reactstrap";

export default function ContactForm() {
  return (
    <Form>
      <Row>
        <Col md="6">
          <FormGroup>
            <Label for="lastname">Nom</Label>
            <Input id="lastname" />
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <Label for="firstname">Prénom</Label>
            <Input id="firstname" />
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <Label for="company">Entreprise</Label>
            <Input id="company" />
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <Label for="mail">Mail</Label>
            <Input id="mail" />
          </FormGroup>
        </Col>
        <Col xs="12">
          <FormGroup>
            <Label for="message">Votre message</Label>
            <Input type="textarea" name="text" id="message" />
          </FormGroup>
        </Col>
        <Col>
          <Button className="form-submit">Envoyer</Button>
        </Col>
      </Row>
    </Form>
  );
}
