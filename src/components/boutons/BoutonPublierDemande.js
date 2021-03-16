import React from "react";
import { Button } from "react-bootstrap";

// Hook pour le bouton pour publier une demande de stage
function BoutonPublierOffre() {
  return (
    <Button size="md" className="mt-3 publierDemande">
      Publier une demande de stage maintenant
    </Button>
  );
}

export default BoutonPublierOffre;
