import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import DemandesGroupCards from "../components/public/DemandesGroupCards";
import OffresGroupCards from "../components/public/OffresGroupCards";
import EnTete from "../components/public/EnTete";
//import LiensEmploiListe from "../components/public/LiensEmploiListe";
import PiedDePage from "../components/public/PiedDePage";
import PublicationDemandeStage from "../components/public/PublicationDemandeStage";
import PublicationOffreStage from "../components/public/PublicationOffreStage";
import UtilisationSchema from "../components/public/UtilisationSchema";
// Hook pour la page d'accueil
function Accueil() {
  return (
    <Container fluid className="h-100">
      {/* Banniere */}
      <Row className="mb-5 ">
        <Col xs={12} className="p-0 ">
          <Container
            fluid
            className="d-flex flex-column justify-content-between banniereAccueil"
          >
            <EnTete></EnTete>
          </Container>
        </Col>
      </Row>
      {/* demandes de stage sous forme de cards */}
      <Row>
        <Col xs={12}>
          <DemandesGroupCards></DemandesGroupCards>
        </Col>
      </Row>
      {/* Publication d'offres de stage */}
      <Row className="mt-5">
        <Col xs={12} className="p-0">
          <PublicationOffreStage></PublicationOffreStage>
        </Col>
      </Row>
      {/* offres de stage sous forme de cards */}
      <Row>
        <Col xs={12}>
          <OffresGroupCards></OffresGroupCards>
        </Col>
      </Row>
      {/* Publication de demande de stage */}
      <Row className="mt-5">
        <Col xs={12} className="p-0">
          <PublicationDemandeStage></PublicationDemandeStage>
        </Col>
      </Row>
      {/* Schéma de l'utilisation */}
      <Row className="w-md-50 m-5 mx-auto">
        <UtilisationSchema></UtilisationSchema>
      </Row>
      {/* Liens des demandes par titre d'emploi 
      <Row>
        <Col lg={12} className="p-0">
          <LiensEmploiListe></LiensEmploiListe>
        </Col>
      </Row>*/}
      {/* Pied de page*/}
      <Row className="text-center">
        <Col xs={12} className="pb-5">
          <PiedDePage></PiedDePage>
        </Col>
      </Row>
    </Container>
  );
}

export default Accueil;
