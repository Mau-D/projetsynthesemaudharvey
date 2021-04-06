import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Container, Row, Col, Image } from "react-bootstrap";

import BoutonPostuler from "../boutons/BoutonPostuler";
// Hook pour les informations d'une offre de stage en détails
function OffreDetails() {
  //Variable pour connaître à quelle endroit nous sommes, pour aller chercher des informations dans l'url
  let location = useLocation(); /*variable de la page où je me trouve */
  const [objetRecu, setObjetRecu] = useState({});
  //Fonction pour récupérer l'id
  function getId() {
    //Variable pour récupérer l'id dans l'url, avec la propriété search
    var PropsSearch = location.search; //ex.:?id=60577b93a453cb7841a5ed40
    var stringId = PropsSearch.replace("?id=", "");
    console.log("PropsSearch" + PropsSearch);
    console.log("stringId" + stringId);
    return stringId;
  }
  //Fonction pour ajuster l'url lors de l'appel à l'API, avec ID pour affichage des détails ou sans Id pour afficher la liste des demandes
  useEffect(() => {
    //appelle la fonction getDemandesStage
    getDetailsOffre();
  }, {});
  //Fonction pour l'appel à l'API

  async function getDetailsOffre() {
    var idChoosen = getId();
    console.log("search props" + location.search);
    try {
      const response = await fetch(
        process.env.REACT_APP_API +
          process.env.REACT_APP_OFFRES +
          "/" +
          idChoosen
      );
      const reponseDeApi = await response.json();
      setObjetRecu(reponseDeApi);
      if (!response.ok) {
        //Permet d'attraper l'erreur 500 et l'erreur 400
        throw Error(response.statusText);
      }
    } catch (error) {
      //On gère l'erreur
      console.log(error);
    }
  }
  return (
    <Container fluid className="details">
      {/*En-tête de formation */}
      <Row>
        {/*Logo de l'entreprise*/}
        <Col lg={4} className="my-auto p-5">
          <Image
            fluid
            src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/03701aaf050c38cc94084ad3e3902de1"
          />
          <h5>Nom de l'entreprise</h5>
          <p>Adresse</p>
        </Col>
        {/*Détails formation */}
        <Col lg={8} className="my-auto p-5">
          <Container fluid>
            <Row>
              <Col lg={12} className="text-left mb-5">
                <h4>{objetRecu.titre}</h4>
              </Col>
            </Row>
            <Row>
              <Col lg={6} className="text-left">
                <p>Date de début : 2021-05-18</p>
                <p>Date de fin : 2021-05-18</p>
              </Col>
              <Col lg={6} className="text-right">
                <p>Horaire : Temps plein</p>
                <p>Possibilité d'emploi : Oui</p>
              </Col>
            </Row>
            <Row>
              <Col lg={12} className="w-100 mt-5">
                <BoutonPostuler></BoutonPostuler>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      {/*Détails de la demande de stage */}
      <Row className="text-left">
        <Col lg={12}>
          <h4 className="p-4">Candidat recherché</h4>
          <p>
            Etiam mattis est in tellus mattis maximus. Etiam non molestie metus.
            Donec quis mauris metus. Cras tempor varius odio, nec varius nisi
            sollicitudin ac. Praesent vitae elementum augue, non suscipit
            turpis. Etiam blandit vitae quam nec porttitor. Duis libero nunc,
            iaculis at diam in, scelerisque dapibus mauris. Aenean faucibus est
            lectus, elementum pellentesque nisi cursus at. Maecenas nec
            elementum enim, vel egestas nisi. Nam quis laoreet turpis. Mauris
            placerat euismod lectus, quis laoreet libero commodo vel. Nullam
            metus ipsum, pulvinar a nulla nec, tristique scelerisque libero.
            Pellentesque turpis libero, hendrerit vitae placerat id, laoreet
            consectetur lectus. Nam quis laoreet turpis. Mauris placerat euismod
            lectus, quis laoreet libero commodo vel. Nullam metus ipsum,
            pulvinar a nulla nec, tristique scelerisque libero. Pellentesque
            turpis libero, hendrerit vitae placerat id, laoreet consectetur
            lectus.
          </p>
        </Col>
        <Col lg={12} className="p-4">
          <h4 className="p-4">Responsabilités:</h4>
          <p>
            Etiam mattis est in tellus mattis maximus. Etiam non molestie metus.
            Donec quis mauris metus. Cras tempor varius odio, nec varius nisi
            sollicitudin ac. Praesent vitae elementum augue, non suscipit
            turpis. Etiam blandit vitae quam nec porttitor. Duis libero nunc,
            iaculis at diam in, scelerisque dapibus mauris. Aenean faucibus est
            lectus, elementum pellentesque nisi cursus at. Maecenas nec
            elementum enim, vel egestas nisi. Nam quis laoreet turpis. Mauris
            placerat euismod lectus, quis laoreet libero commodo vel. Nullam
            metus ipsum, pulvinar a nulla nec, tristique scelerisque libero.
            Pellentesque turpis libero, hendrerit vitae placerat id, laoreet
            consectetur lectus. Nam quis laoreet turpis. Mauris placerat euismod
            lectus, quis laoreet libero commodo vel. Nullam metus ipsum,
            pulvinar a nulla nec, tristique scelerisque libero. Pellentesque
            turpis libero, hendrerit vitae placerat id, laoreet consectetur
            lectus.
          </p>
        </Col>
        <Col lg={12} className="p-4">
          <h4 className="p-4">À propos de l'entreprise</h4>
          <p>
            Etiam mattis est in tellus mattis maximus. Etiam non molestie metus.
            Donec quis mauris metus. Cras tempor varius odio, nec varius nisi
            sollicitudin ac. Praesent vitae elementum augue, non suscipit
            turpis. Etiam blandit vitae quam nec porttitor. Duis libero nunc,
            iaculis at diam in, scelerisque dapibus mauris. Aenean faucibus est
            lectus, elementum pellentesque nisi cursus at. Maecenas nec
            elementum enim, vel egestas nisi. Nam quis laoreet turpis. Mauris
            placerat euismod lectus, quis laoreet libero commodo vel. Nullam
            metus ipsum, pulvinar a nulla nec, tristique scelerisque libero.
            Pellentesque turpis libero, hendrerit vitae placerat id, laoreet
            consectetur lectus. Nam quis laoreet turpis. Mauris placerat euismod
            lectus, quis laoreet libero commodo vel. Nullam metus ipsum,
            pulvinar a nulla nec, tristique scelerisque libero. Pellentesque
            turpis libero, hendrerit vitae placerat id, laoreet consectetur
            lectus.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default OffreDetails;
