import React from "react";
import { Col, Button } from "react-bootstrap";

// Hook pour le lien d'un emploi en demande de stage
function LienEmploi() {
  return (
    <Col sm={3}>
      <Button variant="link">Developer jobs</Button>
    </Col>
  );
}

export default LienEmploi;
