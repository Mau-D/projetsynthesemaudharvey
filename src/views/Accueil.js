import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import DemandesGroupCards from "../components/DemandesGroupCards";
import EnTete from "../components/EnTete";
import LiensEmploiListe from "../components/LiensEmploiListe";
import OffresGroupCards from "../components/OffresGroupCards";
import PiedDePage from "../components/PiedDePage";
import PublicationDemandeStage from "../components/PublicationDemandeStage";
import PublicationOffreStage from "../components/PublicationOffreStage";
import UtilisationSchema from "../components/UtilisationSchema";
// Hook pour la page d'accueil
function Accueil() {
  return (
    <Container fluid className="h-100">
      {/* Banniere */}
      <Row className="mb-5">
        <Col xs={12} className="p-0">
          <EnTete></EnTete>
        </Col>
      </Row>
      {/* Offres de stage sous forme de cards */}
      <Row>
        <Col xs={12}>
          <OffresGroupCards></OffresGroupCards>
        </Col>
      </Row>
      {/* Publication d'offres de stage */}
      <Row className="mt-5">
        <Col xs={12} className="p-0">
          <PublicationOffreStage></PublicationOffreStage>
        </Col>
      </Row>
      {/* Demande de stage sous forme de cards */}
      <Row className="m-5">
        <Col xs={12}>
          <DemandesGroupCards></DemandesGroupCards>
        </Col>
      </Row>
      {/* Publication de demande de stage */}
      <Row className="mt-5">
        <Col xs={12} className="p-0">
          <PublicationDemandeStage></PublicationDemandeStage>
        </Col>
      </Row>
      {/* Schéma de l'utilisation */}
      <Row className="w-50 m-5 mx-auto">
        <UtilisationSchema></UtilisationSchema>
      </Row>
      {/* Liens des demandes par titre d'emploi */}
      <Row>
        <Col xs={12} className="p-0">
          <LiensEmploiListe></LiensEmploiListe>
        </Col>
      </Row>
      {/* Pied de page*/}
      <Row className="p-5">
        <Col xs={12} className="p-5">
          <PiedDePage></PiedDePage>
        </Col>
      </Row>
    </Container>
  );
}

export default Accueil;
