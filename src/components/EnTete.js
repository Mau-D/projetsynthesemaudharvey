import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";

import logo from "../img/logo.svg";
import BoutonTrouverVotreStage from "./BoutonTrouverVotreStage";
import BoutonTrouverVotreStagiaire from "./BoutonTrouverVotreStagiaire";
import BoutonConnexion from "./BoutonConnexion";
import BoutonInscription from "./BoutonInscription";
import RechercheTrouverVotreStage from "./RechercheTrouverVotreStage";

// Hook pour la bannière
function EnTete() {
  return (
    <Container fluid className="banniereAccueil">
      {/* Menu avec logo et bouton, navbar collapsible */}
      <Row>
        <Navbar className="w-100 mx-5 vh-10" collapseOnSelect expand="lg">
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
      <Row className="hauteur90">
        <Col sm={12} className="my-auto">
          <RechercheTrouverVotreStage></RechercheTrouverVotreStage>
        </Col>
      </Row>
    </Container>
  );
}

export default EnTete;
