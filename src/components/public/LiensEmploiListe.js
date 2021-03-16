import React from "react";
import { Container, Row } from "react-bootstrap";

import LienEmploi from "./LienEmploi";

// Hook pour la liste des liens des différent type d'emploi en demande de stage
function LiensEmploiListe() {
  return (
    <Container className="p-5">
      <Row className="mb-3">
        <h5>Ils sont à la recherche d'un stage :</h5>
      </Row>
      <Row className="mb-5">
        <LienEmploi></LienEmploi>
        <LienEmploi></LienEmploi>
        <LienEmploi></LienEmploi>
        <LienEmploi></LienEmploi>
        <LienEmploi></LienEmploi>
        <LienEmploi></LienEmploi>
        <LienEmploi></LienEmploi>
        <LienEmploi></LienEmploi>
        <LienEmploi></LienEmploi>
        <LienEmploi></LienEmploi>
        <LienEmploi></LienEmploi>
        <LienEmploi></LienEmploi>
        <LienEmploi></LienEmploi>
        <LienEmploi></LienEmploi>
        <LienEmploi></LienEmploi>
        <LienEmploi></LienEmploi>
      </Row>
    </Container>
  );
}

export default LiensEmploiListe;
