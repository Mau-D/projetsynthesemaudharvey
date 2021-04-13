import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

import { FaUserGraduate } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";

import BoutonRemoveDemande from "../boutons/BoutonRemoveDemande";

// Hook pour chacune des demandes de stage
function DemandeStageCarte(props) {
  var ls = require("local-storage");
  //Variable pour connaître la page où je me trouve, pour aller chercher des informations dans l'url
  let location = useLocation();
  console.log("location" + location.pathname);
  //L'utilisation du useState, fera de nouveau le rendu à chaque fois qu'elle est modifiée
  const [objetEtudiant, setObjetEtudiant] = useState({});
  useEffect(() => {
    //appelle la fonction getEtudiant pour l'appel à l'API, obtenir les informations de l'utilisateur
    getEtudiant();
  }, []);
  //Fonction pour l'appel à l'API
  async function getEtudiant() {
    //Variables pour les données de l'étudiant qui fait la demande
    try {
      const response = await fetch(
        process.env.REACT_APP_API +
          process.env.REACT_APP_UTILISATEURS +
          "/" +
          props.etudiant
      );
      const reponseDeApi = await response.json();
      setObjetEtudiant(reponseDeApi);
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
    <Container fluid>
      <Row className="my-2">
        <Col xs={12} md={6}>
          <h3>
            <FaUserGraduate className="mx-2" />
            <strong>{props.titre}</strong>
          </h3>
        </Col>
        <Col xs={12} md={6}>
          <p className="text-right d-inline">Publié le: {props.dateParution}</p>
        </Col>
      </Row>
      <Row className="my-2">
        <Col xs={12} md={6}>
          {objetEtudiant.prenom} {objetEtudiant.nom}
        </Col>
        <Col xs={12} md={6}>
          <strong>Formation: </strong>
          <p className="d-inline">{props.formation}</p>
        </Col>
      </Row>
      <Row className="my-2">
        <Col xs={12} md={6}>
          <strong>Ville: </strong>
          <p className="d-inline">{props.ville}</p>
        </Col>
        <Col xs={12} md={6}>
          <strong>Début: </strong>
          <p className="d-inline">{props.dateDebut}</p>
        </Col>
      </Row>
      <Row className="my-2">
        <Col xs={12} md={6}>
          <strong>Établissement scolaire: </strong>
          <p className="d-inline">{objetEtudiant.nomEcole}</p>
        </Col>
        <Col xs={12} md={6}>
          <strong>Fin: </strong>
          <p className="d-inline">{props.dateFin}</p>
        </Col>
      </Row>
      <Row className="my-2">
        <Col xs={12}>
          <p>{props.description}</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="p-0">
          <div className="w-100 d-flex flex-row justify-content-between">
            <div>{/*Bouton */}</div>
            <div className="text-right d-inline">
              <Link
                to={"edition/" + ls.get("nom").toString() + "?id=" + props.id}
                className="btn btn-primary"
              >
                <BsPencilSquare />
                Modifier
              </Link>
              <BoutonRemoveDemande demandeID={props.id}></BoutonRemoveDemande>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DemandeStageCarte;
