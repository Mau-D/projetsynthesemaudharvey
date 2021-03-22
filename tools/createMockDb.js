/* eslint-disable no-console */
const fsdemande = require("fs");
const pathdemande = require("path");
const mockDatademande = require("./mockData");
//Pour les demandes de stage
const { demandesstage } = mockDatademande; /*ajouter le nom de la db*/
const datademande = JSON.stringify({
  demandesstage,
}); /*ajouter le nom de la db*/

const filepathdemandes = pathdemande.join(__dirname, "dbDemandes.json");

fsdemande.writeFile(filepathdemandes, datademande, function (err) {
  err ? console.log(err) : console.log("Mock DB demandes créé.");
});
/* eslint-disable no-console */
const fsoffre = require("fs");
const pathoffre = require("path");
const mockDataoffre = require("./mockData");
//Pour les demandes de stage
const { offresstage } = mockDataoffre; /*ajouter le nom de la db*/
const dataoffre = JSON.stringify({
  offresstage,
}); /*ajouter le nom de la db*/

const filepathoffres = pathoffre.join(__dirname, "dbOffres.json");

fsoffre.writeFile(filepathoffres, dataoffre, function (err) {
  err ? console.log(err) : console.log("Mock DB offres créé.");
});
