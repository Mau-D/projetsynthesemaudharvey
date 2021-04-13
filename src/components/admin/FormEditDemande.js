import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import Moment from "moment";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import fr from "date-fns/locale/fr-CA";
registerLocale("fr", fr);
/*Fonction pour l'édition d'une demande de stage*/
function FormEditDemande() {
  //Variable pour connaître la page où je me trouve, pour aller chercher des informations dans l'url
  let location = useLocation();
  //Variable pour récupérer l'id dans l'url, avec la propriété search
  var stringId = location.search.replace("?id=", "");
  //useEffect, Obtenir les demandes de stage et la liste des secteurs d'activité
  useEffect(() => {
    getDemande();
  }, []);
  useEffect(() => {
    getSecteurs();
  }, []);
  useEffect(() => {
    var formations = objetDemande.autresFormations;
    var competences = objetDemande.competences;
    setAutresFormationsEdit(formations);
    setCompetences(competences);
    setChange(false);
  }, []);
  //On récupère les infos de la bd de la demande sélectionnée
  async function getDemande() {
    //Variable pour les données de la demande sélectionnée
    try {
      const response = await fetch(
        process.env.REACT_APP_API +
          process.env.REACT_APP_DEMANDES +
          "/" +
          stringId
      );
      const reponseDeApi = await response.json();
      setObjetDemande(reponseDeApi);
      if (!response.ok) {
        //Permet d'attraper l'erreur 500 et l'erreur 400
        throw Error(response.statusText);
      }
    } catch (error) {
      //On gère l'erreur
      console.log(error);
    }
  }
  //Variable des informations de la demande sélectionnée
  const [objetDemande, setObjetDemande] = useState({
    titre: "",
    secteurActivite: "",
    ville: "",
    dateDebut: new Date(),
    dateFin: new Date(),
    duree: null,
    description: "",
    nbHeuresSemaine: null,
    autresInformations: "",
    programmeSuivi: "",
    autresFormations: [],
    competences: [],
    typestage: "",
    remunere: "",
    dateParution: new Date(),
    etudiant: "",
    actif: null,
    valide: null,
    supprime: null,
    vedette: null,
  });

  //Variables pour les informations du formulaire
  let [secteurs, setSecteurs] = useState([]);
  let [secteurChoisi, setSecteurChoisi] = useState("");
  let [dateDebutEdit, setDateDebutEdit] = useState(new Date());
  let [dateFinEdit, setDateFinEdit] = useState(new Date());
  let [change, setChange] = useState(false);

  let [autresFormationsEdit, setAutresFormationsEdit] = useState([]);
  let [competences, setCompetences] = useState([]);
  let [typeStage, setTypeStage] = useState("");

  //On récupère les infos de la bd de la liste des secteurs d'activité
  async function getSecteurs() {
    //Variables pour les données de l'étudiant qui fait la demande
    try {
      const response = await fetch(
        process.env.REACT_APP_API + process.env.REACT_APP_SECTEURS
      );
      const reponseDeApi = await response.json();
      setSecteurs(reponseDeApi);
      if (!response.ok) {
        //Permet d'attraper l'erreur 500 et l'erreur 400
        throw Error(response.statusText);
      }
    } catch (error) {
      //On gère l'erreur
      console.log(error);
    }
  }

  //Méthode pour modifier la bd avec le formulaire, semblable à l'ajout ajouter l'id à l'URL et changer la methode pour PUT
  async function editDemande(
    titre,
    ville,
    duree,
    description,
    nbHeuresSemaine,
    autresInfos,
    programmeSuivi,
    type,
    remuneration
  ) {
    try {
      const response = await fetch(
        process.env.REACT_APP_API +
          process.env.REACT_APP_DEMANDES +
          "/" +
          stringId,
        {
          /*Pour un ajout utiliser la méthode POST */
          method: "PUT",
          /*Pour un ajout ajouter un headers */
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            titre: titre,
            secteurActivite: secteurChoisi,
            ville: ville,
            dateDebut: dateDebutEdit,
            dateFin: dateFinEdit,
            duree: duree,
            description: description,
            nbHeuresSemaine: nbHeuresSemaine,
            autresInformations: autresInfos,
            programmeSuivi: programmeSuivi,
            autresFormations: autresFormationsEdit,
            competences: competences,
            typestage: type,
            remunere: remuneration,
            dateParution: objetDemande.dateParution,
            etudiant: objetDemande.etudiant,
            //Pas nécessaire de modifier les paramètres (actif, valide et supprime), cette étape se fait lors de la validation ou le bouton supprimer
            actif: true,
            valide: true,
            supprime: false,
            vedette: objetDemande.vedette,
          }),
        }
      );
      if (response.ok) {
        //const jsonResponse = await response.json();
        // props.history.push(
        //   "/trip/" + donneesRecues.nom + "?id=" + donneesRecues._id
        //  ); //Retour à la page d'accueil

        return response;
      }
      throw new Error("Request failed!");
    } catch (error) {
      console.log(error);
    }
  }
  /* Va chercher les infos des inputs du formulaire */
  function handleEdit(event) {
    event.preventDefault(); /*Empêche de rafraîchir la page, car le bouton est de type submit*/

    /*variables des infos entrées dans le formulaire*/
    const titreEdit = document.getElementById("titreId").value;
    const villeEdit = document.getElementById("villeId").value;
    const dureeEdit = document.getElementById("dureeId").value;
    const descriptionEdit = document.getElementById("descriptionId").value;
    const heuresSemaineEdit = document.getElementById("heuresSemaineId").value;
    const autresInfosEdit = document.getElementById("autresInfosId").value;
    const programmeSuiviEdit = document.getElementById("programmeSuiviId")
      .value;
    const typeStageEdit = document.getElementById("typeStageId").value;
    const remunerationEdit = document.getElementById("remunereId").value;
    /*Fonction pour entrer les infos dans la bd */
    /*Ajouter les compétences et autres Formations provenant d'une variable tableau */
    editDemande(
      titreEdit,
      villeEdit,
      dureeEdit,
      descriptionEdit,
      heuresSemaineEdit,
      autresInfosEdit,
      programmeSuiviEdit,
      typeStageEdit,
      remunerationEdit
    );
  }

  //Fonction pour le changement du secteur d'activité
  function handleChangeSecteur(e) {
    console.log("Secteur Selected!!");
    setSecteurChoisi(e.target.value);
  }

  //Fonctions lors d'un changement dans les autres formations
  //Si la valeur du checked est true ajouter la valeur au tableau, sinon effacer à partir de l'index
  function handleChangeFormations(i) {
    let tabFormations = autresFormationsEdit;
    tabFormations.splice(i, 1);
    setAutresFormationsEdit(tabFormations);
    setChange(true);
  }
  //Fonctions lors d'un changement dans les autres formations
  //Si la valeur du checked est true ajouter la valeur au tableau, sinon effacer à partir de l'index

  function handleChangeCompetences(i) {
    let tabCompetences = competences;
    tabCompetences.splice(i, 1);
    setCompetences(tabCompetences);
    setChange(true);
  }

  console.log("dateDebut " + dateDebutEdit);
  //Fonction pour ajouter une formation supplémentaire
  function handleClickAjoutFormation() {
    console.log("fonction ajout formation" + autresFormationsEdit);
    let tabformations = autresFormationsEdit;
    let formationAjoutee = document.getElementById("formationId").value;
    tabformations.push(formationAjoutee);
    setAutresFormationsEdit(tabformations);
    setChange(true);
  }
  //Fonction pour ajouter une compétence supplémentaire
  function handleClickAjoutCompetence() {
    console.log("fonction ajout formation" + competences);
    let tabcompetences = competences;
    let competenceAjoutee = document.getElementById("competenceId").value;
    tabcompetences.push(competenceAjoutee);
    setCompetences(tabcompetences);
    setChange(true);
  }

  console.log("type de stage" + typeStage);
  return (
    <Container fluid id="formEdit">
      <Container>
        <Row>
          <Col xs={12}>
            <h1 className="my-5 text-center font-large">
              Modifier la demande {objetDemande._id}
            </h1>
          </Col>
        </Row>
        <Row className="fondGris">
          <Col xs={12}>
            <Form className="py-5">
              <Form.Group controlId="titreId">
                <Form.Label>Titre de la demande</Form.Label>
                <Form.Control type="text" defaultValue={objetDemande.titre} />
              </Form.Group>
              <Form.Group>
                <select id="selectSecteur" onChange={handleChangeSecteur}>
                  {secteurs.map((item) => (
                    <option
                      selected={item._id === objetDemande.secteurActivite}
                      key={item.nom}
                      value={item.nom}
                    >
                      {item.nom}
                    </option>
                  ))}
                </select>
              </Form.Group>
              <Form.Group controlId="villeId">
                <Form.Label>Ville</Form.Label>
                <Form.Control type="text" defaultValue={objetDemande.ville} />
              </Form.Group>
              <p>
                *****Il faudra ajouter la valeur par défaut des
                datepickers*******
              </p>
              <label className="d-block">Date du début du stage</label>
              {/*Faire des datepickers pour les dates  selected={Moment(objetDemande.dateDebut).format("DD/MM/YYYY")}*/}
              {/*moment().format("ddd, MMM DD YYYY, hh:mm:ss");  */}
              <DatePicker
                utcOffset
                locale="fr"
                dateFormat="MM/dd/yyyy"
                onChange={(evt) => setDateDebutEdit(Moment(evt).toDate())}
                selected={Moment(dateDebutEdit).toDate()}
              />
              <label className="d-block">Date de fin du stage</label>
              {/*Faire des datepickers pour les dates  selected={Moment(objetDemande.dateDebut).format("DD/MM/YYYY")}*/}
              {/*moment().format("ddd, MMM DD YYYY, hh:mm:ss");  */}
              <DatePicker
                utcOffset
                locale="fr"
                dateFormat="MM/dd/yyyy"
                onChange={(evt) => setDateFinEdit(Moment(evt).toDate())}
                selected={Moment(dateFinEdit).toDate()}
              />
              <Form.Group>
                <Form.Label className="mr-2">
                  Durée en nombre de semaines
                </Form.Label>
                <input
                  id="dureeId"
                  type="number"
                  defaultValue={objetDemande.duree}
                />
              </Form.Group>
              <Form.Group controlId="descriptionId">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={8}
                  defaultValue={objetDemande.description}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="mr-2">
                  Nombre d'heures/semaine
                </Form.Label>
                <input
                  id="heuresSemaineId"
                  type="number"
                  defaultValue={objetDemande.nbHeuresSemaine}
                />
              </Form.Group>
              {/*Changer pour un textarea */}
              <Form.Group controlId="autresInfosId">
                <Form.Label>Informations supplémentaires</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={8}
                  defaultValue={objetDemande.autresInformations}
                />
              </Form.Group>
              <Form.Group controlId="programmeSuiviId">
                <Form.Label>Programme suivi</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={objetDemande.programmeSuivi}
                />
              </Form.Group>
              {/*Les autres formations et les compétences sont affichées avec des checkbox*/}
              <h3>Formations supplémentaires</h3>
              {autresFormationsEdit.map((item, i) => {
                console.log("item" + item);
                console.log("À l'affichage" + autresFormationsEdit);

                return (
                  <div>
                    <input
                      id={item}
                      type="checkbox"
                      value={item}
                      checked
                      onClick={() => handleChangeFormations(i)}
                    />
                    <label for={item} className="ml-2">
                      {item}
                    </label>
                  </div>
                );
              })}
              <input type="text" className="mr-2" id="formationId"></input>
              <Button type="button" onClick={handleClickAjoutFormation}>
                <IoMdAdd onClick={() => handleClickAjoutFormation} />
              </Button>

              <h3>Compétences</h3>
              <Form.Group controlId="checkboxCompetences">
                {competences.map((item, i) => {
                  return (
                    <div>
                      <input
                        id={item}
                        type="checkbox"
                        value={item}
                        checked
                        onClick={() => handleChangeCompetences(i)}
                      />
                      <label for={item} className="ml-2">
                        {item}
                      </label>
                    </div>
                  );
                })}
                <input type="text" className="mr-2" id="competenceId"></input>
                <Button type="button" onClick={handleClickAjoutCompetence}>
                  <IoMdAdd onClick={() => handleClickAjoutCompetence} />
                </Button>
              </Form.Group>
              {/*Ajouter un label,  Voir pour changer pour des boutons radio*/}
              <Form.Group>
                <h6>Type de stage</h6>
                <select id="typeStageId">
                  {/*pour garder la valeur dans le formulaire */}
                  <option selected>{objetDemande.typestage}</option>
                  <option value="Temps plein">Temps plein</option>
                  <option value="Temps partiel">Temps partiel</option>
                  <option value="Alternance travail étude">
                    Alternance travail étude
                  </option>
                </select>
              </Form.Group>
              {/*Ajouter un label,  Voir pour changer pour des boutons radio*/}
              <Form.Group>
                <h6>Rémunération</h6>
                <select id="remunereId">
                  {/*pour garder la valeur dans le formulaire */}
                  <option selected>{objetDemande.remunere}</option>
                  <option value="OUI">OUI</option>
                  <option value="NON">NON</option>
                  <option value="À la discrétion de l'entreprise">
                    À la discrétion de l'entreprise
                  </option>
                </select>
              </Form.Group>
              {/*ID de l'étudiant */}
              {/* Pour l'administrateur l'id est entré, pour l'étudiant la variable local ou le props */}
              <Form.Group controlId="etudiantId">
                <Form.Label>ID de l'étudiant</Form.Label>
                <Form.Control
                  disabled
                  type="text"
                  defaultValue={objetDemande.etudiant}
                />
              </Form.Group>
              {/*Changer pour un checkbox */}
              <Form.Group controlId="vedetteId">
                <Form.Label>Demande vedette</Form.Label>
                <Form.Control
                  disabled
                  type="text"
                  defaultValue={objetDemande.vedette}
                />
              </Form.Group>
            </Form>
            <Button
              id="enregistrer"
              className="my-5"
              variant="primary"
              type="submit"
              onClick={handleEdit}
            >
              Enregistrer
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default FormEditDemande;
