import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { BsArrow90DegRight } from "react-icons/bs";
import ValidationCarteOffre from "./ValidationCarteOffre";
import ValidationCarteDemande from "./ValidationCarteDemande";

// Hook pour la section de la validation des demandes et offres de la page d'administration
function Validation() {
  return (
    <Container fluid className="h-100">
      <Row className="mb-5">
        {/*Titre */}
        <Col lg={12}>
          <h1>En attente de validation</h1>
        </Col>
        <Col lg={6}>
          <h3 className="d-inline">
            Demandes de stage
            <BsArrow90DegRight style={{ transform: "rotate(90deg)" }} />
          </h3>
        </Col>
        <Col lg={6}>
          <h3 className="d-inline">
            Offres de stage
            <BsArrow90DegRight style={{ transform: "rotate(90deg)" }} />
          </h3>
        </Col>
      </Row>
      {/*affichage dynamique */}
      <Row>
        <Col lg={6}>
          <ValidationCarteDemande></ValidationCarteDemande>
          <ValidationCarteDemande></ValidationCarteDemande>
          <ValidationCarteDemande></ValidationCarteDemande>
          <ValidationCarteDemande></ValidationCarteDemande>
        </Col>
        <Col lg={6}>
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
