import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import DemandeCarte from "./DemandeCarte";
import BoutonListeDemandes from "../boutons/BoutonListeDemandes";

// Hook pour l'affichage des demandes de stage en vedette
function DemandesGroupCards() {
  //Constante pour les données reçues par l'API
  //L'utilisation du useState, fera de nouveau le rendu à chaque fois qu'elle est modifiée
  const [donneesRecues, setDonneesRecues] = useState([]);

  //Pour le CRUD utiliser useEffect, exécute quelquechose après chaque affichage
  //Remplace la combinaison de componentDidMount, componentDidUpdate, et componentWillUnmount.
  useEffect(() => {
    //appelle la fonction getDemandesStage
    getDemandesStage();
  }, donneesRecues);
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
    <Container fluid className="m-4">
      <Row className="w-50 mx-auto text-center m-2">
        <Col lg={12}>
          <h2 className="mb-5">Votre futur stagiaire se trouve ici.</h2>
          <p>
            Pellentesque vehicula fermentum turpis eu cursus. Cras convallis
            tellus et elit aliquet, vitae dignissim ligula sodales.
          </p>
        </Col>
      </Row>
      {/* Cards (4) des demandes en vedette */}
      {/*Affichage des 4 demandes les plus récente, renverser le tableau et limiter au nombre de 4 */}
      <Row className="m-5 text-center">
        {donneesRecues.reverse().map((item, i) =>
          i < 4 ? (
            <Col lg={3}>
              <DemandeCarte
                id={item._id}
                key={"keyCard" + item._id}
                titre={item.titre}
                formation={item.formation}
                description={item.description}
              ></DemandeCarte>
            </Col>
          ) : null
        )}
      </Row>
      {/* Bouton voir tous les candidats*/}
      <Row className="text-center">
        <Col lg={12} className="mx-auto">
          <NavLink to="/demandesstage">
            <BoutonListeDemandes
              texte="Voir tous les candidats"
              classStyle="btn btn-danger"
            ></BoutonListeDemandes>
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
}

export default DemandesGroupCards;
