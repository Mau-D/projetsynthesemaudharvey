/*À supprimer --> Effacer si pas utilisé, ne récupère pas toujours les données de la bd */
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Hook pour la gestion de la connexion
function Utilisateur(props) {
  //Déclare une variable pour le local storage
  var ls = require("local-storage");
  console.log("lsnom" + ls.get("nom"));
  console.log("lsprenom" + ls.get("prenom"));
  console.log("lspassword" + ls.get("password"));
  //Constante pour les données de l'API
  const [donneesRecues, setDonneesRecues] = useState([]);
  //Variable pour mettre un état, pour la validation que l'utilisateur existe
  const [utilisateurPresent, setUtilisateurPresent] = useState("");
  //Apelle de la fonction à entré dans le composant
  useEffect(() => {
    //appelle la fonction pour les données de l'API
    getUtilisateurs();
  }, []);

  //Faire un .map de tous les utilisateurs
  function utilisateurRecherche() {
    return donneesRecues.map((item, i) => {
      console.log(i + "nom" + item.nom);
      console.log(i + "prenom" + item.prenom);
      console.log(i + "password" + item.password);
    });
  }

  //Fonction pour l'appel à l'API
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
      //On gère l'erreur
      console.log(error);
    }
    utilisateurRecherche();
  }
}

export default Utilisateur;