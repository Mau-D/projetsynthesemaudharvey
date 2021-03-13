import React from "react";
import { Card } from "react-bootstrap";

import BoutonPostuler from "./BoutonPostuler";

// Hook pour les cards des demandes de stage
function DemandeCarte() {
  return (
    <Card className="w-100 text-justify mb-4" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Détails</Card.Link>
        <BoutonPostuler></BoutonPostuler>
      </Card.Body>
    </Card>
  );
}

export default DemandeCarte;
