import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";

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
import Details from "../components/admin/Details";

// Hook pour la page d'administration
function Admin() {
  return (
    <Container fluid className="h-100">
      <Row>
        {/*Menu de navigation */}
        <Col lg={2} className="bg-primary">
          <Nav variant="tabs" defaultActiveKey="/home" className="flex-column">
            <Navbar.Brand>
              <img fluid src={logo} alt="logo" className="w-100 mb-5" />
            </Navbar.Brand>
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
          </Nav>
        </Col>
        {/*affichage de la page */}
        <Col lg={10}>
          <Container fluid>
            {/*en-tête de la page */}
            <Row className="py-3">
              <Col lg={3}>
                <BoutonAjoutOffre></BoutonAjoutOffre>
              </Col>
              <Col lg={3}>
                <BoutonAjoutDemande></BoutonAjoutDemande>
              </Col>
              <Col lg={3} className="d-flex flex-row text-right">
                <div>
                  <h3>Nom complet</h3>
                  <h5>statut</h5>
                </div>
                <div className="mx-2">
                  <Image
                    fluid
                    src="https://www.mariderm.com/wp-content/uploads/2018/12/visage-tonus-after.jpg"
                    roundedCircle
                    style={{ height: "10vh" }}
                  />
                </div>
                <div className="my-auto">
                  <IoIosArrowDown />
                </div>
              </Col>
              <Col lg={3} className="text-right">
                <IoIosNotificationsOutline />
                <BsBoxArrowRight />
              </Col>
            </Row>
            {/*affichage dynamique */}
            <Row>
              <Details></Details>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Admin;
