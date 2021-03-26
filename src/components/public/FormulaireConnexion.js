import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

// Hook pour le bouton Trouvez votre stage
function FormulaireConnexion() {
  //localstorage

  function authentification() {
    //Déclare une variable pour le local storage
    var ls = require("local-storage");
    //Prend les valeurs des inputs et entre les valeurs avec leurs clés dans le local storage
    const nomUtilisateur = document.getElementById("nom").value;
    const prenomUtilisateur = document.getElementById("prenom").value;
    const motDePasse = document.getElementById("password").value;
    ls.set("nom", nomUtilisateur);
    ls.set("prenom", prenomUtilisateur);
    ls.set("password", motDePasse);
  }

  return (
    <Form>
      <Form.Group controlId="nom">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="text" placeholder="Nom" />
      </Form.Group>
      <Form.Group controlId="prenom">
        <Form.Label>Prénom</Form.Label>
        <Form.Control type="text" placeholder="Prénom" />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Mot de Passe</Form.Label>
        <Form.Control type="text" placeholder="Mot de Passe" />
      </Form.Group>

      <Link
        to="/utilisateur"
        className="btn btn-primary"
        onClick={authentification}
      >
        Submit
      </Link>
    </Form>
  );
}

export default FormulaireConnexion;
