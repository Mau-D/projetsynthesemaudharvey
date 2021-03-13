import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import BoutonPostuler from "./BoutonPostuler";
// Hook pour les informations d'une demande de stage en détails
function DemandeDetails() {
  return (
    <Container fluid>
      {/*En-tête de formation */}
      <Row>
        {/*Logo de l'établissement d'études ou de l'entreprise*/}
        <Col lg={4}>Logo</Col>
        {/*Détails formation */}
        <Col lg={8}>
          Détails du cégep
          <BoutonPostuler></BoutonPostuler>
        </Col>
      </Row>
      {/*Détails de la demande de stage */}
      <Row className="text-left">
        <Col lg={12}>
          <h4 className="p-4">Type de stage recherché</h4>
          <p>
            Etiam mattis est in tellus mattis maximus. Etiam non molestie metus.
            Donec quis mauris metus. Cras tempor varius odio, nec varius nisi
            sollicitudin ac. Praesent vitae elementum augue, non suscipit
            turpis. Etiam blandit vitae quam nec porttitor. Duis libero nunc,
            iaculis at diam in, scelerisque dapibus mauris. Aenean faucibus est
            lectus, elementum pellentesque nisi cursus at. Maecenas nec
            elementum enim, vel egestas nisi. Nam quis laoreet turpis. Mauris
            placerat euismod lectus, quis laoreet libero commodo vel. Nullam
            metus ipsum, pulvinar a nulla nec, tristique scelerisque libero.
            Pellentesque turpis libero, hendrerit vitae placerat id, laoreet
            consectetur lectus. Nam quis laoreet turpis. Mauris placerat euismod
            lectus, quis laoreet libero commodo vel. Nullam metus ipsum,
            pulvinar a nulla nec, tristique scelerisque libero. Pellentesque
            turpis libero, hendrerit vitae placerat id, laoreet consectetur
            lectus.
          </p>
        </Col>
        <Col lg={12} className="p-4">
          <h4 className="p-4">Compétences acquises</h4>
          <p>
            Etiam mattis est in tellus mattis maximus. Etiam non molestie metus.
            Donec quis mauris metus. Cras tempor varius odio, nec varius nisi
            sollicitudin ac. Praesent vitae elementum augue, non suscipit
            turpis. Etiam blandit vitae quam nec porttitor. Duis libero nunc,
            iaculis at diam in, scelerisque dapibus mauris. Aenean faucibus est
            lectus, elementum pellentesque nisi cursus at. Maecenas nec
            elementum enim, vel egestas nisi. Nam quis laoreet turpis. Mauris
            placerat euismod lectus, quis laoreet libero commodo vel. Nullam
            metus ipsum, pulvinar a nulla nec, tristique scelerisque libero.
            Pellentesque turpis libero, hendrerit vitae placerat id, laoreet
            consectetur lectus. Nam quis laoreet turpis. Mauris placerat euismod
            lectus, quis laoreet libero commodo vel. Nullam metus ipsum,
            pulvinar a nulla nec, tristique scelerisque libero. Pellentesque
            turpis libero, hendrerit vitae placerat id, laoreet consectetur
            lectus.
          </p>
        </Col>
        <Col lg={12} className="p-4">
          <h4 className="p-4">Expériences dans le domaine</h4>
          <p>
            Etiam mattis est in tellus mattis maximus. Etiam non molestie metus.
            Donec quis mauris metus. Cras tempor varius odio, nec varius nisi
            sollicitudin ac. Praesent vitae elementum augue, non suscipit
            turpis. Etiam blandit vitae quam nec porttitor. Duis libero nunc,
            iaculis at diam in, scelerisque dapibus mauris. Aenean faucibus est
            lectus, elementum pellentesque nisi cursus at. Maecenas nec
            elementum enim, vel egestas nisi. Nam quis laoreet turpis. Mauris
            placerat euismod lectus, quis laoreet libero commodo vel. Nullam
            metus ipsum, pulvinar a nulla nec, tristique scelerisque libero.
            Pellentesque turpis libero, hendrerit vitae placerat id, laoreet
            consectetur lectus. Nam quis laoreet turpis. Mauris placerat euismod
            lectus, quis laoreet libero commodo vel. Nullam metus ipsum,
            pulvinar a nulla nec, tristique scelerisque libero. Pellentesque
            turpis libero, hendrerit vitae placerat id, laoreet consectetur
            lectus.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default DemandeDetails;
