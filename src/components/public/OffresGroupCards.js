import React, { useState, useEffect } from "react";
import BoutonListe from "../boutons/BoutonListe";
import { Container, Row, Col } from "react-bootstrap";

import OffreCarte from "./OffreCarte";

// Hook pour l'affichage des Offres de stage en vedette
function OffresGroupCards() {
  //Constante pour les données reçues par l'API
  //L'utilisation du useState, fera de nouveau le rendu à chaque fois qu'elle est modifiée
  const [donneesRecues, setDonneesRecues] = useState([]);

  //Pour le CRUD utiliser useEffect, exécute quelquechose après chaque affichage
  //Remplace la combinaison de componentDidMount, componentDidUpdate, et componentWillUnmount.
  useEffect(() => {
    //appelle la fonction getOffresStage
    getOffresStage();
  }, []);
  //Fonction pour l'appel à l'API
  async function getOffresStage() {
    try {
      const response = await fetch(
        process.env.REACT_APP_API + process.env.REACT_APP_OFFRES
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
        <Col lg={12}>
          <h2 className="mb-5">
            Tu es à la recherche de ton stage de fin d'études?
          </h2>
          <p>
            Pellentesque vehicula fermentum turpis eu cursus. Cras convallis
            tellus et elit aliquet, vitae dignissim ligula sodales.{" "}
          </p>
        </Col>
      </Row>
      {/* Cards des offres en vedette */}
      <Row className="m-1 text-center">
        {/*Filtre pour afficher seulement les offres avec le paramètre vedette = true */}

        {donneesRecues
          .filter((donnee) => donnee.vedette && donnee.verifie && donnee.actif)
          .map((item) => (
            <Col xs={12} md={6} lg={4} className="mt-2">
              <OffreCarte
                id={item._id}
                key={"keyOffre" + item._id}
                titre={item.titre}
                entreprise={item.entreprise}
                description={item.description}
              ></OffreCarte>
            </Col>
          ))}
      </Row>
      {/* Bouton voir toutes les offres de stage */}
      <Row className="text-center">
        <Col lg={12} className="mx-auto">
          <BoutonListe
            texte="Voir toutes les offres"
            classStyle="btn btn-danger"
            lien="/offresstage"
          ></BoutonListe>
        </Col>
      </Row>
    </Container>
  );
}

export default OffresGroupCards;
