import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

import BoutonDetails from "../boutons/BoutonDetails";

import { FaUserGraduate, FaUserTie } from "react-icons/fa";

// Hook pour les cards des offres de stage, en attente de validation
function ValidationCarteOffre() {
  return (
    <Container fluid className="validationOffre my-3">
      <Row className="p-3 bordureVert">
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
        <Col lg={12}>Entreprise</Col>
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
              <Button className="refuser m-2">Refuser</Button>
              <Button className="accepter m-2">Accepter</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ValidationCarteOffre;
