import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./style/stylesheets/main.sass";

import Accueil from "./views/Accueil";
import APropos from "./views/APropos";
import Confidentialite from "./views/Confidentialite";
import Contact from "./views/Contact";
import Partenaires from "./views/Partenaires";
import OffresStageListe from "./views/OffresStageListe";
import DemandesStageListe from "./views/DemandesStageListe";
import AccesCompte from "./views/AccesCompte";

function App() {
  return (
    <Container fluid>
      <Switch>
        {/*Accueil est la première page*/}
        <Route path="/" exact component={Accueil} />
        {/*Dans le menu, lien pour la page À propos*/}
        <Route path="/apropos" component={APropos} />
        {/*Dans le menu, lien pour la page de la politique et confidentialité*/}
        <Route path="/confidentialite" component={Confidentialite} />
        {/*Dans le menu, lien pour le formulaire de contact*/}
        <Route path="/contact" component={Contact} />
        {/*Dans le menu, lien pour la page affichant tous les partenaires*/}
        <Route path="/partenaires" component={Partenaires} />
        {/*Dans l'entête, lien pour la page affichant toutes les offres de stage*/}
        <Route path="/offresstage" component={OffresStageListe} />
        {/*Dans l'entête et dans les sections des offres et demandes récentes, lien pour la page affichant toutes les demandes de stage*/}
        <Route path="/demandesstage" component={DemandesStageListe} />
        {/*Dans la recherche du stagiaire, le lien détails affiche la section détaillée de la demande de stage au lieu de la liste*/}
        <Route path="/demandesstage/:candidat" component={DemandesStageListe} />
        {/*Dans l'entête et dans les sections des publications, lien pour la page affichant des formulaires pour la connexion ou l'inscription*/}
        <Route path="/accescompte" component={AccesCompte} />
        {/*En cas d'erreur dans l'url on retourne à la page d'accueil*/}
        <Redirect to="/" />
      </Switch>
    </Container>
  );
}

export default App;
