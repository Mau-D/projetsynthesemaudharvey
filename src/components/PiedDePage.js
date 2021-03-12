import React from "react";
import { Container, Row } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";

// Hook pour la bannière
function PiedDePage() {
  return (
    <Container fluid>
      {/* Menu avec logo et bouton, navbar collapsible */}
      <Row>
        <Navbar className="w-100">
          <Navbar.Text className="justify-content-start">
            © 2021 <span>EnStage</span> - Projet éducationnel
          </Navbar.Text>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Item>
              <Nav.Link href="/home">Accueil</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#pricing">À propos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#pricing">Confidentialité</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#pricing">Nous joindre</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#pricing">Partenaires</Nav.Link>
            </Nav.Item>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </Container>
  );
}
export default PiedDePage;
