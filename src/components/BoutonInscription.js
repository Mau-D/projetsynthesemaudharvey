import React from "react";
import { Button } from "react-bootstrap";

// Hook pour le bouton de connexion
function BoutonInscription(props) {
  return (
    <Button size="md" variant="dark">
      {props.labelBouton}
    </Button>
  );
}

export default BoutonInscription;
