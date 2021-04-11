import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import livre from "../../img/livre.svg";

// Hook pour la section Pourquoi publier une offre de stage
function ImageTexte() {
  return (
    <Container fluid>
      <Row className="p-0">
        <Col xs={12} md={6} className="p-0">
          <Image fluid src={livre} />
        </Col>
        <Col xs={12} md={6} className="my-auto px-auto pt-2">
          <h4 className="text-left w-75 imageText">
            Etiam mattis est in tellus mattis maximus. Etiam non molestie metus.
            Donec quis mauris metus. Cras tempor varius odio, nec varius nisi
            sollicitudin ac. Praesent vitae elementum augue
          </h4>
        </Col>
      </Row>
    </Container>
  );
}
export default ImageTexte;
