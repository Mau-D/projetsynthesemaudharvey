import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

import BoutonDetails from "../boutons/BoutonDetails";

import { FaUserGraduate, FaUserTie } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";

// Hook pour chacune des demandes de stage
function DemandeStageCarte() {
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
        <Col lg={6}>Nom complet</Col>
        <Col lg={6}>Formation</Col>
      </Row>
      <Row>
        <Col lg={6}>Ville</Col>
        <Col lg={6}>Début</Col>
      </Row>
      <Row>
        <Col lg={6}>École ou entreprise</Col>
        <Col lg={6}>Fin</Col>
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
              <Button className="m-1">
                <BsPencilSquare />
                Modifier
              </Button>
              <Button>
                <TiDelete />
                Supprimer
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DemandeStageCarte;
