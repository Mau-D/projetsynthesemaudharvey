import { useState, useEffect } from "react";

function useSecteurRecherche(id) {
  const [idSecteur, setIdSecteur] = useState("allo");

  //Fonction pour la recherche par secteur
  setIdSecteur(id);
  return idSecteur;
}
export default useSecteurRecherche;
