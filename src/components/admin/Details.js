import React from "react";
import { Container, Row, Col, Button, Table, Form } from "react-bootstrap";

import { BsArrow90DegRight } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import { FaUserGraduate, FaUserTie } from "react-icons/fa";

// Hook pour la fiche détaillée
function Details() {
  return (
    <Container fluid className="h-100 adminDetails">
      <Row className="mb-5">
        {/*Titre */}
        <Col lg={6}>
          <h1>Fiche du candidat</h1>
        </Col>
        <Col lg={6}>
          <h1>
            {" "}
            <BsArrow90DegRight style={{ transform: "rotate(90deg)" }} />
          </h1>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Button>Retour à la liste</Button>
        </Col>
      </Row>
      <Row>
        <Col lg={12} className="text-right">
          <Button variant="light" className="m-2">
            <BsPencilSquare className="vert mx-1" />
            Modifier
          </Button>
          <Button variant="light" className="m-2">
            <TiDelete className="rouge mx-1" />
            Supprimer
          </Button>
        </Col>
      </Row>
      <Row className="bordureBleu p-3">
        <Col lg={12}>
          <h3>
            <FaUserGraduate />
            <FaUserTie />
            Nom complet
          </h3>
        </Col>
      </Row>
      <Row>
        <Col lg={12} className="py-3">
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>
                  <h5>Nom et prénom du stagiaire</h5>
                </td>
                <td>Maud Harvey</td>
              </tr>
              <tr>
                <td>
                  <h5>Établissement scolaire</h5>
                </td>
                <td>Cégep</td>
              </tr>
              <tr>
                <td>
                  <h5>Programme</h5>
                </td>
                <td>DEv web</td>
              </tr>
              <tr>
                <td>
                  <h5>Téléphone</h5>
                </td>
                <td>D32423-23432-324</td>
              </tr>
              <tr>
                <td>
                  <h5>Ville</h5>
                </td>
                <td>Jonquière</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={8} />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col lg={12} className="text-right">
          <Button>Envoyer</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Details;
