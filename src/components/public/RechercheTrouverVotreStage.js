import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { InputGroup, FormControl, Button } from "react-bootstrap";

// Hook pour la barre de recherche de stage
function RechercheTrouverVotreStage() {
  return (
    <Container>
      <Row className="mb-5 text-light">
        <Col lg={12} className="mx-auto text-center">
          <h2>Trouvez votre stage!</h2>
        </Col>
      </Row>
      {/* Button adons pour la barre de recherche */}
      <Row className="mx-auto">
        <Col sm={12} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
          <InputGroup>
            <FormControl
              placeholder="Mot clé"
              aria-label="Mot clé"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button className="recherche">Rechercher</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default RechercheTrouverVotreStage;
