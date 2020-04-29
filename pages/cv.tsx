import React from "react";
import Hero from "../components/Hero";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import clsx from "clsx";

import CvCard from "../components/CvCard";
import Footer from "../components/Footer";

const scolarItems = [
  {
    index: 1,
    title: "Baccalauréat Scientifique, Mention Bien",
    description:
      "Mention européenne en Espagnol avec certification Cervantès et spécialité Informatique et sciences du numérique au lycée Ambroise Brugière (Clermont-Ferrand)",
    location: "Lycée Ambroise Brugière, Clermont-Ferrand",
    date: "2015",
    details: [
      "Mention européenne en Espagnol avec certification Cervantès",
      "Spécialité: Informatique et sciences du numérique",
    ],
    img: "../static/assets/images/webdev.jpg",
  },
  {
    index: 2,
    title: "Licence d'informatique et DU Prep'ISIMA",
    description:
      "Cursus préparatoire pour une entrée directe à l'ISIMA suivi conjointement avec 2 années de licence en informatique à l'UCA (Clermont-Ferrand).",
    location: "UCA, Clermont-Ferrand",
    date: "2015-2017",
    details: [
      "développement Web",
      "développement Java, Python, C",
      "Projet: application de contrôle robot wifibot",
    ],
    img: "../static/assets/images/prepisima2.png",
  },
  {
    index: 3,
    title: "Diplôme d'ingénieur en informatique",
    description:
      "Etudiant à L'ISIMA (Clermont-Ferrand), dans la filière Réseau et Sécurité (certifiée SecnumEdu) et dernière année réalisée en alternance au sein d'Agaetis.",
    location: "ISIMA, Clermont-Ferrand",
    date: "2017-2020",
    details: [
      "Développement Swift et Android",
      "Sécurité liée à l'IOT",
      "Projet: Reconnaisance de caractères avec Tensorflow",
      "Projet: Etude du fonctionnement du Bluetooth",
    ],
    img: "../static/assets/images/bde_isima2.png",
  },
];

const professionalItems = [
  {
    index: 1,
    title: "Alternance 3ème année",
    description:
      "3ème année du cursus Ingénieur en alternance en tant que développeur web à Agaetis.",

    date: "2019-2020",
    img: "../static/assets/images/webdev.jpg",
  },
  {
    index: 2,
    title: "Stage de 2ème année ISIMA",
    description:
      "Stage prévu par le cursus d'ingénieur en tant que développeur web à Agaetis.",

    date: "2019",
    img: "../static/assets/images/webdev.jpg",
  },

  {
    index: 3,
    title: "Travail en interim",
    description:
      "Emploi durant les vacances scolaires, technicien en broyage de pneumatiques",
    date: "2015-2018",
    img: "../static/assets/images/tire.jpg",
  },
];

const hobbiesItems = [
  {
    index: 1,
    title: "Sports en tout genres",
    description:
      "Pratique du football depuis 2006, ceinture noire 1dan de karaté, cardio et course à pied",
    location: "",
    date: "2006-",
    img: "../static/assets/images/sport.jpg",
  },
  {
    index: 2,
    title: "Jeux de stratégies et jeux vidéos",
    description:
      "Grand passionné des jeux Pokemon, membre de la Fédération française de Go (2kyu)",
    location: "",
    date: "depuis Toujours",
    img: "../static/assets/images/game of go.jpg",
  },
];

const skillsItems = [
  {
    index: 1,
    title: "Développement web",
    details: [
      {
        techno: "ReactJS",
        img: "../static/assets/images/reactjs.png",
        logoClassName: "reactjs",
      },
      {
        techno: "HTML/CSS/JS",
        img: "../static/assets/images/html-css-js.png",
        logoClassName: "html-css-js",
      },
      {
        techno: "Typescript",
        img: "../static/assets/images/Typescript_Logo.png",
        logoClassName: "typescript",
      },

      {
        techno: "Node JS",
        img: "../static/assets/images/nodejs.png",
        logoClassName: "nodejs",
      },
    ],
  },
  {
    index: 2,
    title: "Programmation",
    details: [
      {
        techno: "Java",
        img: "../static/assets/images/java.png",
        logoClassName: "",
      },
      {
        techno: "Python",
        img: "../static/assets/images/python.png",
        logoClassName: "",
      },
      {
        techno: "C/C++",
        img: "../static/assets/images/c++_pic.png",
        logoClassName: "",
      },
    ],
  },
  {
    index: 3,
    title: "Archi/Outils de dev",
    details: [
      {
        techno: "Git",
        img: "../static/assets/images/git.png",
        logoClassName: "",
      },
      {
        techno: "Azure Devops",
        img: "../static/assets/images/azure_devops.png",
        logoClassName: "",
      },
      {
        techno: "PostgreSQL",
        img: "../static/assets/images/postgre.png",
        logoClassName: "",
      },
      {
        techno: "AWS Lighsail",
        img: "../static/assets/images/aws.png",
        logoClassName: "",
      },
    ],
  },
];

export default function cv() {
  return (
    <div className="main-container">
      <div>
        <Hero
          title="Mon Parcours"
          quote="Anyone who has never made a mistake has never tried anything new."
          author="Albert Einstein"
          className="content-section hero cv-hero "
        ></Hero>
        <Jumbotron className="my-0 py-0" fluid>
          <Container fluid className="content-section">
            <h1>Experience professionnelle</h1>
            <Row>
              {professionalItems.map((item) => (
                <Col md="4">
                  <CvCard
                    img={item.img}
                    title={item.title}
                    text={item.description}
                    className="card"
                    date={item.date}
                  ></CvCard>
                </Col>
              ))}
            </Row>
          </Container>
          <Container fluid className="content-section">
            <h1>Parcours scolaire</h1>
            <Row>
              {scolarItems.map((item) => (
                <Col md="4">
                  <CvCard
                    img={item.img}
                    title={item.title}
                    text={item.description}
                    className="card"
                    date={item.date}
                  ></CvCard>
                </Col>
              ))}
            </Row>
          </Container>
          <Container fluid className="content-section">
            <h1>Compétences</h1>
            <Row>
              {skillsItems.map((item) => (
                <Col md="4">
                  <h2 className="skills-title">{item.title}</h2>
                  <ul className="skills-list">
                    {item.details.map((detail, index) => (
                      <li
                        className={clsx(
                          index % 2 == 0 ? "regular" : "reversed"
                        )}
                      >
                        {detail.img != "" && (
                          <img
                            src={detail.img}
                            className={detail.logoClassName}
                          ></img>
                        )}
                        <div>{detail.techno}</div>
                      </li>
                    ))}
                  </ul>
                </Col>
              ))}
            </Row>
          </Container>
          <Container fluid className="content-section">
            <h1>Centres d'intérêts</h1>
            <Row>
              {hobbiesItems.map((item) => (
                <Col md="4">
                  <CvCard
                    img={item.img}
                    title={item.title}
                    text={item.description}
                    className="card"
                    date={item.date}
                  ></CvCard>
                </Col>
              ))}
            </Row>
          </Container>
        </Jumbotron>
        <Footer></Footer>
      </div>
    </div>
  );
}
