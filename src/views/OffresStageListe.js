import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import EnTete from "../components/public/EnTete";
import LiensEmploiListe from "../components/public/LiensEmploiListe";
import OffreCarte from "../components/public/OffreCarte";
import DemandesGroupCards from "../components/public/DemandesGroupCards";
import PiedDePage from "../components/public/PiedDePage";
import PublicationDemandeStage from "../components/public/PublicationDemandeStage";
import PublicationOffreStage from "../components/public/PublicationOffreStage";
import SecteursActivite from "../components/public/SecteursActivite";
import OffreDetails from "../components/public/OffreDetails";

// Hook pour les offres de stage, liste des offres des entreprises
function OffresStageListe(props) {
  const [donneesRecues, setDonneesRecues] = useState([]);
  //Variable d'état pour charger toutes la liste des demandes de stage
  const [chargertout, setChargertout] = useState(false);
  //Variable pour connaître la page où je me trouve, pour aller chercher des informations dans l'url
  let location = useLocation();
  useEffect(() => {
    //appelle la fonction getOffresStage pour l'appel à l'API
    getOffresStage();
  }, []);
  //Fonction pour l'affichage des demandes
  function affichageOffres() {
    //Trier le tableau de la plus récente à la plus ancienne
    donneesRecues.sort(function (a, b) {
      a = new Date(a.dateParution);
      b = new Date(b.dateParution);
      return b < a ? -1 : a > b ? 1 : 0;
    });
    return chargertout
      ? donneesRecues
          .filter((donnee) => donnee.actif && donnee.verifie)
          .map((item) => (
            <OffreCarte
              date={item.dateParution}
              id={item._id}
              key={"ToutListe" + item._id}
              titre={item.titre}
              formation={item.programmeSuivi}
              description={item.descriptionPosteRecherche}
            ></OffreCarte>
          ))
      : donneesRecues
          .filter((donnee) => donnee.actif && donnee.verifie)
          .map((item, i) =>
            i < 4 ? (
              <OffreCarte
                date={item.dateParution}
                id={item._id}
                key={"keyListe" + item._id}
                titre={item.titre}
                formation={item.programmeSuivi}
                description={item.descriptionPosteRecherche}
              ></OffreCarte>
            ) : null
          );
  }
  //Fonction pour l'appel à l'API
  async function getOffresStage() {
    try {
      const response = await fetch(
        process.env.REACT_APP_API + process.env.REACT_APP_OFFRES
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
        <Col xs={12} className="p-0">
          <Container
            fluid
            className="d-flex flex-column justify-content-between banniereDemandes"
          >
            <EnTete titre="Offres de stage"></EnTete>
          </Container>
        </Col>
      </Row>
      {/* Liste des entreprises */}
      <Row className="mb-5">
        <Col
          xs={{ span: 12, order: 2 }}
          md={{ span: 8, order: 1 }}
          className="pr-5 text-center"
        >
          {props.location.search !== "" ? (
            <OffreDetails id={donneesRecues._id}></OffreDetails>
          ) : (
            <>
              {/*Affichage des 4 demandes les plus récente, renverser le tableau et limiter au nombre de 4 */}
              {affichageOffres()}
              {!chargertout ? (
                <Button
                  variant="danger"
                  className="mt-5"
                  onClick={() => setChargertout(true)}
                >
                  Charger plus
                </Button>
              ) : null}
            </>
          )}
        </Col>

        {/* Liste des secteurs d'activités */}
        <Col xs={{ span: 12, order: 1 }} md={{ spna: 4, order: 2 }}>
          <SecteursActivite></SecteursActivite>
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
          <DemandesGroupCards></DemandesGroupCards>
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
          {/*background d'une image de publicité, voir si ajouter le lien pour postuler */}
        </Col>
      </Row>
      {/* Liens des demandes par titre d'emploi 
      <Row>
        <Col xs={12} className="p-0">
          <LiensEmploiListe></LiensEmploiListe>
        </Col>
      </Row>*/}
      {/* Pied de page*/}
      <Row className="text-center">
        <Col xs={12} className="pb-5">
          <PiedDePage></PiedDePage>
        </Col>
      </Row>
    </Container>
  );
}

export default OffresStageListe;
