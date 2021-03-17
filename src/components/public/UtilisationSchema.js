import React from "react";
import { NavLink } from "react-router-dom";
import { Col } from "react-bootstrap";

import BoutonInscription from "../boutons/BoutonInscription";
import schema from "../../img/schema.svg";

// Hook pour le schéma d'utilisation du site web
function UtilisationSchema() {
  return (
    <Col lg={12} className="text-center mb-5">
      <h2 className="mb-5">Facile à utiliser</h2>
      <p className="mb-5">
        Pellentesque vehicula fermentum turpis eu cursus. Cras convallis tellus
        et elit aliquet, vitae dignissim ligula sodales.
      </p>
      <img src={schema} alt="logo" className="mb-5" />
      <NavLink to="accescompte">
        <BoutonInscription
          labelBouton={"Inscrivez-vous maintenant"}
        ></BoutonInscription>
      </NavLink>
    </Col>
  );
}

export default UtilisationSchema;
