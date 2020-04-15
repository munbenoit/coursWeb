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
    index: 2,
    title: "Alternance 3ème année",
    description: "3ème année du cursus Ingénieur en alternance",
    location: "société Agaetis, Aubière",
    date: "2019-2020",
    details: [
      "Développement Web: React/NextJS, Typescript, Google API (Gmail/Captcha)",
      "Outils de développement: Git, Gitkraken, AWS Lightsail, Docker",
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

export default function cv() {
  return (
    <>
      <div className="cv-section">
        <h1 className="cv-section-title">Expérience professionnelle</h1>
        <Carousel items={professionalItems}></Carousel>
      </div>
      <div className="cv-section">
        <h1 className="cv-section-title">Parcours scolaire</h1>
        <Carousel items={scolarItems}></Carousel>
      </div>
    </>
  );
}
