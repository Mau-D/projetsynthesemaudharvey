import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

import BoutonDetails from "../boutons/BoutonDetails";

import { FaUserGraduate, FaUserTie } from "react-icons/fa";

// Hook pour les cards des offres et demandes de stage, en attente de validation
function ValidationCarte() {
  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          {" "}
          <FaUserGraduate />
          <FaUserTie />
          Profession
        </Col>
      </Row>
      <Row>
        <Col lg={12}>Nom complet</Col>
      </Row>
      <Row>
        <Col lg={12}>Ville</Col>
      </Row>
      <Row>
        <Col lg={12}>École ou entreprise</Col>
      </Row>
      <Row>
        <Col lg={12}>texte</Col>
      </Row>
      <Row>
        <Col lg={12}>
          <div className="w-100 d-flex flex-row justify-content-between">
            <div>
              <BoutonDetails></BoutonDetails>
            </div>
            <div className="text-right d-inline">
              <Button className="m-1">Refuser</Button>
              <Button>Accepter</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ValidationCarte;
