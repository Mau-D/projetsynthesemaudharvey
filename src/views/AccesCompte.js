import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import EnTete from "../components/EnTete";
import LiensEmploiListe from "../components/LiensEmploiListe";
import PiedDePage from "../components/PiedDePage";
import ImageTexte from "../components/ImageTexte";
import FormulaireConnexion from "../components/FormulaireConnexion";
import FormulaireInscription from "../components/FormulaireInscription";

// Hook pour les formulaires de connexion ou d'inscription à un compte
function AccesCompte() {
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
      <Row className="m-5">
        {/*Formulaire de connexion*/}
        <Col lg={4} className="text-left py-auto">
          <FormulaireConnexion></FormulaireConnexion>
        </Col>
        {/*Formulaire d'inscription*/}
        <Col lg={8} className="text-left my-auto px-5">
          <FormulaireInscription></FormulaireInscription>
        </Col>
      </Row>
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
