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
        <Card.Title>
          <h2 className="nom">Nom complet</h2>
        </Card.Title>
        <Card.Subtitle className="mb-2">
          <h6>Établissement scolaire</h6>
        </Card.Subtitle>
        <Card.Subtitle className="mb-2">
          <h6>Ville</h6>
        </Card.Subtitle>
        <Button variant="light" className="mx-1">
          <BsPencilSquare className="mx-1 vert" />
          Modifier
        </Button>
        <Button variant="light" className="mx-1">
          <TiDelete className="mx-1 rouge" />
          Supprimer
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CandidatCarte;
