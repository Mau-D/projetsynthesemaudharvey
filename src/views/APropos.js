import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import EnTete from "../components/public/EnTete";
import LiensEmploiListe from "../components/public/LiensEmploiListe";
import PiedDePage from "../components/public/PiedDePage";
import ImageTexte from "../components/public/ImageTexte";

import forcesavenir from "../img/forcesavenir.svg";
import centraide from "../img/centraide.svg";
import renojouets from "../img/renojouets.svg";
import logoNoir from "../img/logoNoir.svg";

// Hook pour la page À Propos
function APropos() {
  return (
    <Container fluid className="h-100">
      {/* Banniere */}
      <Row className="mb-5">
        <Col lg={12} className="p-0 banniereAPropos">
          {/*Trouver un moyen de changer le background image */}
          <Container
            fluid
            className="h-100 d-flex flex-column justify-content-between bannierePropos"
          >
            <EnTete titre="À propos"></EnTete>
          </Container>
        </Col>
      </Row>
      {/*Texte de présentation avec logo*/}
      <Row className="m-5">
        <Col lg={6} className="text-center py-auto">
          <img src={logoNoir} alt="logo" />
        </Col>
        <Col lg={6} className="my-auto px-5">
          <p className="pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            bibendum ex in ante condimentum, ac pellentesque elit condimentum.
            Nullam auctor congue tellus, quis pulvinar ligula consequat ac. Cras
            sit amet ligula id ipsum pharetra aliquet ac in ipsum. Ut consequat
            nisi vitae magna tristique faucibus vitae quis lorem. Nunc ex
            tellus, mattis vel congue eu, pulvinar sit amet nisl. Aliquam
            elementum sapien sed augue eleifend cursus. Suspendisse nisi tellus,
            bibendum at auctor eget, convallis non enim. Quisque erat nisi,
            convallis vel tortor in, dapibus pretium enim. Cras malesuada
            ultrices venenatis.
          </p>
        </Col>
      </Row>
      {/* Valeurs*/}
      <Row className="m-5">
        <Col lg={12} className="p-0">
          <Container fluid>
            <Row className="text-center">
              <Col lg={4}>
                <Image fluid src={forcesavenir} />
                <h4 className="m-4">FORCES AVENIR</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  bibendum ex in ante condimentum, ac pellentesque elit
                  condimentum. Nullam auctor congue tellus, quis pulvinar ligula
                  consequat ac. Cras sit amet ligula id ipsum pharetra aliquet
                  ac in ipsum. Ut consequat nisi vitae magna tristique faucibus
                  vitae quis lorem.
                </p>
              </Col>
              <Col lg={4}>
                <Image fluid src={centraide} />
                <h4 className="m-4">CENTRAIDE</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  bibendum ex in ante condimentum, ac pellentesque elit
                  condimentum. Nullam auctor congue tellus, quis pulvinar ligula
                  consequat ac. Cras sit amet ligula id ipsum pharetra aliquet
                  ac in ipsum. Ut consequat nisi vitae magna tristique faucibus
                  vitae quis lorem.
                </p>
              </Col>
              <Col lg={4}>
                <Image fluid src={renojouets} />
                <h4 className="m-4">FONDATION RÉNO-JOUETS</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  bibendum ex in ante condimentum, ac pellentesque elit
                  condimentum. Nullam auctor congue tellus, quis pulvinar ligula
                  consequat ac. Cras sit amet ligula id ipsum pharetra aliquet
                  ac in ipsum. Ut consequat nisi vitae magna tristique faucibus
                  vitae quis lorem.
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      {/*Texte*/}
      <Row className="mx-5 mt-5 bg-primary text-light">
        <Col lg={12} className="p-5">
          <h3 className="px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h3>
          <h4 className="p-5 fondBleu">
            Etiam mattis est in tellus mattis maximus. Etiam non molestie metus.
            Donec quis mauris metus. Cras tempor varius odio, nec varius nisi
            sollicitudin ac. Praesent vitae elementum augue, non suscipit
            turpis. Etiam blandit vitae quam nec porttitor. Duis libero nunc,
            iaculis at diam in, scelerisque dapibus mauris. Aenean faucibus est
            lectus, elementum pellentesque nisi cursus at. Maecenas nec
            elementum enim, vel egestas nisi.
          </h4>
        </Col>
      </Row>
      {/* Image et texte */}
      <Row className="bg-dark mx-5 text-light">
        <Col lg={12} className="p-0">
          <ImageTexte></ImageTexte>
        </Col>
      </Row>
      {/* bannière publicitaire */}
      <Row className="m-5 bkg-dark bannierePub">
        <Col lg={12} className="m-5">
          {/***************background d'une image de publicité, voir si ajouter le lien pour postuler */}
        </Col>
      </Row>
      {/* Liens des demandes par titre d'emploi */}
      <Row>
        <Col lg={12} className="p-0">
          <LiensEmploiListe></LiensEmploiListe>
        </Col>
      </Row>
      {/* Pied de page*/}
      <Row className="p-5">
        <Col lg={12} className="p-5">
          <PiedDePage></PiedDePage>
        </Col>
      </Row>
    </Container>
  );
}

export default APropos;
