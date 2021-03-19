import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import BoutonPostuler from "../boutons/BoutonPostuler";

// Hook pour les cards des offres de stage
function OffreCarte(props) {
  return (
    <Card className="w-100 text-justify mb-4" style={{ width: "18rem" }}>
      <Container fluid>
        <Row>
          <Col lg="8">
            <Card.Body>
              <Card.Title>{props.titre}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {props.entreprise}
              </Card.Subtitle>
              <Card.Text>{props.entreprise}</Card.Text>
              <Card.Link href="#">Détails</Card.Link>
              <BoutonPostuler></BoutonPostuler>
            </Card.Body>
          </Col>
          <Col lg={4} className="p-0">
            <Card.Img
              fluid
              src="https://media-exp1.licdn.com/dms/image/C560BAQHW4Y9tPlk6pA/company-logo_200_200/0/1598369955104?e=2159024400&v=beta&t=KR_n6l3Q3hQKHFBrdDL36cONUVoyCj2Jxy6Uw_TT-38"
            />
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default OffreCarte;
