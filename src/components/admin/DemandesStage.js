import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { BsArrow90DegRight } from "react-icons/bs";
import DemandeStageCarte from "./DemandeStageCarte";

// Hook pour la section de la gestion des demandes de stage
function DemandesStage() {
  return (
    <Container fluid className="h-100 mr-5">
      <Row className="mb-5">
        {/*Titre */}
        <Col lg={12}>
          <h2 className="d-inline">Demandes de stage</h2>
          <BsArrow90DegRight style={{ transform: "rotate(90deg)" }} />
        </Col>
      </Row>
      {/*affichage dynamique */}
      <Row>
        <Col lg={12}>
          <DemandeStageCarte></DemandeStageCarte>
        </Col>
      </Row>
    </Container>
  );
}

export default DemandesStage;
