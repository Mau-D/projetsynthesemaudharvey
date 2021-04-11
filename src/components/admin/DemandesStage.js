import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Moment from "moment";
import "moment/locale/fr";

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
  }
  function formatDate(d) {
    console.log("donnesDAteCarte=" + d);
    var dateMoment = Moment(d);
    dateMoment.locale("fr");
    return dateMoment.format("Do MMMM YYYY");
  }
  return (
    <Container fluid className="h-100 mr-2">
      <Row className="mb-5">
        {/*Titre */}
        <Col xs={12}>
          <h2 className="d-inline">Demandes de stage</h2>
          <BsArrow90DegRight style={{ transform: "rotate(90deg)" }} />
        </Col>
      </Row>
      {/*affichage dynamique */}
      {/*Affiche seulement les demandes de l'étudiant*/}
      <Row>
        {donneesRecues.map((item, key) =>
          item.etudiant === ls.get("id") ? (
            <Col xs={12}>
              <DemandeStageCarte
                key={key}
                id={item._id}
                titre={item.titre}
                ville={item.ville}
                formation={item.programmeSuivi}
                dateDebut={formatDate(item.dateDebut)}
                dateFin={formatDate(item.dateFin)}
                description={item.description}
                dateParution={formatDate(item.dateParution)}
                etudiant={item.etudiant}
              ></DemandeStageCarte>
            </Col>
          ) : null
        )}
        {/*Affiche toutes les demandes pour un administrateur connecté*/}
        {donneesRecues.map((item) =>
          props.acces === "999" ? (
            <Col xs={12}>
              <DemandeStageCarte
                key={"keyCardDemandeAdmin" + item._id}
                id={item._id}
                titre={item.titre}
                ville={item.ville}
                formation={item.programmeSuivi}
                dateDebut={formatDate(item.dateDebut)}
                dateFin={formatDate(item.dateFin)}
                description={item.description}
                dateParution={formatDate(item.dateParution)}
                etudiant={item.etudiant}
              ></DemandeStageCarte>
            </Col>
          ) : null
        )}
      </Row>
    </Container>
  );
}

export default DemandesStage;
