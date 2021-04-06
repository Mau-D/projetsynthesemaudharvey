import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import BoutonContactCandidat from "../boutons/BoutonContactCandidat";

// Hook pour les cards des demandes de stage
function DemandeCarte(props) {
  console.log("date de parution= " + props.date);

  return (
    <Card className="w-100 text-justify mb-4" style={{ width: "18rem" }}>
      <Container fluid>
        <Row>
          <Col lg="8">
            <Card.Body>
              <Card.Title>{props.titre}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {props.formation}
              </Card.Subtitle>
              <Card.Text>{props.description}</Card.Text>
              {/*Lien en incluant l'id de la carte sélectionnée pour afficher les détails */}
              <Link to={"demandes/?id=" + props.id}>Détails</Link>
              <BoutonContactCandidat></BoutonContactCandidat>
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
