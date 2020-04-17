import React from "react";
import Carousel from "../components/Carousel";

const scolarItems = [
  {
    index: 1,
    title: "Bacalauréat Scientifique, Mention Bien",
    description: "",
    location: "Lycée Ambroise Brugière, Clermont-Ferrand",
    date: "2015",
    details: [
      "Mention européenne en Espagnol avec certification Cervantès",
      "Spécialité: Informatique et sciences du numérique",
    ],
  },
  {
    index: 2,
    title: "Licence d'informatique et DU Prep'ISIMA",
    description:
      "Cursus préparatoire pour une entrée directe à l'ISIMA suivi conjointement avec 2 années de licence en informatique.",
    location: "UCA, Clermont-Ferrand",
    date: "2015-2017",
    details: [
      "développement Web",
      "développement Java, Python, C",
      "Algorithmique",
      "Projet: Développement d'une application mobile permettant le contrôle d'un robot wifibot",
    ],
  },
  {
    index: 3,
    title: "Diplôme d'ingénieur en informatique",
    description: "Filière: Réseau et Sécurité (certifiée SecnumEdu)",
    location: "ISIMA, Clermont-Ferrand",
    date: "2017-2020",
    details: [
      "Développement Java, C, C++",
      "Développement d'application mobile (Swift et Android)",
      "Cloud Computing avec Microsoft Azure",
      "Etude de Malware",
      "Sécurité liée à l'IOT",
      "Projet: Reconnaisance de caractères par un réseau neuronnal avec Tensorflow",
      "Projet: Etude du fonctionnement du Bluetooth",
      "3ème année suivie en Alternance au sein de la société Agaetis",
    ],
  },
];

const professionalItems = [
  {
    index: 1,
    title: "Alternance 3ème année",
    description: "3ème année du cursus Ingénieur en alternance",
    location: "société Agaetis, Aubière",
    date: "2019-2020",
    details: [
      "Développement Web: React/NextJS, Typescript, Google API (Gmail/Captcha)",
      "Visualisation de données: Leaflet, Plotly",
      "Outils de développement: Git, Gitkraken, AWS Lightsail, Docker",
      "Base de données: PostgreSQL avec Postgis",
    ],
  },
  {
    index: 2,
    title: "Stage de 2ème année ISIMA",
    description: "Stage prévu par le cursus d'ingénieur",
    location: "société Agaetis, Aubière",
    date: "2019",
    details: [
      "Développement Web: React/NextJS, Typescript, Material UI",
      "Outils de développement: Git, Gitkraken, Azure Devops, Docker",
      "Architecture: CQRS/Event Sourcing",
    ],
  },

  {
    index: 3,
    title: "Travail en interim",
    description: "Technicien en broyage de pneumatiques",
    location: "Procar Récygom, Joze",
    date: "2015-2018",
    details: [
      "Utilisation et maintenance d'un broyeur de pneumatiques",
      "Traitement de données logistiques avec Excel",
      "Préparation d'audits internes",
    ],
  },
];

const hobbiesItems = [
  {
    index: 1,
    title: "Sports en tout genres",
    description: "",
    location: "",
    date: "2006-",
    details: [
      "Pratique du football depuis 2006 (Clermont Foot jusqu'en 2010)",
      "Ceinture noire 1dan de karaté au Gorinkan (Clermont-Ferrand)",
      "Cardio et course à pied",
    ],
  },
  {
    index: 2,
    title: "Jeux de stratégies et jeux vidéos",
    description: "",
    location: "",
    date: "depuis Toujours",
    details: [
      "Grand passionné des jeux Pokemon",
      "Participation à différents tournois organisés par le BDE (League of Legends)",
      "Jeu de go: membre de la Fédération Française de Go (2kyu)",
    ],
  },
];

export default function cv() {
  return (
    <div className="cv-container">
      <div data-spy="scroll" data-target="#test">
        <div className="cv-section">
          <h1 className="cv-section-title">Expérience professionnelle</h1>
          <Carousel id="professional" items={professionalItems}></Carousel>
        </div>
        <div className="cv-section">
          <h1 className="cv-section-title">Parcours scolaire</h1>
          <Carousel id="scolar" items={scolarItems}></Carousel>
        </div>
        <div className="cv-section">
          <h1 className="cv-section-title">Centres d'intérêt</h1>
          <Carousel id="hobbies" items={hobbiesItems}></Carousel>
        </div>
      </div>
    </div>
  );
}
