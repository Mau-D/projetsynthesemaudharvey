import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import BoutonPublierOffre from "./BoutonPublierOffre";

import publicationOffre from "../img/publicationOffre.svg";

// Hook pour la section Pourquoi publier une offre de stage
function PublicationOffreStage() {
  return (
    <Container fluid className="p-0">
      <Row className="p-0">
        <Col lg={6} className="p-0">
          <Image fluid src={publicationOffre} />
        </Col>
        <Col lg={6} className="p-0 my-auto">
          <div className="text-left w-50 mx-auto">
            <h1 className="mb-5">Pourquoi publier une offre de stage?</h1>
            <p>
              Pellentesque vehicula fermentum turpis eu cursus. Cras convallis
              tellus et elit aliquet, vitae dignissim ligula sodales.{" "}
            </p>
            <ul>
              <li>Cras convallis tellus et elit aliquet 20%</li>
              <li>Suspendisse tincidunt vulputate leo in sollicitudin</li>
              <li>Morbi sodales risus quis orci hendrerit semper</li>
            </ul>
            <BoutonPublierOffre></BoutonPublierOffre>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PublicationOffreStage;
