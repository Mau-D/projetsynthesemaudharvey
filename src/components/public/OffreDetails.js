import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Moment from "moment";
import "moment/locale/fr";

import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";

import BoutonPostuler from "../boutons/BoutonPostuler";
// Hook pour les informations d'une offre de stage en détails
function OffreDetails() {
  //Variable pour connaître à quelle endroit nous sommes, pour aller chercher des informations dans l'url
  let location = useLocation(); /*variable de la page où je me trouve */
  const [objetRecu, setObjetRecu] = useState({});
  const [tabCompetences, setTabCompetences] = useState([]);

  //Fonction pour ajuster l'url lors de l'appel à l'API, avec ID pour affichage des détails ou sans Id pour afficher la liste des demandes
  useEffect(() => {
    //appelle la fonction getDemandesStage
    getDetailsOffre();
  }, []);
  //Fonction pour récupérer l'id
  function getId() {
    //Variable pour récupérer l'id dans l'url, avec la propriété search
    var PropsSearch = location.search; //ex.:?id=60577b93a453cb7841a5ed40
    var stringId = PropsSearch.replace("?id=", "");
    return stringId;
  }
  //Fonction pour l'appel à l'API

  async function getDetailsOffre() {
    var idChoosen = getId();
    try {
      const response = await fetch(
        process.env.REACT_APP_API +
          process.env.REACT_APP_OFFRES +
          "/" +
          idChoosen
      );
      const reponseDeApi = await response.json();
      setObjetRecu(reponseDeApi);
      setTabCompetences(reponseDeApi.competences);

      if (!response.ok) {
        //Permet d'attraper l'erreur 500 et l'erreur 400
        throw Error(response.statusText);
      }
    } catch (error) {
      //On gère l'erreur
      console.log(error);
    }
  }
  //Fonction pour appliquer la langue et le format de la date
  function formatDate(d) {
    var dateMoment = Moment(d);
    dateMoment.locale("fr");
    return dateMoment.format("Do MMMM YYYY");
  }
  return (
    <Container fluid className="details">
      {/*En-tête de formation */}
      <Row>
        {/*Logo de l'entreprise*/}
        <Col xs={12} lg={3} className="p-1">
          <Image
            fluid
            src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/03701aaf050c38cc94084ad3e3902de1"
          />
          <h5>{objetRecu.entreprise}</h5>
          <p>{objetRecu.ville}</p>
        </Col>
        {/*Détails du stage */}
        <Col xs={12} lg={9}>
          <Container fluid className="border border-secondary p-3 h-100">
            <Row>
              <Col xs={6} className="text-left mb-5 mx-0 px-0">
                <h4>{objetRecu.titre}</h4>
              </Col>
              <Col xs={6} className="text-right mb-5 mx-0 px-0">
                <p>{formatDate(objetRecu.dateParution)}</p>
              </Col>
            </Row>
            <Row className="text-left">
              <Col xs={12} lg={6}>
                <strong>Date de début: </strong>
                <p>{formatDate(objetRecu.dateDebut)}</p>
              </Col>
              <Col xs={12} lg={6}>
                <strong>Possibilité d'emploi: </strong>
                {objetRecu.emploiApresStage ? (
                  <p className="d-inline"> OUI</p>
                ) : (
                  <p className="d-inline"> NON</p>
                )}
              </Col>
              <Col xs={12} lg={6}>
                <strong>Date de fin: </strong>
                <p>{formatDate(objetRecu.dateFin)}</p>
              </Col>
              <Col xs={12} lg={6}>
                <strong>Rémunération: </strong>
                <p className="d-inline">{objetRecu.remunere}</p>
              </Col>
              <Col xs={12} lg={6}>
                <strong>Nombre de semaines: </strong>
                <p className="d-inline">{objetRecu.duree}</p>
              </Col>
              <Col xs={12} lg={6}>
                <strong>Heures/semaine: </strong>
                <p className="d-inline">{objetRecu.nbHeuresSemaine}</p>
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
          <h4 className="p-4">Description du stage offert</h4>
          <p>{objetRecu.description}</p>
        </Col>
      </Row>
      <Row className="text-left">
        <Col lg={12} className="p-4">
          <h4 className="p-4">Compétences recherchées</h4>

          <ListGroup>
            {tabCompetences.map((item, i) => (
              <ListGroup.Item key={item + i}>
                <p>{item}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Row className="text-left">
        <Col lg={12}>
          <h4 className="p-4">Autres informations</h4>
          <p>{objetRecu.autresInformations}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default OffreDetails;
