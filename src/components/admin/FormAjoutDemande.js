import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import Moment from "moment";

import logoNoir from "../../img/logoNoir.svg";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import fr from "date-fns/locale/fr-CA";
registerLocale("fr", fr);
/*Fonction pour l'édition d'une demande de stage*/
function FormAjoutDemande(props) {
  //Déclare une variable pour le local storage
  var ls = require("local-storage");
  //Variable pour connaître la page où je me trouve, pour aller chercher des informations dans l'url
  let location = useLocation();
  //Variable pour récupérer l'id dans l'url, avec la propriété search
  var stringId = location.search.replace("?id=", "");
  //useEffect, Obtenir les secteurs d'activité pour le menu déroulant
  useEffect(() => {
    getSecteurs();
  }, []);
  useEffect(() => {
    setChange(false);
  });
  //Variables pour les informations du formulaire
  let [secteurs, setSecteurs] = useState([]);
  let [secteurChoisi, setSecteurChoisi] = useState("");
  let [dateDebutAdd, setDateDebutAdd] = useState(new Date());
  let [dateFinAdd, setDateFinAdd] = useState(new Date());
  let [change, setChange] = useState(false);

  let [autresFormationsAdd, setAutresFormationsAdd] = useState([]);
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
  async function AddDemande(
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
        process.env.REACT_APP_API + process.env.REACT_APP_DEMANDES,
        {
          /*Pour un ajout utiliser la méthode POST */
          method: "POST",
          /*Pour un ajout ajouter un headers */
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            titre: titre,
            secteurActivite: secteurChoisi,
            ville: ville,
            dateDebut: dateDebutAdd,
            dateFin: dateFinAdd,
            duree: duree,
            description: description,
            nbHeuresSemaine: nbHeuresSemaine,
            autresInformations: autresInfos,
            programmeSuivi: programmeSuivi,
            autresFormations: autresFormationsAdd,
            competences: competences,
            typestage: type,
            remunere: remuneration,
            dateParution: new Date(),
            etudiant: stringId,
            actif: true,
            valide: true,
            supprime: false,
            vedette: true,
          }),
        }
      );
      if (response.ok) {
        //const jsonResponse = await response.json();
        props.history.push(
          "/admin/" + ls.get("nom") + "?niveau=" + ls.get("niveau")
        ); //Retour à la page d'accueil

        return response;
      }
      throw new Error("Request failed!");
    } catch (error) {
      console.log(error);
    }
  }
  /* Va chercher les infos des inputs du formulaire */
  function handleAdd(event) {
    event.preventDefault(); /*Empêche de rafraîchir la page, car le bouton est de type submit*/

    /*variables des infos entrées dans le formulaire*/
    const titreAdd = document.getElementById("titreAddId").value;
    const villeAdd = document.getElementById("villeAddId").value;
    const dureeAdd = document.getElementById("dureeAddId").value;
    const descriptionAdd = document.getElementById("descriptionAddId").value;
    const heuresSemaineAdd = document.getElementById("heuresSemaineAddId")
      .value;
    const autresInfosAdd = document.getElementById("autresInfosAddId").value;
    const programmeSuiviAdd = document.getElementById("programmeSuiviAddId")
      .value;
    const typeStageAdd = document.getElementById("typeStageAddId").value;
    const remunerationAdd = document.getElementById("remunereAddId").value;
    /*Fonction pour entrer les infos dans la bd */
    /*Ajouter les compétences et autres Formations provenant d'une variable tableau */
    AddDemande(
      titreAdd,
      villeAdd,
      dureeAdd,
      descriptionAdd,
      heuresSemaineAdd,
      autresInfosAdd,
      programmeSuiviAdd,
      typeStageAdd,
      remunerationAdd
    );
  }

  //Fonction pour le changement du secteur d'activité
  function handleChangeSecteur(e) {
    setSecteurChoisi(e.target.value);
  }

  //Fonction lors d'un changement dans les autres formations
  //Si la valeur du checked est true ajouter la valeur au tableau, sinon effacer à partir de l'index
  function handleChangeFormations(i) {
    let tabFormations = autresFormationsAdd;
    tabFormations.splice(i, 1);
    setAutresFormationsAdd(tabFormations);
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

  //Fonction pour ajouter une formation supplémentaire
  function handleClickAjoutFormation() {
    let tabformations = autresFormationsAdd;
    let formationAjoutee = document.getElementById("formationAddId").value;
    tabformations.push(formationAjoutee);
    setAutresFormationsAdd(tabformations);
    setChange(true);
  }
  //Fonction pour ajouter une compétence supplémentaire
  function handleClickAjoutCompetence() {
    let tabcompetences = competences;
    let competenceAjoutee = document.getElementById("competenceAddId").value;
    tabcompetences.push(competenceAjoutee);
    setCompetences(tabcompetences);
    setChange(true);
  }

  return (
    <Container fluid id="formAdd">
      <Link to="/">
        <img src={logoNoir} alt="logo" className="w-50 mb-5 logo" />
      </Link>
      <Container>
        <Row>
          <Col xs={12}>
            <h1 className="my-5 text-center font-large">
              Ajouter une demande de stage
            </h1>
          </Col>
        </Row>
        <Row className="fondGris">
          <Col xs={12}>
            <Form className="py-5">
              <Form.Group controlId="titreAddId">
                <Form.Label>Titre de la demande</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group>
                <select id="selectSecteurAdd" onChange={handleChangeSecteur}>
                  {secteurs.map((item) => (
                    <option key={item.nom} value={item._id}>
                      {item.nom}
                    </option>
                  ))}
                </select>
              </Form.Group>
              <Form.Group controlId="villeAddId">
                <Form.Label>Ville</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <label className="d-block">Date du début du stage</label>
              {/*Faire des datepickers pour les dates  selected={Moment(objetDemande.dateDebut).format("DD/MM/YYYY")}*/}
              {/*moment().format("ddd, MMM DD YYYY, hh:mm:ss");  */}
              <DatePicker
                utcOffset
                locale="fr"
                dateFormat="MM/dd/yyyy"
                onChange={(evt) => setDateDebutAdd(Moment(evt).toDate())}
                selected={Moment(dateDebutAdd).toDate()}
              />
              <label className="d-block">Date de fin du stage</label>
              {/*Faire des datepickers pour les dates  selected={Moment(objetDemande.dateDebut).format("DD/MM/YYYY")}*/}
              {/*moment().format("ddd, MMM DD YYYY, hh:mm:ss");  */}
              <DatePicker
                utcOffset
                locale="fr"
                dateFormat="MM/dd/yyyy"
                onChange={(evt) => setDateFinAdd(Moment(evt).toDate())}
                selected={Moment(dateFinAdd).toDate()}
              />
              <Form.Group>
                <Form.Label className="mr-2">
                  Durée en nombre de semaines
                </Form.Label>
                <input id="dureeAddId" type="number" />
              </Form.Group>
              <Form.Group controlId="descriptionAddId">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={8} />
              </Form.Group>
              <Form.Group>
                <Form.Label className="mr-2">
                  Nombre d'heures/semaine
                </Form.Label>
                <input id="heuresSemaineAddId" type="number" />
              </Form.Group>
              {/*Changer pour un textarea */}
              <Form.Group controlId="autresInfosAddId">
                <Form.Label>Informations supplémentaires</Form.Label>
                <Form.Control as="textarea" rows={8} />
              </Form.Group>
              <Form.Group controlId="programmeSuiviAddId">
                <Form.Label>Programme suivi</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              {/*Les autres formations et les compétences sont affichées avec des checkbox*/}
              <h3>Formations supplémentaires</h3>
              {autresFormationsAdd.map((item, i) => {
                return (
                  <div>
                    <input
                      key={item + i}
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
              <input type="text" className="mr-2" id="formationAddId"></input>
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
                <input
                  type="text"
                  className="mr-2"
                  id="competenceAddId"
                ></input>
                <Button type="button" onClick={handleClickAjoutCompetence}>
                  <IoMdAdd onClick={() => handleClickAjoutCompetence} />
                </Button>
              </Form.Group>
              {/*Ajouter un label,  Voir pour changer pour des boutons radio*/}
              <Form.Group>
                <h6>Type de stage</h6>
                <select id="typeStageAddId">
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
                <select id="remunereAddId">
                  <option value="OUI">OUI</option>
                  <option value="NON">NON</option>
                  <option value="À la discrétion de l'entreprise">
                    À la discrétion de l'entreprise
                  </option>
                </select>
              </Form.Group>
              <p className="mt-5">Pour l'administrateur</p>
              {/*ID de l'étudiant */}
              {/* Pour l'administrateur l'id est entré, pour l'étudiant la variable local ou le props */}
              <Form.Group controlId="etudiantAddId">
                <Form.Label>ID de l'étudiant</Form.Label>
                <Form.Control type="text" disabled />
              </Form.Group>
              {/*accessible par l'administrateur*/}
              <Form.Group controlId="vedetteAddId">
                <Form.Check
                  disabled
                  type="checkbox"
                  label="Demande en vedette"
                />
              </Form.Group>
            </Form>
            <Button
              id="enregistrerAdd"
              className="my-5"
              variant="primary"
              type="submit"
              onClick={handleAdd}
            >
              Ajouter
            </Button>
            <Link
              className="btn btn-primary"
              to={
                "/admin/" +
                ls.get("nom") +
                "?niveau=" +
                ls.get("niveau").toString()
              }
            >
              Annuler
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
FormAjoutDemande.defaultProps = { history: "/" };
export default FormAjoutDemande;
