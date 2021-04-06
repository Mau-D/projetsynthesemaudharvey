import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

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
      <Row className="w-50 mx-auto text-center m-2">
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
      {/* Cards (4) des offres en vedette */}
      <Row className="m-5 text-center">
        {donneesRecues.map((item) => (
          <Col lg={3}>
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
          <Button texte="Voir tous les candidats" className="btn btn-danger">
            <Link to="/offresstage" className="text-light">
              Voir toutes les offres de stage
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default OffresGroupCards;
