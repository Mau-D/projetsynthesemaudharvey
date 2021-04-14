import { useState, useEffect } from "react";
//Fonction pour la recherche par secteur

export function useSecteurRecherche(s) {
  const [secteurNom, setSecteurNom] = useState("");
  useEffect(() => {
    setSecteurNom(s);
  }, []);
  console.log("hookPerso" + secteurNom);
  return secteurNom;
}
