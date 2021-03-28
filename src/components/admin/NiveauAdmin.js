/*Pour remplacer le composant Utilisateurs, Pas besoin --> À supprimer */
import React, { useState, useEffect } from "react";

// Hook pour la gestion de la connexion
function NiveauAdmin(props) {
  //Déclare une variable pour le local storage
  var ls = require("local-storage");
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
    donneesRecues.map((item, i) => {
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
  }
  return;
  donneesRecues.map((item, i) => {
    console.log(i + "nom" + item.nom);
    console.log(i + "prenom" + item.prenom);
    console.log(i + "password" + item.password);
  });
  <div>allo</div>;
}

export default NiveauAdmin;
