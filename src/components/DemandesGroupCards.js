import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import BoutonTousCandidats from "./BoutonTousCandidats";
import DemandesCards from "./DemandesCards";

// Hook pour l'affichage des demandes de stage en vedette
function DemandesGroupCards() {
  return (
    <Container fluid className="m-4">
      <Row className="w-50 mx-auto text-center m-2">
        <Col sm={12}>
          <h2 className="mb-5">Votre futur stagiaire se trouve ici.</h2>
          <p>
            Pellentesque vehicula fermentum turpis eu cursus. Cras convallis
            tellus et elit aliquet, vitae dignissim ligula sodales.
          </p>
        </Col>
      </Row>
      {/* Cards (4) des offres en vedette */}
      <Row className="m-5 text-center">
        <DemandesCards></DemandesCards>
        <DemandesCards></DemandesCards>
        <DemandesCards></DemandesCards>
        <DemandesCards></DemandesCards>
      </Row>
      {/* Bouton voir tous les candidats*/}
      <Row className="text-center">
        <Col sm={12} className="mx-auto">
          <BoutonTousCandidats></BoutonTousCandidats>
        </Col>
      </Row>
    </Container>
  );
}

export default DemandesGroupCards;
