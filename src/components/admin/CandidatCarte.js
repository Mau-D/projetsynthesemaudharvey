import React from "react";
import { Card, Button } from "react-bootstrap";

import { BsPencilSquare } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";

// Hook pour les cards de chacun des candidats, modification ou suppression
function CandidatCarte() {
  return (
    <Card
      className="w-100 text-justify mb-4 text-center"
      style={{ width: "18rem" }}
    >
      <Card.Body>
        <Card.Title>Nom complet</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Établissement scolaire
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Ville</Card.Subtitle>
        <Button className="m-1">
          <BsPencilSquare />
          Modifier
        </Button>
        <Button>
          <TiDelete />
          Supprimer
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CandidatCarte;
