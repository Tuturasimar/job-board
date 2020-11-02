import React from "react";
import "./App.css";

import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header label="The Job Board"></Header>
      <div className="container">
        <Jobs
          cover_color="border_red"
          title="Full Time Sales Associate - Sydney Boutique"
          contractType="CDI - "
          country="Australie - "
          city="Sydney"
        ></Jobs>
        <Jobs
          cover_color="border_green"
          title="Agent de Sécurité - Pantin"
          contractType="CDI - "
          country="France - "
          city="Pantin"
        ></Jobs>
        <Jobs
          cover_color="border_yellow"
          title="Responsable d'Atelier (H/F)"
          contractType="CDD - "
          country="France - "
          city="Paris"
        ></Jobs>
        <Jobs
          cover_color="border_blue"
          title="Chef de Projets"
          contractType="CDD - "
          country="France - "
          city="Paris"
        ></Jobs>
        <Jobs
          cover_color="border_beige"
          title="Développeur React.js"
          contractType="CDI - "
          country="France - "
          city="Paris"
        ></Jobs>
        <Jobs
          cover_color="border_red"
          title="Sales Associate Stockholm"
          contractType="CDI - "
          country="Suède - "
          city="Stockholm"
        ></Jobs>
        <Jobs
          cover_color="border_green"
          title="Vendeur/se - Crans Montana"
          contractType="CDI - "
          country="Suisse - "
          city="Crans-Montana"
        ></Jobs>
        <Jobs
          cover_color="border_yellow"
          title="CRM & Data Quality Analyst"
          contractType="CDI - "
          country="USA - "
          city="New York"
        ></Jobs>
        <Jobs
          cover_color="border_blue"
          title="Infirmier (H/F)"
          contractType="CDI - "
          country="France - "
          city="Pantin"
        ></Jobs>
      </div>
      <Footer
        tool="React"
        location="Le Reacteur"
        creator="Trévor Sénant"
      ></Footer>
    </>
  );
}

export default App;
