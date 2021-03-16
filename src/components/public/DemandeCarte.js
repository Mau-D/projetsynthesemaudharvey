import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import BoutonPostuler from "../boutons/BoutonPostuler";

// Hook pour les cards des demandes de stage
function DemandeCarte() {
  return (
    <Card className="w-100 text-justify mb-4" style={{ width: "18rem" }}>
      <Container fluid>
        <Row>
          <Col lg="8">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Détails</Card.Link>
              <BoutonPostuler></BoutonPostuler>
            </Card.Body>
          </Col>
          <Col lg={4} className="p-0">
            <Card.Img src="https://upload.wikimedia.org/wikipedia/fr/d/dd/C%C3%A9gep_Trois-Rivi%C3%A8res_Logo.jpg" />
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default DemandeCarte;
