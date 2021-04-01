import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";

import { BsArrow90DegRight } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import { FaUserGraduate } from "react-icons/fa";

// Hook pour la fiche détaillée du candidat avec le lien profil ou pour les entreprises
//Pour le lien profil dans admin, props = user
function Details(props) {
  //variable pour l'étudiant connecté
  const [donneesRecues, setDonneesRecues] = useState([]);

  //Fonction éxécuté à chaque appel du composant
  useEffect(() => {
    //appelle la fonction pour les données de l'API
    getUtilisateurs();
  }, donneesRecues);
  //Données de la base de donnée de l'étudiant connecté
  async function getUtilisateurs() {
    try {
      const response = await fetch(
        process.env.REACT_APP_API +
          process.env.REACT_APP_UTILISATEURS +
          "/" +
          props.user
      );
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);
      if (!response.ok) {
        //Permet d'attraper l'erreur 500 et l'erreur 400
        throw Error(response.statusText);
      }
    } catch (error) {
      //On gère l'erreurdsas
      console.log(error);
    }
    console.log(donneesRecues);
  }
  return (
    <Container fluid className="h-100 adminDetails">
      <Row className="mb-5">
        {/*Titre */}
        <Col lg={6}>
          <h1>
            Fiche du candidat: {donneesRecues.prenom} {donneesRecues.nom}
          </h1>
        </Col>
        <Col lg={6}>
          <h1>
            <BsArrow90DegRight style={{ transform: "rotate(90deg)" }} />
          </h1>
        </Col>
      </Row>
      <Row>
        {/*<Col lg={12}>
          <Button>Retour à la liste</Button>
  </Col>*/}
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
            <FaUserGraduate className="mr-2" />
            {/*<FaUserTie />*/}
            {donneesRecues.prenom} {donneesRecues.nom}
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
                <td>
                  {donneesRecues.prenom} {donneesRecues.nom}
                </td>
              </tr>
              <tr>
                <td>
                  <h5>Adresse</h5>
                </td>
                <td>{donneesRecues.adresse}</td>
              </tr>
              <tr>
                <td>
                  <h5>Courriel</h5>
                </td>
                <td>{donneesRecues.courriel}</td>
              </tr>
              <tr>
                <td>
                  <h5>Téléphone</h5>
                </td>
                <td>{donneesRecues.telephone}</td>
              </tr>
              <tr>
                <td>
                  <h5>Ville</h5>
                </td>
                <td>{donneesRecues.ville}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      {/*<Row>
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
      </Row>*/}
    </Container>
  );
}

export default Details;
