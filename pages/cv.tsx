import React from "react";
import Carousel from "../components/Carousel";

const scolarItems = [
  {
    index: 1,
    title: "Bacalauréat Scientifique, Mention Bien",
    description: "",
    location: "Lycée Ambroise Brugière, Clermont-Ferrand",
    date: "2015",
  },
  {
    index: 2,
    title: "Licence d'informatique et DU Prep'ISIMA",
    description:
      "Cursus préparatoire pour une entrée directe à l'ISIMA suivi conjointement avec 2 années de licence en informatique.",
    location: "UCA, Clermont-Ferrand",
    date: "2015-2017",
  },
  {
    index: 3,
    title: "Diplôme d'ingénieur en informatique",
    description: "Filière: Réseau et Sécurité (certifiée SecnumEdu)",
    location: "ISIMA, Clermont-Ferrand",
    date: "2017-2020",
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
