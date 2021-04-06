import React from "react";
import { Button } from "react-bootstrap";

import { TiDelete } from "react-icons/ti";

// Hook pour le bouton de connexion
function BoutonRemoveDemande(props) {
  //Fonction pour supprimer la demande de stage
  async function removeDemande() {
    try {
      const response = await fetch(
        process.env.REACT_APP_API +
          process.env.REACT_APP_DEMANDES +
          "/" +
          props.demandeID,
        {
          method: "delete",
        }
      );

      if (response.ok) {
        //const jsonResponse = await response.json();
        console.log("SUPPRESSION!");
        return response;
      }

      throw new Error("Request failed!");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Button size="md" onClick={removeDemande}>
      <TiDelete />
      Supprimer
    </Button>
  );
}

export default BoutonRemoveDemande;
