import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";

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
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto ml-5">
              <Link to={"/offresstage/"} size="md" className="btn btn-success">
                Trouver votre stage
              </Link>
              <Link
                to={"/demandesstage/"}
                size="md"
                className="btn btn-success"
              >
                Trouvez votre futur stagiaire
              </Link>
            </Nav>
            <Nav>
              <Link to="/accescompte">
                <BoutonConnexion></BoutonConnexion>
              </Link>
              <Link to="/accescompte">
                <BoutonInscription
                  labelBouton={"Inscription"}
                ></BoutonInscription>
              </Link>
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
