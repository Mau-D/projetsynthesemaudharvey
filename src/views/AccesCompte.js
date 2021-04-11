import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import EnTete from "../components/public/EnTete";
//import LiensEmploiListe from "../components/public/LiensEmploiListe";
import PiedDePage from "../components/public/PiedDePage";
import ImageTexte from "../components/public/ImageTexte";
import FormulaireConnexion from "../components/public/FormulaireConnexion";
import FormulaireInscription from "../components/public/FormulaireInscription";

// Hook pour les formulaires de connexion ou d'inscription à un compte
function AccesCompte() {
  //Variable pour le choix de l'affichage du formulaire
  const [formulaire, setFormulaire] = useState("");
  //Variable pour connaître à quelle endroit nous sommes, pour aller chercher des informations dans l'url
  let location = useLocation(); /*variable de la page où je me trouve */
  console.log("accesCompte= " + location.pathname);
  useEffect(() => {
    if (location.pathname == "/accescompte/connexion") {
      setFormulaire("connexion");
    } else if (location.pathname == "/accescompte/inscription") {
      setFormulaire("inscription");
    }
  });

  return (
    <Container fluid className="h-100">
      {/* Banniere */}
      <Row className="mb-5">
        <Col lg={12} className="p-0 banniereAPropos">
          <Container
            fluid
            className="h-100 d-flex flex-column justify-content-between bannierePropos"
          >
            {formulaire == "connexion" ? (
              <EnTete
                titre="Accéder à votre compte"
                formulaire={formulaire}
              ></EnTete>
            ) : (
              <EnTete titre="Inscription" formulaire={formulaire}></EnTete>
            )}
          </Container>
        </Col>
      </Row>
      {/*Formulaire*/}
      <Row className="mx-auto">
        <Col xs={{ span: 6, offset: 2 }}>
          {formulaire == "connexion" ? (
            <FormulaireConnexion />
          ) : (
            <FormulaireInscription />
          )}
        </Col>
      </Row>
      {/* Image et texte */}
      <Row className="bg-dark mx-auto text-light">
        <Col xs={12} className="p-0">
          <ImageTexte></ImageTexte>
        </Col>
      </Row>
      {/* bannière publicitaire */}
      <Row className="m-5 bkg-dark bannierePub">
        <Col xs={12} className="m-5">
          {/**background d'une image de publicité, voir si ajouter le lien pour postuler */}
        </Col>
      </Row>
      {/* Liens des demandes par titre d'emploi 
      <Row>
        <Col lg={12} className="p-0">
          <LiensEmploiListe></LiensEmploiListe>
        </Col>
      </Row>*/}
      {/* Pied de page*/}
      <Row className="my-auto mx-auto">
        <Col xs={12} className="p-0">
          <PiedDePage></PiedDePage>
        </Col>
      </Row>
    </Container>
  );
}

export default AccesCompte;
