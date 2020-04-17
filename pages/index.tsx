import React from "react";
import Hero from "../components/Hero";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import IndexCard from "../components/IndexCard";

export default function index() {
  return (
    <div className="main-container">
      <Hero
        title="Le cours de Web"
        quote="Mankind invented the atomic bomb, but no mouse would ever construct
            a mousetrap."
        author="Albert Einstein"
        className="hero index-hero index-section"
      ></Hero>
      <Jumbotron className="my-0 py-0" fluid>
        <Container fluid className="index-section">
          <h1>Mon Parcours</h1>
          <Row>
            <Col md="4">
              <IndexCard
                img="../static/assets/images/webdev.jpg"
                title="Expérience professionnelle"
                text="Découvrir mes expériences dans le monde du travail."
                link="/cv#professional"
                className="card"
              ></IndexCard>
            </Col>
            <Col md="4">
              <IndexCard
                img="../static/assets/images/study.jpg"
                title="Parcours scolaire"
                text="Tour d'horizon des sujets abordés lors de mes études."
                link="/cv#scolar"
                className="card"
              ></IndexCard>
            </Col>

            <Col md="4">
              <IndexCard
                img="../static/assets/images/game of go.jpg"
                title="Centres d'intérêt"
                text="Voyage jusqu'au bout de ma passion pour le Go."
                link="/cv#hobbies"
                className="card"
              ></IndexCard>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}
