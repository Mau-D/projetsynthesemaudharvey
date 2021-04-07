import React from "react";
import { Container, Row } from "react-bootstrap";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

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
              <NavItem>
                {" "}
                <Link to="/">Accueil</Link>
              </NavItem>

              <NavItem>
                <Link to="/apropos" className="apropos">
                  À propos
                </Link>
              </NavItem>

              <NavItem>
                <Link to="/confidentialite">Confidentialité</Link>
              </NavItem>

              <NavItem>
                {" "}
                <Link to="/contact">Nous joindre</Link>
              </NavItem>

              <NavItem>
                <Link to="/partenaires">Partenaires</Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </Container>
  );
}
export default PiedDePage;
