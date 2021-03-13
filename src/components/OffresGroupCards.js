import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import OffreCarte from "./OffreCarte";
import BoutonToutesOffres from "./BoutonToutesOffres";

// Hook pour l'affichage des Offres de stage en vedette
function OffresGroupCards() {
  return (
    <Container fluid className="m-4">
      <Row className="w-50 mx-auto text-center m-2">
        <Col lg={12}>
          <h2 className="mb-5">
            Tu es à la recherche de ton stage de fin d'études?
          </h2>
          <p>
            Pellentesque vehicula fermentum turpis eu cursus. Cras convallis
            tellus et elit aliquet, vitae dignissim ligula sodales.{" "}
          </p>
        </Col>
      </Row>
      {/* Cards (4) des offres en vedette */}
      <Row className="m-5 text-center">
        <Col lg={3}>
          <OffreCarte></OffreCarte>
        </Col>
        <Col lg={3}>
          <OffreCarte></OffreCarte>
        </Col>{" "}
        <Col lg={3}>
          <OffreCarte></OffreCarte>
        </Col>{" "}
        <Col lg={3}>
          <OffreCarte></OffreCarte>
        </Col>{" "}
      </Row>
      {/* Bouton voir toutes les offres de stage */}
      <Row className="text-center">
        <Col lg={12} className="mx-auto">
          <BoutonToutesOffres></BoutonToutesOffres>
        </Col>
      </Row>
    </Container>
  );
}

export default OffresGroupCards;
