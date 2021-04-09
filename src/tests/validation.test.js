import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import Validation from "../components/admin/Validation";

configure({ adapter: new Adapter() });
//Test unitaire pour le composant validation
describe("Validation", () => {
  //cas succès
  it("Vérifie que le titre contient En attente de validation", () => {
    const validationComponent = shallow(<Validation />);
    const texteTitre = "En attente de validation";
    //cas succès, vérifie que le titre de la page d'accueil contient la chaîne de caractères `texteTitre`
    expect(validationComponent.find(".titre").text()).toEqual(
      expect.stringContaining(texteTitre)
    );
  });
  //cas erreur
  it("Cas erreur: Vérifie que le titre ne contient pas En attente de validation", () => {
    const validationComponent = shallow(<Validation />);

    const texteTitre = "En attente de validation";
    //cas erreur, vérifie que le titre de la page d'accueil ne contient pas la chaîne de caractères `texteTitre`
    expect(validationComponent.find(".titre").text()).toEqual(
      expect.not.stringContaining(texteTitre)
    );
  });
});
