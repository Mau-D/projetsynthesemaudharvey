import React from "react";
import { Container, Row } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

// Hook pour la bannière
function PiedDePage() {
  return (
    <Container fluid>
      {/* Menu avec logo et bouton, navbar collapsible */}
      <Row>
        <Navbar className="w-100">
          <Navbar.Text className="justify-content-start">
            © 2021 EnStage - Projet éducationnel
          </Navbar.Text>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ml-auto">
              <NavLink to="/">Accueil</NavLink>
              <NavLink to="/apropos">À propos</NavLink>
              <NavLink to="/confidentialite">Confidentialité</NavLink>
              <NavLink to="/contact">Nous joindre</NavLink>
              <NavLink to="/partenaires">Partenaires</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </Container>
  );
}
export default PiedDePage;
