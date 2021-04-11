import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import { BsArrow90DegRight } from "react-icons/bs";
import ValidationCarteOffre from "./ValidationCarteOffre";
import ValidationCarteDemande from "./ValidationCarteDemande";

// Hook pour la section de la validation des demandes et offres de la page d'administration
function Validation() {
  //Variable pour connaître la page où je me trouve, pour aller chercher des informations dans l'url
  let location = useLocation();
  //Variable pour les données des demandes
  const [donneesRecues, setDonneesRecues] = useState([]);
  useEffect(() => {
    //appelle la fonction getDemandesStage pour l'appel à l'API
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
    <Container fluid className="h-100">
      <Row className="mb-5">
        {/*Titre */}
        <Col xs={12}>
          <h1 className="titre">En attente de validation</h1>
        </Col>
        <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 1 }}>
          <h3 className="d-inline">
            Demandes de stage
            <BsArrow90DegRight style={{ transform: "rotate(90deg)" }} />
          </h3>
        </Col>
        <Col xs={{ span: 12, order: 3 }} lg={{ span: 6, order: 2 }}>
          <h3 className="d-inline">
            Offres de stage
            <BsArrow90DegRight style={{ transform: "rotate(90deg)" }} />
          </h3>
        </Col>

        {/*affichage dynamique, si la demande a un paramètre valide= false et qu'il est toujours actif et pas supprimé */}
        {/*La demande ou l’offre de stage publiée par un utilisateur sera inactivée et non affichée sur le portail public. Elle sera en attente de validation.  */}

        <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 3 }}>
          {donneesRecues
            .filter(
              (donnee) => !donnee.valide && !donnee.supprime && !donnee.actif
            )
            .map((item) => (
              <ValidationCarteDemande
                key={"validationDemande" + item._id}
                id={item._id}
                titre={item.titre}
                secteurActivite={item.secteurActivite}
                ville={item.ville}
                dateDebut={item.dateDebut}
                dateFin={item.dateFin}
                duree={item.duree}
                description={item.description}
                nbHeuresSemaine={item.nbHeuresSemaine}
                autresInformations={item.autresInformations}
                programmeSuivi={item.programmeSuivi}
                autresFormations={item.autresFormations}
                competences={item.competences}
                typestage={item.typestage}
                remunere={item.remunere}
                etudiant={item.etudiant}
                vedette={item.vedette}
              ></ValidationCarteDemande>
            ))}
        </Col>
        {/*Pour les offres à valider */}
        <Col xs={{ span: 12, order: 4 }} lg={{ span: 6, order: 4 }}>
          <ValidationCarteOffre></ValidationCarteOffre>
          <ValidationCarteOffre></ValidationCarteOffre>
          <ValidationCarteOffre></ValidationCarteOffre>
          <ValidationCarteOffre></ValidationCarteOffre>
        </Col>
      </Row>
    </Container>
  );
}

export default Validation;
