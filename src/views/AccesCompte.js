import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import { useLocation } from "react-router-dom";

import EnTete from "../components/public/EnTete";
import LiensEmploiListe from "../components/public/LiensEmploiListe";
import PiedDePage from "../components/public/PiedDePage";
import ImageTexte from "../components/public/ImageTexte";
import FormulaireConnexion from "../components/public/FormulaireConnexion";
import FormulaireInscription from "../components/public/FormulaireInscription";

// Hook pour les formulaires de connexion ou d'inscription à un compte
function AccesCompte() {
  //Variable pour connaître à quelle endroit nous sommes, pour aller chercher des informations dans l'url
  //let location = useLocation(); /*variable de la page où je me trouve */
  //console.log("accesCompte" + location.pathname);
  function affichageFormulaire() {
    ////if (location.pathname == "/accescompte/connexion") {
    //return (
    ///  <Col lg={8} className="text-left py-auto mx-auto">
    <FormulaireConnexion></FormulaireConnexion>;
    // </Col>
    // );
    // } else if (location.pathname == "/accescompte/inscription") {
    // return (
    //    <Col lg={8} className="text-left my-auto px-5  mx-auto">
    //      <FormulaireInscription></FormulaireInscription>
    //    </Col>
    //  );
    // } else {
    return (
      <>
        <Col lg={4} className="text-left py-auto mx-auto">
          <FormulaireConnexion></FormulaireConnexion>
        </Col>

        <Col lg={8} className="text-left my-auto px-5  mx-auto">
          <FormulaireInscription></FormulaireInscription>
        </Col>
      </>
    );
    //}
  }
  return (
    <Container fluid className="h-100">
      {/* Banniere */}
      <Row className="mb-5">
        <Col lg={12} className="p-0 banniereAPropos">
          <Container
            fluid
            className="h-100 d-flex flex-column justify-content-between bannierePropos"
          >
            <EnTete titre="Accéder à votre compte"></EnTete>
          </Container>
        </Col>
      </Row>
      {/*Formulaires*/}
      <Row className="m-5">{affichageFormulaire()}</Row>
      {/* Image et texte */}
      <Row className="bg-dark mx-5 text-light">
        <Col lg={12} className="p-0">
          <ImageTexte></ImageTexte>
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
        <Col lg={12} className="p-0">
          <LiensEmploiListe></LiensEmploiListe>
        </Col>
      </Row>
      {/* Pied de page*/}
      <Row className="p-5">
        <Col lg={12} className="p-5">
          <PiedDePage></PiedDePage>
        </Col>
      </Row>
    </Container>
  );
}

export default AccesCompte;
