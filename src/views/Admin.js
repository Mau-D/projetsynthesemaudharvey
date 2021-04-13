import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Nav, Dropdown } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import { logout } from "../utils/index";

import BoutonAjoutDemande from "../components/boutons/BoutonAjoutDemande";
import BoutonAjoutOffre from "../components/boutons/BoutonAjoutOffre";

import { IoIosArrowDown } from "react-icons/io";
import { BsBoxArrowRight } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import {
  FaArrowCircleRight,
  FaArrowCircleLeft,
  FaUserGraduate,
  FaUserTie,
} from "react-icons/fa";

import logo from "../img/logo.svg";

import DetailsUtilisateur from "../components/admin/DetailsUtilisateur";
import DemandesStage from "../components/admin/DemandesStage";
import Validation from "../components/admin/Validation";
import CandidatsListe from "../components/admin/CandidatsListe";
import DemandeDetails from "../components/public/DemandeDetails";

// Hook pour la page d'administration
function Admin(props) {
  //Déclare une variable pour le local storage
  var ls = require("local-storage");
  //Variable pour connaître la page où je me trouve, pour aller chercher des informations dans l'url
  let location = useLocation();

  //Variable pour récupérer le code du niveau d'accès
  const searchString = props.location.search.substring(
    8,
    props.location.search.length
  );
  // const searchStringDetails = props.location.search.substring(
  //   4,
  //   props.location.search.length
  // );

  console.log("récupération du code = " + searchString);
  //Variable pour afficher les différentes sections de l'administrateur avec le menu de gauche

  const [adminSection, setAdminSection] = useState([]);
  //variable pour afficher le profil ou les demandes de stage d'un étudiant(menu dropdown, en haut)
  const [etudiantSection, setEtudiantSection] = useState([]);
  //Fonction pour afficher le statut
  function renderSwitchStatut() {
    switch (searchString) {
      case "999":
        return "administrateur";
      case "333":
        return "entreprise";
      case "111":
        return "étudiant";
      default:
        return "";
    }
  }
  //Fonction pour afficher le contenu principal
  function renderSwitchMain() {
    switch (searchString) {
      case "999":
        return renderSwitchAdmin();
      case "111":
        //Changer pour afficher la liste de l'étudiant connecté ajouter un lien pour son profil
        return renderSwitchEtudiant();
      default:
        return "";
    }
  }
  //fonction pour afficher soit le profil de l'étudiant soit ses demandes de stage
  function renderSwitchEtudiant() {
    switch (etudiantSection) {
      case "demandes":
        return <DemandesStage user={ls.get("id")} acces={searchString} />;
      case "profil":
        return <DetailsUtilisateur user={ls.get("id")} acces={searchString} />;
      default:
        return <DemandesStage user={ls.get("id")} acces={searchString} />;
    }
  }
  //Fonction pour afficher le contenu principal
  function renderSwitchAdmin() {
    console.log(adminSection);
    switch (adminSection) {
      case "validation":
        return <Validation />;
      case "demandes":
        return <DemandesStage acces={searchString} />;
      case "candidats":
        return <CandidatsListe />;
      case "details":
        return <DemandeDetails />;
      case "profil":
        return <DetailsUtilisateur user={ls.get("id")} acces={searchString} />;
      //Ajouter pour les offres des entreprises
      default:
        return <Validation />;
    }
  }
  //Fonction pour afficher le contenu principal
  function renderSwitchBouton() {
    switch (searchString) {
      case "111":
        return (
          <Col xs={12} md={6} lg={3}>
            <BoutonAjoutDemande></BoutonAjoutDemande>
          </Col>
        );
      case "333":
        return (
          <Col xs={12} md={6} lg={3}>
            <BoutonAjoutOffre></BoutonAjoutOffre>
          </Col>
        );
      case "999":
        return (
          <>
            <Col xs={12} md={6} lg={3}>
              <BoutonAjoutDemande></BoutonAjoutDemande>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <BoutonAjoutOffre></BoutonAjoutOffre>
            </Col>
          </>
        );
      default:
        return (
          <>
            <Col xs={12} md={6} lg={3}></Col>
            <Col xs={12} md={6} lg={3}></Col>
          </>
        );
    }
  }
  console.log("search" + location.search);
  console.log("path" + location.pathname);
  return (
    <Container fluid className="h-100">
      <Row>
        {/*Menu de navigation */}
        <Col xs={4} md={2} className="fondBleu p-0">
          <Nav variant="tabs" className="flex-column">
            <Link to="/">
              <img src={logo} alt="logo" className="w-100 mb-5 logo" />
            </Link>
            {/*Le menu du dashboard s'affiche seulement pour l'administrateur */}
            {searchString === "999" ? (
              <div>
                <Nav.Link
                  className="text-light"
                  onClick={() => setAdminSection("validation")}
                >
                  <AiFillHome /> Accueil
                </Nav.Link>
                <Nav.Link
                  className="text-light"
                  onClick={() => setAdminSection("offres")}
                >
                  <FaArrowCircleRight /> Offres de stage
                </Nav.Link>
                <Nav.Link
                  className="text-light"
                  onClick={() => setAdminSection("demandes")}
                >
                  <FaArrowCircleLeft /> Demandes de stage
                </Nav.Link>
                <Nav.Link
                  className="text-light "
                  onClick={() => setAdminSection("candidats")}
                >
                  <FaUserGraduate /> Candidats
                </Nav.Link>
                <Nav.Link
                  className="text-light mb-5"
                  onClick={() => setAdminSection("entreprises")}
                >
                  <FaUserTie /> Entreprises
                </Nav.Link>
                <Link
                  to="/"
                  className="text-light"
                  onClick={function () {
                    logout();
                    ls.clear();
                  }}
                >
                  Déconnexion
                </Link>
              </div>
            ) : (
              <Link
                to="/"
                className="text-light"
                onClick={function () {
                  logout();
                  ls.clear();
                }}
              >
                Déconnexion
              </Link>
            )}
          </Nav>
        </Col>
        {/*affichage de la page */}
        <Col xs={8} md={10}>
          <Container fluid>
            {/*en-tête de la page */}
            <Row className="py-3">
              {renderSwitchBouton()}

              <Col sm={12} md={9} lg={5} className="d-flex flex-row text-right">
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
                {/*DropDown, liste des demandes et profil */}

                {searchString === 111 || searchString === 333 ? (
                  <div className="my-auto mx-1">
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic" variant="light">
                        <IoIosArrowDown />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() => setEtudiantSection("profil")}
                        >
                          Mon profil
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => setEtudiantSection("demandes")}
                        >
                          Mes demandes de stage
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                ) : (
                  <div className="my-auto mx-1">
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic" variant="light">
                        <IoIosArrowDown />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() => setAdminSection("profil")}
                        >
                          Mon profil
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                )}
              </Col>
              {/*Déconnexion */}
              <Col sm={12} md={1} className="text-right">
                <Link
                  to="/"
                  onClick={function () {
                    logout();
                    ls.clear();
                  }}
                >
                  <h1 className="text-dark">
                    <BsBoxArrowRight />
                  </h1>
                </Link>
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
