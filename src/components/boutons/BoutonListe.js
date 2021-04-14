import React from "react";
import { Link } from "react-router-dom";

// Hook pour le bouton pour afficher la liste des demandes de stage
function BoutonListe(props) {
  return (
    <>
      <Link to={props.lien} size="md" className={props.classStyle}>
        {props.texte}
      </Link>
    </>
  );
}
export default BoutonListe;
