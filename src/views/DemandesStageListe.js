import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import EnTete from "../components/EnTete";
import LiensEmploiListe from "../components/LiensEmploiListe";
import DemandeCarte from "../components/DemandeCarte";
import OffresGroupCards from "../components/OffresGroupCards";
import PiedDePage from "../components/PiedDePage";
import PublicationDemandeStage from "../components/PublicationDemandeStage";
import PublicationOffreStage from "../components/PublicationOffreStage";
import SecteursActivite from "../components/SecteursActiviteListe";
// Hook pour les demandes de stage, liste des candidats
function DemandesStageListe() {
  return (
    <Container fluid className="h-100">
      {/* Banniere */}
      <Row className="mb-5">
        <Col lg={12} className="p-0">
          <Container
            fluid
            className="d-flex flex-column justify-content-between banniereDemandes"
          >
            <EnTete titre="Candidats"></EnTete>
          </Container>
        </Col>
      </Row>
      {/* Liste des candidats */}
      <Row className="m-5">
        {/* Liste des candidats */}
        <Col lg={8} className="pr-5 text-center">
          <DemandeCarte></DemandeCarte>
          <DemandeCarte></DemandeCarte>
          <DemandeCarte></DemandeCarte>
          <DemandeCarte></DemandeCarte>
          <Button variant="danger" className="mt-5">
            Charger plus
          </Button>
        </Col>
        {/* Liste des secteurs d'activités */}
        <Col lg={4}>
          <SecteursActivite></SecteursActivite>
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
          <OffresGroupCards></OffresGroupCards>
        </Col>
      </Row>
      {/* Publication de demande de stage */}
      <Row className="mt-5">
        <Col xs={12} className="p-0">
          <PublicationDemandeStage></PublicationDemandeStage>
        </Col>
      </Row>
      {/* bannière publicitaire */}
      <Row className="m-5 bkg-dark bannierePub">
        <Col lg={12} className="m-5">
          {/***************background d'une image de publicité, voir si ajouter le lien pour postuler */}
        </Col>
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

export default DemandesStageListe;
