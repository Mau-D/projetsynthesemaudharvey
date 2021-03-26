import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

// Hook pour la gestion de la connexion
function Utilisateur() {
  //Déclare une variable pour le local storage
  var ls = require("local-storage");
  //Constante pour les données de l'API
  const [donneesRecues, setDonneesRecues] = useState([]);
  //Apelle de la fonction à entré dans le composant
  useEffect(() => {
    //appelle la fonction getDemandesStage
    getUtilisateurs();
  }, donneesRecues);
  //fonction pour aller chercher les utilisateurs dans la base de données
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
  console.log(ls.get("nom"));
  //Faire un .map de tous les utilisateurs
  return donneesRecues.map((item) =>
    item.nom === ls.get("nom") &&
    item.prenom === ls.get("prenom") &&
    item.password === ls.get("password") ? (
      <Redirect to="/admin" />
    ) : (
      <Redirect to="/accescompte" />
      //éventuellement ajouter un toast
    )
  );

  // if (ls.get("nom") === "maud") {
  //   return <Redirect to="/admin" />;
  // } else {
  //   return <Redirect to="/accescompte" />;
  // }
}

export default Utilisateur;
