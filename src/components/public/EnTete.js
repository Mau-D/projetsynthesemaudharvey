import React from "react";
import { Row, Col } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";

import BoutonTrouverVotreStage from "../boutons/BoutonTrouverVotreStage";
import BoutonTrouverVotreStagiaire from "../boutons/BoutonTrouverVotreStagiaire";
import BoutonConnexion from "../boutons/BoutonConnexion";
import BoutonInscription from "../boutons/BoutonInscription";
import RechercheTrouverVotreStage from "./RechercheTrouverVotreStage";

import logo from "../../img/logo.svg";

// Hook pour la bannière
function EnTete(props) {
  return (
    <>
      {/* Menu avec logo et bouton, navbar collapsible */}
      <Row className="d-flex">
        <Navbar className="w-100 mx-5" collapseOnSelect expand="lg">
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto ml-5">
              <Nav.Link href="#features">
                <BoutonTrouverVotreStage></BoutonTrouverVotreStage>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <BoutonTrouverVotreStagiaire></BoutonTrouverVotreStagiaire>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <BoutonConnexion></BoutonConnexion>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <BoutonInscription
                  labelBouton={"Inscription"}
                ></BoutonInscription>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
      {/* Titre et champs et bouton pour la recherche */}
      <Row className="d-flex">
        <Col lg={12}>
          <RechercheTrouverVotreStage></RechercheTrouverVotreStage>
        </Col>
      </Row>
      <Row className="ml-5 d-flex">
        <Col lg={12} className="ml-5">
          <h1 className="text-light">{props.titre}</h1>
        </Col>
      </Row>
    </>
  );
}

export default EnTete;
