import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import BoutonDetails from "../boutons/BoutonDetails";

// Hook pour les informations d'une demande de stage en détails
function DemandeDetails() {
  return (
    <Container fluid>
      {/*En-tête de formation */}
      <Row>
        {/*Logo de l'établissement d'études*/}
        <Col lg={4} className="my-auto p-5">
          <Image
            fluid
            src="https://upload.wikimedia.org/wikipedia/fr/d/dd/C%C3%A9gep_Trois-Rivi%C3%A8res_Logo.jpg"
          />
          <p>Formation:</p>
          <p>AEC en Développement Web</p>
        </Col>
        {/*Détails formation */}
        <Col lg={8} className="my-auto p-5">
          <Container fluid>
            <Row>
              <Col lg={12} className="text-left mb-5">
                <h4>Développeur Front-End</h4>
              </Col>
            </Row>
            <Row>
              <Col lg={6} className="text-left">
                <p>Date de début : 2021-05-18</p>
                <p>Date de fin : 2021-05-18</p>
              </Col>
              <Col lg={6} className="text-right">
                <p>Horaire : Temps plein</p>
                <p>Possibilité d'emploi : 2021-09-11</p>
              </Col>
            </Row>
            <Row>
              <Col lg={12} className="w-100 mt-5">
                <BoutonDetails></BoutonDetails>
              </Col>
            </Row>
          </Container>
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
