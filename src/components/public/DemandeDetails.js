import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Moment from "moment";
import "moment/locale/fr";
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";
import BoutonContactCandidat from "../boutons/BoutonContactCandidat";
// Hook pour les informations d'une demande de stage en détails
function DemandeDetails() {
  //Variable pour connaître à quelle endroit nous sommes, pour aller chercher des informations dans l'url
  let location = useLocation(); /*variable de la page où je me trouve */

  const [objetRecu, setObjetRecu] = useState({});
  const [tabCompetences, setTabCompetences] = useState([]);
  const [tabFormations, setTabFormations] = useState([]);

  useEffect(() => {
    //appelle la fonction getDemandesStage
    getDetailsDemande();
  }, objetRecu);

  //Fonction pour récupérer l'id
  function getId() {
    //Variable pour récupérer l'id dans l'url, avec la propriété search
    var PropsSearch = location.search; //ex.:?id=60577b93a453cb7841a5ed40
    var stringId = PropsSearch.replace("?id=", "");
    console.log("PropsSearch" + PropsSearch);
    console.log("stringId" + stringId);
    return stringId;
  }
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
      setTabCompetences(reponseDeApi.competences);
      setTabFormations(reponseDeApi.autresFormations);
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
    console.log("donnesDAte=" + objetRecu.dateDebut);
    var dateMoment = Moment(d);
    dateMoment.locale("fr");
    return dateMoment.format("Do MMMM YYYY");
  }

  return (
    <Container fluid className="details">
      {/*En-tête de formation */}
      <Row>
        {/*Logo de l'établissement d'études*/}
        <Col xs={12} lg={3} className="p-1">
          <Image
            fluid
            src="https://upload.wikimedia.org/wikipedia/fr/d/dd/C%C3%A9gep_Trois-Rivi%C3%A8res_Logo.jpg"
          />
          <h5>Formation:</h5>
          <p>AEC en Développement Web</p>
        </Col>
        {/*Détails formation */}
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
                <strong>Horaire: </strong>
                <p className="d-inline">{objetRecu.typestage}</p>
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
                <BoutonContactCandidat></BoutonContactCandidat>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      {/*Détails de la demande de stage */}
      <Row className="text-left">
        <Col lg={12}>
          <h4 className="p-4">Description du stage recherché</h4>
          <p>{objetRecu.description}</p>
        </Col>
      </Row>
      <Row className="text-left">
        <Col lg={12} className="p-4">
          <h4 className="p-4">Compétences acquises</h4>

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
        <Col lg={12} className="p-4">
          <h4 className="p-4">Autres Formations</h4>
          <ListGroup>
            {tabFormations.map((item, i) => (
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

export default DemandeDetails;
