import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useSecteurRecherche } from "../../hooksperso/useSecteurRecherche";

// Hook pour le bouton Trouvez votre stagiaire
function SecteursActivite(props) {
  //Variable pour le tableau de secteurs d'activité dans la collection secteursActivites
  const [donneesRecues, setDonneesRecues] = useState([]);

  useEffect(() => {
    //appelle la fonction getDemandesStage pour l'appel à l'API
    getSecteurs();
  }, []);

  //Fonction pour l'appel à l'API
  async function getSecteurs() {
    try {
      const response = await fetch(
        process.env.REACT_APP_API + process.env.REACT_APP_SECTEURS
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

  return (
    <div className="details fondBleu">
      <h4 className="text-light text-center">Secteurs d'activité </h4>
      <Table striped bordered hover size="sm">
        <tbody>
          {donneesRecues.map((item) => (
            <tr key={item.nom}>
              <td></td>
              <td className="w-100 text-light">
                <p className="text-light curseur">{item.nom}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default SecteursActivite;
