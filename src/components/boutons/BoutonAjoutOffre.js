import React from "react";
import { Button } from "react-bootstrap";

import { IoMdAdd } from "react-icons/io";

// Hook pour le bouton pour ajouter une offre de stage dans l'administration
function BoutonAjoutOffre() {
  return (
    <Button size="md" variant="light" className="ajoutOffre">
      <IoMdAdd /> Ajouter une offre de stage
    </Button>
  );
}

export default BoutonAjoutOffre;
