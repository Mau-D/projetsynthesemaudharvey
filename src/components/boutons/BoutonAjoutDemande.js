import React from "react";
import { Link } from "react-router-dom";

import { IoMdAdd } from "react-icons/io";

// Hook pour le bouton pour ajouter une demande de stage dans l'administration
function BoutonAjoutDemande() {
  console.log("formulaire d'ajout");
  //Déclare une variable pour le local storage
  var ls = require("local-storage");
  return (
    <Link
      to={
        "ajout/" + ls.get("nom").toString() + "?id=" + ls.get("id").toString()
      }
      className="btn btn-light ajoutDemande p-2"
    >
      <IoMdAdd /> Ajouter une demande de stage
    </Link>
  );
}

export default BoutonAjoutDemande;
