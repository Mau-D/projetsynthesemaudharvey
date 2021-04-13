import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import BoutonPostuler from "../boutons/BoutonPostuler";

// Hook pour les cards des offres de stage
function OffreCarte(props) {
  return (
    <Card className="w-100 text-left mb-4 pb-2 " style={{ width: "25rem" }}>
      <Container fluid className="h-100 hauteurViewport">
        <Row>
          <Col xs={12}>
            <Card.Body>
              <Row>
                <Col xs={10}>
                  <p>{props.dateParution}</p>
                  <Card.Title>{props.titre}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted d-inline-block">
                    <h5>{props.entreprise}</h5>
                    <p>{props.ville}</p>
                  </Card.Subtitle>
                </Col>
                <Col xs={2} className="p-0">
                  <Card.Img src="https://media-exp1.licdn.com/dms/image/C560BAQHW4Y9tPlk6pA/company-logo_200_200/0/1598369955104?e=2159024400&v=beta&t=KR_n6l3Q3hQKHFBrdDL36cONUVoyCj2Jxy6Uw_TT-38" />
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Card.Text>{props.description}</Card.Text>
                  <Card.Text>{props.infos}</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Container>
      <div>
        {/*Lien en incluant l'id de la carte sélectionnée pour afficher les détails */}
        <Link to={"offresstage/?id=" + props.id}>Détails</Link>
        <BoutonPostuler></BoutonPostuler>
      </div>
    </Card>
  );
}

export default OffreCarte;
