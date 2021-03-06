import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";

import { FaUserGraduate } from "react-icons/fa";

// Hook pour les cards des demandes de stage, en attente de validation
function ValidationCarteDemande(props) {
  //L'utilisation du useState, fera de nouveau le rendu à chaque fois qu'elle est modifiée
  const [objetEtudiant, setObjetEtudiant] = useState({});

  useEffect(() => {
    //appelle la fonction getDemandesStage pour l'appel à l'API
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

  //Fonction pour accepter la validation, changer le paramètre valide et actif à true
  async function accepterValidation() {
    console.log("je valide");
    try {
      const response = await fetch(
        process.env.REACT_APP_API +
          process.env.REACT_APP_DEMANDES +
          "/" +
          props.id,

        {
          /*Pour un ajout utiliser la méthode POST */
          method: "PUT",
          /*Pour un ajout ajouter un headers */
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            titre: props.titre,
            secteurActivite: props.secteurActivite,
            ville: props.ville,
            dateDebut: props.dateDebut,
            dateFin: props.dateFin,
            duree: props.duree,
            description: props.description,
            nbHeuresSemaine: props.nbHeuresSemaine,
            autresInformations: props.autresInformations,
            programmeSuivi: props.programmeSuivi,
            autresFormations: props.autresFormations,
            competences: props.competences,
            typestage: props.typestage,
            remunere: props.remunere,
            dateParution: new Date(),
            etudiant: props.etudiant,
            actif: true,
            valide: true,
            supprime: false,
            vedette: props.vedette,
          }),
        }
      );
      if (response.ok) {
        //const jsonResponse = await response.json();
        toast.dark(
          "Demande de " +
            objetEtudiant.prenom +
            " " +
            objetEtudiant.nom +
            " validée!"
        );
        setTimeout(() => {
          window.location.reload();
        }, 5000); //Retour à la page d'accueil de la validation

        console.log("reponse" + response);
        console.log(
          "urlvalidation" +
            process.env.REACT_APP_API +
            process.env.REACT_APP_DEMANDES +
            "/" +
            props.id
        );
        return response;
      }
      throw new Error("Request failed!");
    } catch (error) {
      console.log(error);
    }
  }
  //Fonction pour refuser la validation, changer le paramètre valide et actif à false et supprime à true
  async function refuserValidation() {
    console.log("je refuse");
    try {
      const response = await fetch(
        process.env.REACT_APP_API +
          process.env.REACT_APP_DEMANDES +
          "/" +
          props.id,

        {
          /*Pour un ajout utiliser la méthode POST */
          method: "PUT",
          /*Pour un ajout ajouter un headers */
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            titre: props.titre,
            secteurActivite: props.secteurActivite,
            ville: props.ville,
            dateDebut: props.dateDebut,
            dateFin: props.dateFin,
            duree: props.duree,
            description: props.description,
            nbHeuresSemaine: props.nbHeuresSemaine,
            autresInformations: props.autresInformations,
            programmeSuivi: props.programmeSuivi,
            autresFormations: props.autresFormations,
            competences: props.competences,
            typestage: props.typestage,
            remunere: props.remunere,
            dateParution: new Date(),
            etudiant: props.etudiant,
            actif: false,
            valide: false,
            supprime: false,
            vedette: props.vedette,
          }),
        }
      );
      if (response.ok) {
        //const jsonResponse = await response.json();
        toast.dark(
          "Demande de " +
            objetEtudiant.prenom +
            " " +
            objetEtudiant.nom +
            " refusée!"
        );
        setTimeout(() => {
          window.location.reload();
        }, 5000); //Retour à la page d'accueil de la validation

        console.log("reponse" + response);
        console.log(
          "urlvalidation" +
            process.env.REACT_APP_API +
            process.env.REACT_APP_DEMANDES +
            "/" +
            props.id
        );
        return response;
      }
      throw new Error("Request failed!");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Container fluid className="validationDemande my-3">
        <Row className="p-3 bordureBleu">
          <Col lg={12}>
            <h3 className="m-0">
              <FaUserGraduate />
              <strong className="m-0">{props.titre}</strong>
            </h3>
          </Col>
        </Row>
        <Row className="my-2">
          <Col lg={12}>
            <h5 className="nom d-inline">{objetEtudiant.prenom} </h5>
            <h5 className="nom d-inline">{objetEtudiant.nom}</h5>
          </Col>
        </Row>
        <Row className="my-2">
          <Col lg={12}>
            <strong>Ville: </strong>
            <p className="d-inline">{props.ville}</p>
          </Col>
        </Row>
        <Row className="my-2">
          <Col lg={12}>
            <strong>Établissement scolaire: </strong>
            <p className="d-inline">{objetEtudiant.nomEcole}</p>
          </Col>
        </Row>
        <Row className="my-2">
          <Col lg={12}>
            <p>{props.description}</p>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="text-right d-inline">
            <div>
              <Button className="m-2 refuser" onClick={refuserValidation}>
                Refuser
              </Button>
              <Button className="m-2 accepter" onClick={accepterValidation}>
                Accepter
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ValidationCarteDemande;
