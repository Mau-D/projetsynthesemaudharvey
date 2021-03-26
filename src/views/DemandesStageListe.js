import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

import EnTete from "../components/public/EnTete";
import LiensEmploiListe from "../components/public/LiensEmploiListe";
import DemandeCarte from "../components/public/DemandeCarte";
import DemandeDetails from "../components/public/DemandeDetails";
import OffresGroupCards from "../components/public/OffresGroupCards";
import PiedDePage from "../components/public/PiedDePage";
import PublicationDemandeStage from "../components/public/PublicationDemandeStage";
import PublicationOffreStage from "../components/public/PublicationOffreStage";
import SecteursActivite from "../components/public/SecteursActivite";
//import useSecteurRecherche from "../../src/hooksperso/useSecteurRecherche";

// Hook pour les demandes de stage, liste des candidats
function DemandesStageListe(props) {
  //Pour la recherche par secteur d'activité
  const [idSecteur, setIdSecteur] = useState("");
  var objectIdToTimestamp = require("objectid-to-timestamp");
  //Constante pour les données reçues par l'API
  //L'utilisation du useState, fera de nouveau le rendu à chaque fois qu'elle est modifiée
  const [donneesRecues, setDonneesRecues] = useState([]);
  //Variable d'état pour charger toutes la liste des demandes de stage
  const [chargertout, setChargertout] = useState(false);
  //Variable pour connaître la page où je me trouve, pour aller chercher des informations dans l'url
  let location = useLocation();

  //Utiliser useEffect, exécute quelquechose après chaque affichage
  //Remplace la combinaison de componentDidMount, componentDidUpdate, et componentWillUnmount.
  useEffect(() => {
    //appelle la fonction getDemandesStage pour l'appel à l'API
    getDemandesStage();
  }, []);
  //Fonction pour la recherche par secteur
  //useEffect(() => {
  //  function handleSecteur(status) {
  //    setIdSecteur(status.idSecteur);
  // }
  //}, "");

  //Fonction pour l'affichage des demandes
  function affichageDemandes() {
    return chargertout
      ? donneesRecues.reverse().map((item) => (
          <DemandeCarte
            date={
              //Valeur de la date de création, propriété de ObjectId de mongodb
              new Date(objectIdToTimestamp(item._id))
            }
            id={item._id}
            key={"keyListe" + item._id}
            titre={item.titre}
            formation={item.programmeSuivi}
            description={item.descriptionPosteRecherche}
          ></DemandeCarte>
        ))
      : donneesRecues.reverse().map((item, i) =>
          i < 4 ? (
            <DemandeCarte
              date={
                //Valeur de la date de création, propriété de ObjectId de mongodb
                new Date(objectIdToTimestamp(item._id))
              }
              id={item._id}
              key={"keyListe" + item._id}
              titre={item.titre}
              formation={item.programmeSuivi}
              description={item.descriptionPosteRecherche}
            ></DemandeCarte>
          ) : null
        );
  }
  //Fonction pour l'appel à l'API
  async function getDemandesStage() {
    try {
      const response = await fetch(
        process.env.REACT_APP_API + process.env.REACT_APP_DEMANDES
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
    console.log(donneesRecues);
    console.log(location.pathname);
  }
  return (
    <Container fluid className="h-100">
      {/* Banniere */}
      <Row className="mb-5">
        <Col lg={12} className="p-0">
          <Container
            fluid
            className="d-flex flex-column justify-content-between banniereDemandes"
          >
            <EnTete titre="Candidats"></EnTete>
          </Container>
        </Col>
      </Row>
      {/* Liste des candidats */}
      {/*Un affichage conditionnel, si l'url contient un search (?id=) afficher la section détails de la carte sélectionné sinon afficher la liste des cartes*/}
      <Row className="m-5">
        <Col lg={8} className="pr-5 text-center">
          {props.location.search !== "" ? (
            <DemandeDetails id={donneesRecues._id}></DemandeDetails>
          ) : (
            <>
              {/*Affichage des 4 demandes les plus récente, renverser le tableau et limiter au nombre de 4 */}
              {affichageDemandes()}

              <Button
                variant="danger"
                className="mt-5"
                onClick={() => setChargertout(true)}
              >
                Charger plus
              </Button>
            </>
          )}
        </Col>
        {/* Liste des secteurs d'activités */}
        <Col lg={4}>
          <SecteursActivite></SecteursActivite>
          <h1>{idSecteur}</h1>
        </Col>
      </Row>
      {/* Publication d'offres de stage */}
      <Row className="mt-5">
        <Col xs={12} className="p-0">
          <PublicationOffreStage></PublicationOffreStage>
        </Col>
      </Row>
      {/* Demande de stage sous forme de cards */}
      <Row className="m-5">
        <Col xs={12}>
          <OffresGroupCards></OffresGroupCards>
        </Col>
      </Row>
      {/* Publication de demande de stage */}
      <Row className="mt-5">
        <Col xs={12} className="p-0">
          <PublicationDemandeStage></PublicationDemandeStage>
        </Col>
      </Row>
      {/* bannière publicitaire */}
      <Row className="m-5 bkg-dark bannierePub">
        <Col lg={12} className="m-5">
          {/***************background d'une image de publicité, voir si ajouter le lien pour postuler */}
        </Col>
      </Row>
      {/* Liens des demandes par titre d'emploi */}
      <Row>
        <Col xs={12} className="p-0">
          <LiensEmploiListe></LiensEmploiListe>
        </Col>
      </Row>
      {/* Pied de page*/}
      <Row className="p-5">
        <Col xs={12} className="p-5">
          <PiedDePage></PiedDePage>
        </Col>
      </Row>
    </Container>
  );
}

export default DemandesStageListe;
