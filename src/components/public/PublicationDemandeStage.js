import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

import publicationDemande from "../../img/publicationDemande.svg";

// Hook pour la section Trouvez un stage à la hauteur de vos attentes
function PublicationDemandeStage() {
  return (
    <Container fluid className="p-0">
      <Row className="p-0">
        <Col lg={6} className="p-0 my-auto">
          <div className="text-left w-50 mx-auto">
            <h1 className="mb-5">
              Trouvez un stage à la hauteur de vos attentes
            </h1>
            <p>
              Pellentesque vehicula fermentum turpis eu cursus. Cras convallis
              tellus et elit aliquet, vitae dignissim ligula sodales.
            </p>
            <ul>
              <li>Cras convallis tellus et elit aliquet 20%</li>
              <li>Suspendisse tincidunt vulputate leo in sollicitudin</li>
              <li>Morbi sodales risus quis orci hendrerit semper</li>
            </ul>
            <NavLink to="/accescompte">
              <Button size="md" className="mt-3 publierDemande">
                Publier une demande de stage maintenant
              </Button>
            </NavLink>
          </div>
        </Col>
        <Col lg={6} className="p-0">
          <Image fluid src={publicationDemande} />
        </Col>
      </Row>
    </Container>
  );
}

export default PublicationDemandeStage;
