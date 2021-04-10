import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import { Form } from "react-bootstrap";

import FormulaireInscription from "../components/public/FormulaireInscription";
configure({ adapter: new Adapter() });
//Test unitaire pour le composant ContactFormulaire
describe("FormulaireInscription", () => {
  //Cas succès, vérifie que lors du submit le tableau d'erreurs n'est pas vide
  it("vérifie que lors du submit du formulaire, le tableau d'erreur n'est pas vide", async () => {
    const pageInscription = shallow(<FormulaireInscription />);

    await pageInscription.find(".formInscription").simulate("submit.prevent");

    expect(pageInscription.find("errors").exists()).not.toEqual({});
  });
  //cas erreur,vérifie que lors du submit le tableau d'erreurs est vide
  it("Vérifie que le tableau d'erreurs n'est pas vide lors du submit", async () => {
    const pageInscription = shallow(<FormulaireInscription />);

    await pageInscription.find(".formInscription").simulate("submit.prevent");

    expect(pageInscription.find("errors").exists()).toEqual([]);
  });
});
