import React from "react";
import { Container, Row, Col, Button, Table, Form } from "react-bootstrap";

import { BsArrow90DegRight } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import { FaUserGraduate, FaUserTie } from "react-icons/fa";

// Hook pour la fiche détaillée
function Details() {
  return (
    <Container fluid className="h-100">
      <Row className="mb-5">
        {/*Titre */}
        <Col lg={12}>
          <h1>
            Fiche du candidat
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
          <Button className="m-1">
            <BsPencilSquare />
            Modifier
          </Button>
          <Button>
            <TiDelete />
            Supprimer
          </Button>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>mettre un br</Col>
      </Row>
      <Row>
        <Col lg={12}>
          <FaUserGraduate />
          <FaUserTie />
          Nom complet
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>Nom et prénom du stagiaire</td>
                <td>Maud Harvey</td>
              </tr>
              <tr>
                <td>Établissement scolaire</td>
                <td>Cégep</td>
              </tr>
              <tr>
                <td>programme</td>
                <td>DEv web</td>
              </tr>
              <tr>
                <td>Téléphone</td>
                <td>D32423-23432-324</td>
              </tr>
              <tr>
                <td>Ville</td>
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
              <Form.Control as="textarea" rows={3} />
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
