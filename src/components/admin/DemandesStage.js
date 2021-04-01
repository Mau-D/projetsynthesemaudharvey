import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { BsArrow90DegRight } from "react-icons/bs";
import DemandeStageCarte from "./DemandeStageCarte";

// Hook pour la section de la gestion des demandes de stage
function DemandesStage(props) {
  //Déclare une variable pour le local storage
  var ls = require("local-storage");
  //Constante pour les données reçues par l'API
  //L'utilisation du useState, fera de nouveau le rendu à chaque fois qu'elle est modifiée
  const [donneesRecues, setDonneesRecues] = useState([]);
  useEffect(() => {
    //appelle la fonction getDemandesStage
    getDemandesStage();
  }, []);
  //Fonction pour l'appel à l'API
  async function getDemandesStage() {
    try {
      const response = await fetch(
        process.env.REACT_APP_API + process.env.REACT_APP_DEMANDES
      );
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);
      if (!response.ok) {
        //Permet d'attraper l'erreur 500 et l'erreur 400
        throw Error(response.statusText);
      }
    } catch (error) {
      //On gère l'erreur
      console.log(error);
    }
    console.log(donneesRecues);
  }

  return (
    <Container fluid className="h-100 mr-5">
      <Row className="mb-5">
        {/*Titre */}
        <Col lg={12}>
          <h2 className="d-inline">Demandes de stage</h2>
          <BsArrow90DegRight style={{ transform: "rotate(90deg)" }} />
        </Col>
      </Row>
      {/*affichage dynamique */}
      {/*Affiche seulement les demandes de l'étudiant*/}

      <Row>
        {donneesRecues.reverse().map((item) =>
          item.etudiant === ls.get("id") ? (
            <Col lg={12}>
              <DemandeStageCarte
                id={item._id}
                key={"keyCard" + item.titre}
                titre={item.titre}
                formation={item.formation}
                description={item.description}
              ></DemandeStageCarte>
            </Col>
          ) : null
        )}
        {/*Affiche toutes les demandes pour un administrateur connecté*/}
        {donneesRecues.reverse().map((item) =>
          props.acces === 999 ? (
            <Col lg={12}>
              <DemandeStageCarte
                id={item._id}
                key={"keyCard" + item.titre}
                titre={item.titre}
                formation={item.formation}
                description={item.description}
              ></DemandeStageCarte>
            </Col>
          ) : null
        )}
      </Row>
    </Container>
  );
}

export default DemandesStage;
