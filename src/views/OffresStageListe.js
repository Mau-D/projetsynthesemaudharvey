import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import EnTete from "../components/public/EnTete";
import LiensEmploiListe from "../components/public/LiensEmploiListe";
import OffreCarte from "../components/public/OffreCarte";
import OffresGroupCards from "../components/public/OffresGroupCards";
import PiedDePage from "../components/public/PiedDePage";
import PublicationDemandeStage from "../components/public/PublicationDemandeStage";
import PublicationOffreStage from "../components/public/PublicationOffreStage";
import SecteursActivite from "../components/public/SecteursActivite";
// Hook pour les offres de stage, liste des offres des entreprises
function OffresStageListe() {
  return (
    <Container fluid className="h-100">
      {/* Banniere */}
      <Row className="mb-5">
        <Col lg={12} className="p-0">
          <Container
            fluid
            className="d-flex flex-column justify-content-between banniereOffres"
          >
            <EnTete titre="Offres de stage"></EnTete>
          </Container>
        </Col>
      </Row>
      {/* Liste des candidats */}
      <Row className="m-5">
        {/* Liste des candidats */}
        <Col lg={8} className="pr-5 text-center">
          <OffreCarte></OffreCarte>
          <OffreCarte></OffreCarte>
          <OffreCarte></OffreCarte>
          <OffreCarte></OffreCarte>
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

export default OffresStageListe;
