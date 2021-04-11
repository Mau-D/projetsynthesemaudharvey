import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

// Hook pour la bannière
function PiedDePage() {
  return (
    <Container fluid>
      {/* Menu avec logo et bouton, navbar collapsible */}
      <Row>
        <Col xs={12} className="p-0">
          <Navbar className="p-0">
            <Navbar.Text className="justify-content-start">
              © 2021 EnStage - Projet éducationnel
            </Navbar.Text>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="ml-auto">
                <NavItem>
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
                  <Link to="/contact">Nous joindre</Link>
                </NavItem>

                <NavItem>
                  <Link to="/partenaires">Partenaires</Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}
export default PiedDePage;
