import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Moment from "moment";
import { Container, Row, Col, Image } from "react-bootstrap";
import BoutonContactCandidat from "../boutons/BoutonContactCandidat";

// Hook pour les informations d'une demande de stage en détails
function DemandeDetails() {
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
    getDetailsDemande();
  }, {});

  //Fonction pour l'appel à l'API

  async function getDetailsDemande() {
    var idChoosen = getId();
    console.log("search props" + location.search);
    try {
      const response = await fetch(
        process.env.REACT_APP_API +
          process.env.REACT_APP_DEMANDES +
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
        {/*Logo de l'établissement d'études*/}
        <Col lg={4} className="p-5">
          <Image
            fluid
            src="https://upload.wikimedia.org/wikipedia/fr/d/dd/C%C3%A9gep_Trois-Rivi%C3%A8res_Logo.jpg"
          />
          <h5>Formation:</h5>
          <p>AEC en Développement Web</p>
        </Col>
        {/*Détails formation */}
        <Col lg={8}>
          <Container fluid className="border border-secondary p-5 h-100">
            <Row>
              <Col lg={12} className="text-left mb-5">
                <h4>{objetRecu.titre}</h4>
              </Col>
            </Row>
            <Row>
              <Col lg={6} className="text-left">
                <p>{Moment(objetRecu.dateDebut).format("DD-MM-YYYY")}</p>
                <p>{Moment(objetRecu.dateFin).format("DD-MM-YYYY")}</p>
              </Col>
              <Col lg={6} className="text-right">
                <p>{objetRecu.type}</p>
              </Col>
            </Row>
            <Row>
              <Col lg={12} className="w-100 mt-5">
                <BoutonContactCandidat></BoutonContactCandidat>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      {/*Détails de la demande de stage */}
      <Row className="text-left">
        <Col lg={12}>
          <h4 className="p-4">Type de stage recherché</h4>
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
          <h4 className="p-4">Compétences acquises</h4>
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
          <h4 className="p-4">Expériences dans le domaine</h4>
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

export default DemandeDetails;
