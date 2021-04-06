import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router";
//Pour le jeton de session
import { login, logout } from "../../utils/index";

// Hook pour le bouton Trouvez votre stage
function FormulaireConnexion() {
  //Déclare une variable pour le local storage
  var ls = require("local-storage");

  console.log("connexion" + ls.get("nom"));
  //variable pour les utilisateurs
  const [donneesRecues, setDonneesRecues] = useState([]);
  const [userTrue, setUserTrue] = useState(false);
  //Fonction éxécuté à chaque appel du composant
  useEffect(() => {
    //appelle la fonction pour les données de l'API
    getUtilisateurs();
  }, []);
  //Données de la base de donnée
  async function getUtilisateurs() {
    try {
      const response = await fetch(
        process.env.REACT_APP_API + process.env.REACT_APP_UTILISATEURS
      );
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);
      if (!response.ok) {
        //Permet d'attraper l'erreur 500 et l'erreur 400
        throw Error(response.statusText);
      }
    } catch (error) {
      //On gère l'erreurdsas
      console.log(error);
    }
    console.log(donneesRecues);
  }

  function authentification() {
    //Prend les valeurs des inputs et entre les valeurs avec leurs clés dans le local storage
    const nomUtilisateur = document.getElementById("nom").value;
    const prenomUtilisateur = document.getElementById("prenom").value;
    const motDePasse = document.getElementById("password").value;
    //Entrer les valeurs entrée dans le formulaire dans le localstorage
    ls.set("nom", nomUtilisateur);
    ls.set("prenom", prenomUtilisateur);
    ls.set("password", motDePasse);

    //réinitialise
    var utilisateurExistant = false;
    // Boucle pour vérifier que l'utilisateur existe
    donneesRecues.map((item, i) => {
      console.log(i + ls.get("nom"));
      console.log(i + item.nom);
      //L'utilisateur possède les valeurs entrées en input du formulaire
      if (
        ls.get("nom") === item.nom &&
        ls.get("prenom") === item.prenom &&
        ls.get("password") === item.password
      ) {
        console.log("L'utilisateur existe");
        utilisateurExistant = true;
        //Local storage pour le niveau d'acces et l'identifiant
        ls.set("niveau", item.niveau.toString());
        ls.set("id", item._id);
      }
    });
    if (utilisateurExistant) {
      setUserTrue("true");
      console.log("niveau " + ls.get("niveau"));
      login();
    } else {
      alert("L'utilisateur n'existe pas");
      logout();
    }
  }

  return (
    <>
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
          <Form.Control type="password" placeholder="Mot de Passe" />
        </Form.Group>
        <Button variant="btn btn-primary" onClick={() => authentification()}>
          Submit
        </Button>
      </Form>

      {userTrue ? (
        <Redirect
          to={
            "admin/" + ls.get("nom") + "?niveau=" + ls.get("niveau").toString()
          }
        />
      ) : (
        <Redirect to="/accescompte" />
      )}
    </>
  );
}

export default FormulaireConnexion;
