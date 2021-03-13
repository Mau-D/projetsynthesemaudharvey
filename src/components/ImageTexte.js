import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import livre from "../img/livre.svg";

// Hook pour la section Pourquoi publier une offre de stage
function ImageTexte() {
  return (
    <Container fluid>
      <Row className="p-0">
        <Col lg={6} className="p-0">
          <Image fluid src={livre} />
        </Col>
        <Col lg={6} className="my-auto pmx-auto ">
          <p className="text-left w-75">
            Etiam mattis est in tellus mattis maximus. Etiam non molestie metus.
            Donec quis mauris metus. Cras tempor varius odio, nec varius nisi
            sollicitudin ac. Praesent vitae elementum augue
          </p>
        </Col>
      </Row>
    </Container>
  );
}
export default ImageTexte;
