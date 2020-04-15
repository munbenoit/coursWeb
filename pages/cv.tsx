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

export default function cv() {
  return (
    <>
      <div className="cv-section">
        <h1 className="cv-section-title">Expérience professionnelle</h1>
        <Carousel items={scolarItems}></Carousel>
      </div>
      <div className="cv-section">
        <h1 className="cv-section-title">Parcours scolaire</h1>
        <Carousel items={scolarItems}></Carousel>
      </div>
    </>
  );
}
