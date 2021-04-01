import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import { logout } from "../../utils/index";

import BoutonConnexion from "../boutons/BoutonConnexion";
import BoutonInscription from "../boutons/BoutonInscription";
import RechercheTrouverVotreStage from "./RechercheTrouverVotreStage";
import BoutonListeDemandes from "../boutons/BoutonListeDemandes";

import logo from "../../img/logo.svg";

import { BsBoxArrowRight } from "react-icons/bs";

// Hook pour la bannière
function EnTete(props) {
  //Déclare une variable pour le local storage
  var ls = require("local-storage");
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
              <BoutonListeDemandes
                texte="Trouvez votre stage"
                classStyle="btn btn-success"
              ></BoutonListeDemandes>

              <BoutonListeDemandes
                texte="Trouvez votre stagiaire"
                classStyle="btn btn-success"
              ></BoutonListeDemandes>
            </Nav>
            {/*Affichage du nom de l'utilisateur connecté, lien pour l'acces à sa section admin */}
            {ls.get("nom") ? (
              <>
                <Link
                  to={
                    "admin/" +
                    ls.get("nom") +
                    "?niveau=" +
                    ls.get("niveau").toString()
                  }
                  className="text-light my-auto"
                >
                  <h4>
                    Bonjour, {ls.get("prenom")} {ls.get("nom")}
                  </h4>
                </Link>
                <Link
                  to="/"
                  onClick={function () {
                    logout();
                    ls.clear();
                  }}
                >
                  <h1 className="text-light">
                    <BsBoxArrowRight />
                  </h1>
                </Link>
              </>
            ) : (
              <Nav>
                <Link to="/accescompte/connexion">
                  <BoutonConnexion></BoutonConnexion>
                </Link>
                <Link to="/accescompte/inscription">
                  <BoutonInscription
                    labelBouton={"Inscription"}
                  ></BoutonInscription>
                </Link>
              </Nav>
            )}
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
