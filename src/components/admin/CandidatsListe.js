import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { BsArrow90DegRight } from "react-icons/bs";
import CandidatCarte from "./CandidatCarte";

// Hook pour la section de la gestion des candidats
function Validation() {
  return (
    <Container fluid className="h-100 mr-5">
      <Row className="mb-5">
        {/*Titre */}
        <Col lg={12}>
          <h2 className="d-inline">Liste des candidats</h2>
          <BsArrow90DegRight style={{ transform: "rotate(90deg)" }} />
        </Col>
      </Row>
      {/*affichage dynamique */}
      <Row>
        <Col lg={3}>
          <CandidatCarte></CandidatCarte>
        </Col>
        <Col lg={3}>
          <CandidatCarte></CandidatCarte>
        </Col>
        <Col lg={3}>
          <CandidatCarte></CandidatCarte>
        </Col>
        <Col lg={3}>
          <CandidatCarte></CandidatCarte>
        </Col>
        <Col lg={3}>
          <CandidatCarte></CandidatCarte>
        </Col>
        <Col lg={3}>
          <CandidatCarte></CandidatCarte>
        </Col>
        <Col lg={3}>
          <CandidatCarte></CandidatCarte>
        </Col>
      </Row>
    </Container>
  );
}

export default Validation;
