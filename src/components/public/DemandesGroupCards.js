import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Moment from "moment";

import DemandeCarte from "./DemandeCarte";
import BoutonListe from "../boutons/BoutonListe";

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
    <Container fluid className="m-4">
      <Row className="w-md-50 mx-auto text-center m-2">
        <Col sm={12}>
          <h2 className="mb-5">Votre futur stagiaire se trouve ici.</h2>
          <p>
            Pellentesque vehicula fermentum turpis eu cursus. Cras convallis
            tellus et elit aliquet, vitae dignissim ligula sodales.
          </p>
        </Col>
      </Row>
      {/* Cards  des demandes en vedette */}

      <Row className="m-1 text-center">
        {/*Filtre pour afficher seulement les demandes avec le paramètre vedette = true */}
        {donneesRecues
          .filter(
            (donnee) =>
              donnee.vedette &&
              donnee.valide &&
              donnee.actif &&
              !donnee.supprime
          )
          .map((item) => (
            <Col xs={12} md={6} lg={4} className="mt-2">
              <DemandeCarte
                key={"demandeCard" + item._id}
                id={item._id}
                titre={item.titre}
                ville={item.ville}
                formation={item.programmeSuivi}
                description={item.description}
                dateParution={Moment(item.dateParution).format("DD-MM-YYYY")}
              ></DemandeCarte>
            </Col>
          ))}
      </Row>
      {/* Bouton voir tous les candidats*/}
      <Row className="text-center">
        <Col sm={12} className="mx-auto">
          <BoutonListe
            texte="Voir tous les candidats"
            classStyle="btn btn-danger"
            lien="/demandesstage"
          ></BoutonListe>
        </Col>
      </Row>
    </Container>
  );
}

export default DemandesGroupCards;
