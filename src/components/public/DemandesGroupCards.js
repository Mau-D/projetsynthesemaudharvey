import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

import DemandeCarte from "./DemandeCarte";

// Hook pour l'affichage des demandes de stage en vedette
function DemandesGroupCards() {
  return (
    <Container fluid className="m-4">
      <Row className="w-50 mx-auto text-center m-2">
        <Col lg={12}>
          <h2 className="mb-5">Votre futur stagiaire se trouve ici.</h2>
          <p>
            Pellentesque vehicula fermentum turpis eu cursus. Cras convallis
            tellus et elit aliquet, vitae dignissim ligula sodales.
          </p>
        </Col>
      </Row>
      {/* Cards (4) des offres en vedette */}
      <Row className="m-5 text-center">
        <Col lg={3}>
          <DemandeCarte></DemandeCarte>
        </Col>
        <Col lg={3}>
          <DemandeCarte></DemandeCarte>{" "}
        </Col>
        <Col lg={3}>
          <DemandeCarte></DemandeCarte>{" "}
        </Col>
        <Col lg={3}>
          <DemandeCarte></DemandeCarte>{" "}
        </Col>
      </Row>
      {/* Bouton voir tous les candidats*/}
      <Row className="text-center">
        <Col lg={12} className="mx-auto">
          <NavLink to="/demandesstage">
            <Button size="md" variant="danger">
              Voir tous les candidats
            </Button>
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
}

export default DemandesGroupCards;
