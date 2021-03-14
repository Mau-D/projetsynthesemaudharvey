import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { BsArrow90DegRight } from "react-icons/bs";
import ValidationCarte from "./ValidationCarte";

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
          <h2 className="d-inline">Demandes de stage</h2>
          <BsArrow90DegRight style={{ transform: "rotate(90deg)" }} />
        </Col>
        <Col lg={6}>
          <h2 className="d-inline">Offres de stage</h2>
          <BsArrow90DegRight style={{ transform: "rotate(90deg)" }} />
        </Col>
      </Row>
      {/*affichage dynamique */}
      <Row>
        <Col lg={6}>
          <ValidationCarte></ValidationCarte>
          <ValidationCarte></ValidationCarte>
          <ValidationCarte></ValidationCarte>
          <ValidationCarte></ValidationCarte>
          <ValidationCarte></ValidationCarte>
        </Col>
        <Col lg={6}>
          <ValidationCarte></ValidationCarte>
          <ValidationCarte></ValidationCarte>
          <ValidationCarte></ValidationCarte>
          <ValidationCarte></ValidationCarte>
          <ValidationCarte></ValidationCarte>
        </Col>
      </Row>
    </Container>
  );
}

export default Validation;
