import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import { logout } from "../../utils/index";
import { useLocation } from "react-router-dom";

import BoutonInscription from "../boutons/BoutonInscription";
import RechercheTrouverVotreStage from "./RechercheTrouverVotreStage";
import BoutonListe from "../boutons/BoutonListe";

import logo from "../../img/logo.svg";

import { BsBoxArrowRight } from "react-icons/bs";

// Hook pour la bannière
function EnTete(props) {
  const [formulaire, setFormulaire] = useState("");
  let location = useLocation(); /*variable de la page où je me trouve */
  //Déclare une variable pour le local storage
  var ls = require("local-storage");
  useEffect(() => {
    setFormulaire(props.formulaire);
  });
  return (
    <>
      {/* Menu avec logo et bouton, navbar collapsible */}
      <Row className="d-flex ">
        <Navbar className="w-100 mx-5 navbar-dark" collapseOnSelect expand="lg">
          <Link to="/" className="accueil">
            <img src={logo} alt="logo" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav " />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto ml-5">
              <BoutonListe
                texte="Trouvez votre stage"
                lien="/offresstage"
                classStyle="btn btn-success"
              ></BoutonListe>

              <BoutonListe
                lien="/demandesstage"
                texte="Trouvez votre stagiaire"
                classStyle="btn btn-success"
              ></BoutonListe>
            </Nav>
            {/*Affichage du nom de l'utilisateur connecté, lien pour l'acces à sa section admin */}
            {ls.get("nom") ? (
              <>
                <Link
                  exact
                  to={"/admin/" + ls.get("nom") + "?niveau=" + ls.get("niveau")}
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
            ) : formulaire !== "connexion" && formulaire !== "inscription" ? (
              <Nav>
                <Link to="/accescompte/connexion">
                  <Button size="md" variant="light">
                    Connexion
                  </Button>
                </Link>
                <Link to="/accescompte/inscription">
                  <BoutonInscription
                    labelBouton={"Inscription"}
                  ></BoutonInscription>
                </Link>
              </Nav>
            ) : null}
          </Navbar.Collapse>
        </Navbar>
      </Row>
      {/* Titre et champs et bouton pour la recherche 
      <Row className="d-flex">
        <Col xs={12}>
          <RechercheTrouverVotreStage></RechercheTrouverVotreStage>
        </Col>
      </Row>*/}
      <Row className="ml-5 d-flex">
        <Col xs={12} className="ml-5">
          <h1 className="text-light">{props.titre}</h1>
        </Col>
      </Row>
    </>
  );
}

export default EnTete;
