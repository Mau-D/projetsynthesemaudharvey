import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import BoutonContactCandidat from "../boutons/BoutonContactCandidat";

// Hook pour les cards des demandes de stage
function DemandeCarte(props) {
  return (
    <Card className="w-100 text-left mb-1 pb-2" style={{ width: "25rem" }}>
      <Container fluid className="h-100 hauteurViewport">
        <Row>
          <Col sm={12}>
            <Card.Body>
              <Row>
                <Col xs={10}>
                  <p>{props.dateParution}</p>
                  <Card.Title>{props.titre}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {props.ville}
                  </Card.Subtitle>
                </Col>
                <Col xs={2} className="p-0">
                  <Card.Img src="https://upload.wikimedia.org/wikipedia/fr/d/dd/C%C3%A9gep_Trois-Rivi%C3%A8res_Logo.jpg" />
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Card.Text>{props.formation}</Card.Text>
                  <Card.Text>{props.description}</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Container>
      {/*Lien en incluant l'id de la carte sélectionnée pour afficher les détails */}
      <div className="align-items-end basCard">
        {" "}
        <Link to={"/demandesstage/?id=" + props.id}>Détails</Link>
        <BoutonContactCandidat
          courriel={props.courriel}
        ></BoutonContactCandidat>
      </div>
    </Card>
  );
}

export default DemandeCarte;
