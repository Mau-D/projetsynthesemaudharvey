import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";

import "./style/stylesheets/main.sass";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Accueil from "./views/Accueil";
import APropos from "./views/APropos";
import Confidentialite from "./views/Confidentialite";
import Contact from "./views/Contact";
import Partenaires from "./views/Partenaires";
import OffresStageListe from "./views/OffresStageListe";
import DemandesStageListe from "./views/DemandesStageListe";
import AccesCompte from "./views/AccesCompte";
import Admin from "./views/Admin";
import FormEditDemande from "./components/admin/FormEditDemande";
import FormAjoutDemande from "./components/admin/FormAjoutDemande";

function App() {
  var ls = require("local-storage");

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
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
          <Route
            path="/demandesstage/:candidat"
            component={DemandesStageListe}
          />
          {/*Dans la recherche du stage, le lien détails affiche la section détaillée de l'offre de stage au lieu de la liste*/}
          <Route path="/offresstage/:entreprise" component={OffresStageListe} />
          {/*Dans l'entête et dans les sections des publications, lien pour la page affichant des formulaires pour la connexion ou l'inscription*/}
          <Route path="/accescompte/" component={AccesCompte} />
          {/*Formulaire d'édition d'une demande avec l'id de la demande en paramètre*/}
          <Route path="/admin/edition/:demandeId" component={FormEditDemande} />
          {/*Formulaire d'ajout d'une demande, id de l'utilisateur en paramètre*/}
          <Route
            path="/admin/ajout/:utilisateurId"
            component={FormAjoutDemande}
          />
          {/*Lors de la connexion avec le niveau d'acces passé en paramètre*/}
          <Route path="/admin/:acces" component={Admin} />

          {/*En cas d'erreur dans l'url on retourne à la page d'accueil*/}
          <Redirect to="/" />
        </Switch>
      </Container>
    </>
  );
}

export default App;
