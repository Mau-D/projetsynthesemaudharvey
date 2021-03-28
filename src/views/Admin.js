import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

import BoutonAjoutDemande from "../components/boutons/BoutonAjoutDemande";
import BoutonAjoutOffre from "../components/boutons/BoutonAjoutOffre";

import { IoIosArrowDown, IoIosNotificationsOutline } from "react-icons/io";
import { BsBoxArrowRight } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import {
  FaArrowCircleRight,
  FaArrowCircleLeft,
  FaUserGraduate,
  FaUserTie,
} from "react-icons/fa";

import logo from "../img/logo.svg";
//import Validation from "../components/admin/Validation";
import DemandesStage from "../components/admin/DemandesStage";
import Validation from "../components/admin/Validation";
import DemandesStageListe from "./DemandesStageListe";

// Hook pour la page d'administration
function Admin(props) {
  //Déclare une variable pour le local storage
  var ls = require("local-storage");
  //Variable pour connaître la page où je me trouve, pour aller chercher des informations dans l'url
  let location = useLocation();
  console.log("validation path" + location.search);
  //Variable pour récupérer le code du niveau d'accès
  const niveauAcces = props.location.search.substring(
    8,
    props.location.search.length
  );
  console.log("récupération du code = " + niveauAcces);
  //Fonction pour afficher le statut
  function renderSwitchStatut() {
    switch (niveauAcces) {
      case "999":
        return "administrateur";
      case "333":
        return "entreprise";
      case "111":
        return "étudiant";
    }
  }
  //Fonction pour afficher le contenu principal
  function renderSwitchMain() {
    switch (niveauAcces) {
      case "999":
        return <Validation />;
      case "111":
        //Changer pour afficher la liste de l'étudiant connecté
        return <DemandesStage user={ls.get("id")} />;
      //Ajouter pour les offres des entreprises
    }
  }
  return (
    <Container fluid className="h-100">
      <Row>
        {/*Menu de navigation */}
        <Col lg={2} className="fondBleu">
          <Nav variant="tabs" defaultActiveKey="/home" className="flex-column">
            <Link to="/">
              <img src={logo} alt="logo" className="w-100 mb-5" />
            </Link>
            {/*Le menu du dashboard s'affiche seulement pour l'administrateur */}
            {niveauAcces == 999 ? (
              <div>
                <Nav.Link className="text-light" href="/home">
                  <AiFillHome /> Accueil
                </Nav.Link>
                <Nav.Link className="text-light" eventKey="link-1">
                  <FaArrowCircleRight /> Offres de stage
                </Nav.Link>
                <Nav.Link className="text-light" eventKey="link-2">
                  <FaArrowCircleLeft /> Demandes de stage
                </Nav.Link>
                <Nav.Link className="text-light " eventKey="candidats">
                  <FaUserGraduate /> Candidats
                </Nav.Link>
                <Nav.Link className="text-light mb-5" eventKey="entreprises">
                  <FaUserTie /> Entreprises
                </Nav.Link>
                <Nav.Link className="text-light" eventKey="deconnexion">
                  <IoIosArrowDown />
                  Déconnexion
                </Nav.Link>
              </div>
            ) : (
              <Nav.Link className="text-light" eventKey="deconnexion">
                <IoIosArrowDown />
                Déconnexion
              </Nav.Link>
            )}
          </Nav>
        </Col>
        {/*affichage de la page */}
        <Col lg={10}>
          <Container fluid>
            {/*en-tête de la page */}
            <Row className="py-3">
              {niveauAcces == 111 ? (
                <Col lg={3}>
                  <BoutonAjoutDemande></BoutonAjoutDemande>
                </Col>
              ) : null}
              {niveauAcces == 333 ? (
                <Col lg={3}>
                  <BoutonAjoutOffre></BoutonAjoutOffre>
                </Col>
              ) : null}

              <Col lg={3} className="d-flex flex-row text-right">
                <div>
                  <h4>{ls.get("prenom") + " " + ls.get("nom")}</h4>

                  <h5 className="statut">{renderSwitchStatut()}</h5>
                </div>
                <div className="mx-2">
                  <Image
                    src="https://www.mariderm.com/wp-content/uploads/2018/12/visage-tonus-after.jpg"
                    roundedCircle
                    style={{ height: "10vh" }}
                  />
                </div>
                <div className="my-auto">
                  <h4>
                    <IoIosArrowDown />
                  </h4>
                </div>
              </Col>
              <Col lg={3} className="text-right">
                <h1>
                  <IoIosNotificationsOutline className="mx-3" />
                  <BsBoxArrowRight />
                </h1>
              </Col>
            </Row>
            {/*affichage dynamique */}

            <Row>{renderSwitchMain()}</Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Admin;
