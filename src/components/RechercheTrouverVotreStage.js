import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { InputGroup, FormControl, Button } from "react-bootstrap";

// Hook pour la barre de recherche de stage
function RechercheTrouverVotreStage() {
  return (
    <Container>
      <Row className="mb-5 text-light">
        <Col sm={12} className="mx-auto text-center">
          <h1>Trouvez votre stage!</h1>
        </Col>
      </Row>
      {/* Button adons pour la barre de recherche */}
      <Row className="w-50 mx-auto">
        <Col sm={12}>
          <InputGroup>
            <FormControl
              placeholder="Mot clé"
              aria-label="Mot clé"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button>Rechercher</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default RechercheTrouverVotreStage;
