import React from "react";
import { Button } from "react-bootstrap";

import { IoMdAdd } from "react-icons/io";

// Hook pour le bouton pour ajouter une demande de stage dans l'administration
function BoutonAjoutDemande() {
  return (
    <Button size="md" variant="light">
      <IoMdAdd /> Ajouter une demande de stage
    </Button>
  );
}

export default BoutonAjoutDemande;
