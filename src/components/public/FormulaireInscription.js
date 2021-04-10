import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

// Hook pour le bouton Trouvez votre stage
function FormulaireInscription() {
  //Variable pour la validation du formulaire
  const [errors, setErrors] = useState({});
  //Variable pour la valeur du statut de l'utilisateur false=entreprise et true=étudiant
  const [statut, setStatut] = useState(null);
  const [validEmail, setValidEmail] = useState(null);

  //Fonction pour vérifier si le formulaire est valide
  function formulaireEstValide(
    nom,
    prenom,
    email,
    password,
    confirmationPassword,
    niveau,
    institution,
    adresse,
    ville,
    region,
    telephone
  ) {
    const _errors = {};

    if (!nom) _errors.nom = "Le nom est obligatoire";
    if (!prenom) _errors.prenom = "Le prenom est obligatoire";
    if (!email) _errors.email = "L'adresse courriel est obligatoire";
    if (!validEmail) {
      _errors.checkEmail =
        "Le format du courriel n'est pas valide. Utiliser le format (abc@abc.com)";
    }
    if (!password) _errors.password = "Le mot de passe est obligatoire";
    if (!confirmationPassword)
      _errors.confirmationPassword =
        "La confirmation du mot de passe est obligatoire";
    if (password != confirmationPassword)
      _errors.samePassword =
        "La confirmation du mot de passe est différent du mot de passe";
    if (niveau == null)
      _errors.niveau = "Choisir votre statut: entreprise ou étudiant";
    if (!institution)
      _errors.institution =
        "Le nom de L'école ou de l'entreprise est obligatoire";
    if (!adresse) _errors.adresse = "L'adresse est obligatoire";
    if (!ville) _errors.ville = "La ville est obligatoire";
    if (!region) _errors.region = "La région est obligatoire";
    if (!telephone)
      _errors.telephone = "Le numéro de téléphone est obligatoire";

    setErrors(_errors);
    console.log(errors.checkEmail);
    //Retourne true si la longueur de l'objet contenat les erreurs = 0
    return Object.keys(_errors).length === 0;
  }
  //Fonction pour vérifier le format du courriel retourne true si le format est correct
  function checkEmail(email) {
    const re = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
    const reValid = re.test(email);
    setValidEmail(reValid);
  }
  //Fonction qui récupère les valeurs entrées dans les input
  function handleAdd(event) {
    event.preventDefault();

    const nom = document.getElementById("nomId").value;
    const prenom = document.getElementById("prenomId").value;
    const email = document.getElementById("emailId").value;
    checkEmail(email);
    const password = document.getElementById("passwordId").value;
    const confirmationPassword = document.getElementById(
      "confirmationPasswordId"
    ).value;
    const niveau = statut;
    const institution = document.getElementById("institutionId").value;
    const adresse = document.getElementById("adresseId").value;
    const ville = document.getElementById("villeId").value;
    const region = document.getElementById("regionId").value;
    const telephone = document.getElementById("telephoneId").value;
    const web = document.getElementById("webId").value;

    //Si la validation du formulaire retourne true nous pouvons ajouter le nouvel utilisateur dans la base de données
    if (
      formulaireEstValide(
        nom,
        prenom,
        email,
        password,
        confirmationPassword,
        niveau,
        institution,
        adresse,
        ville,
        region,
        telephone,
        web
      )
    ) {
      addUtilisateur();
    }
  }
  //Fonction pour l'ajout d'un nouvel utilisateur après validation des champs du formulaire
  function addUtilisateur() {
    console.log("ajout réussi");
  }
  return (
    <Form onSubmit={handleAdd} className="formInscription">
      {/*Utiliser isInvalid props pour afficher les erreurs*/}
      <Form.Group controlId="nomId">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="text" placeholder="Nom" isInvalid={!!errors.nom} />
        <Form.Control.Feedback type="invalid">
          {errors.nom}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="prenomId">
        <Form.Label>Prénom</Form.Label>
        <Form.Control
          type="text"
          placeholder="Prénom"
          isInvalid={!!errors.prenom}
        />
        <Form.Control.Feedback type="invalid">
          {errors.prenom}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="emailId">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          isInvalid={!!errors.email || !!errors.checkEmail}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          {errors.checkEmail}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="passwordId">
        <Form.Label>Mot de Passe</Form.Label>
        <Form.Control
          type="password"
          placeholder="Mot de Passe"
          isInvalid={!!errors.password}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="confirmationPasswordId">
        <Form.Label>Confirmer votre mot de Passe</Form.Label>
        <Form.Control
          type="password"
          placeholder="Mot de Passe"
          isInvalid={!!errors.confirmationPassword || !!errors.samePassword}
        />
        <Form.Control.Feedback type="invalid">
          {errors.confirmationPassword}
        </Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          {errors.samePassword}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="statutId">
        <Form.Check
          type="radio"
          name="niveau"
          value={false}
          label="Étudiant"
          onClick={() => setStatut(false)}
        />
        <Form.Check
          type="radio"
          name="niveau"
          value={true}
          label="Entreprise"
          onClick={() => setStatut(true)}
        />
      </Form.Group>
      {statut == null ? (
        <Form.Text className="text-danger">{errors.niveau}</Form.Text>
      ) : null}

      <Form.Group controlId="institutionId">
        <Form.Label>Nom de l'école ou de l'entreprise</Form.Label>
        <Form.Control type="text" isInvalid={!!errors.institution} />
        <Form.Control.Feedback type="invalid">
          {errors.institution}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="adresseId">
        <Form.Label>Adresse</Form.Label>
        <Form.Control type="text" isInvalid={!!errors.adresse} />
        <Form.Control.Feedback type="invalid">
          {errors.institution}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="villeId">
        <Form.Label>Ville</Form.Label>
        <Form.Control type="text" isInvalid={!!errors.ville} />
        <Form.Control.Feedback type="invalid">
          {errors.ville}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="regionId">
        <Form.Label>Région</Form.Label>
        <Form.Control type="text" isInvalid={!!errors.region} />
        <Form.Control.Feedback type="invalid">
          {errors.region}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="telephoneId">
        <Form.Label>Téléphone</Form.Label>
        <Form.Control type="text" isInvalid={!!errors.telephone} />
        <Form.Control.Feedback type="invalid">
          {errors.telephone}
        </Form.Control.Feedback>
      </Form.Group>
      {/*Le site web n'est pas obligatoire */}
      <Form.Group controlId="webId">
        <Form.Label>Site web</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Button type="submit">Soumettre</Button>
    </Form>
  );
}

export default FormulaireInscription;
