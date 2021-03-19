/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");
//Pour les demandes de stage
const { demandesstage } = mockData; /*ajouter le nom de la db*/
const data = JSON.stringify({
  demandesstage,
}); /*ajouter le nom de la db*/

const filepathdemandes = path.join(__dirname, "db.json");

fs.writeFile(filepathdemandes, data, function (err) {
  err ? console.log(err) : console.log("Mock DB créé.");
});
