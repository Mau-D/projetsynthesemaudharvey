import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

import { FaUserGraduate, FaUserTie } from "react-icons/fa";

// Hook pour les cards des demandes de stage, en attente de validation
function ValidationCarteDemande() {
  return (
    <Container fluid className="validationDemande my-3">
      <Row className="p-3 bordureBleu">
        <Col lg={12}>
          <h3 className="m-0">
            <FaUserGraduate />
            <FaUserTie />
            <strong className="m-0"> Profession</strong>
          </h3>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <h5 className="nom">Nom complet</h5>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <strong>Ville</strong>
          <p>Jonquière</p>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <strong>Établissement scolaire</strong>
          <p>Cégep de Trois-Rivières</p>{" "}
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <p>texte</p>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <div className="w-100 d-flex flex-row justify-content-between">
            <div>
              <Button type="button"></Button>
            </div>
            <div className="text-right d-inline">
              <Button className="m-2 refuser">Refuser</Button>
              <Button className="m-2 accepter">Accepter</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ValidationCarteDemande;
