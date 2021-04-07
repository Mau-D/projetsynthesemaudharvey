import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import PiedDePage from "../components/public/PiedDePage";
configure({ adapter: new Adapter() });

//Test unitaire pour le lien du logo conduit à la page d'accueil
describe("PiedDePage", () => {
  it("Vérifie que le lien À propos amène au composant APropos à la route /apropos", () => {
    const pageFooter = shallow(<PiedDePage />, {
      stubs: ["router-link", "router-view"],
    });
    const link = pageFooter.find(".apropos");
    //cas succès, vérifie que le lien conduit à la page d'accueil
    expect(link.prop("to")).toBe("/apropos");
  });
  it("Cas erreur: Vérifie que le lien À propos n'amène pas au composant APropos à la route /apropos", () => {
    const pageFooter = shallow(<PiedDePage />, {
      stubs: ["router-link", "router-view"],
    });
    const link = pageFooter.find(".apropos");

    //cas erreur, vérifie que le lien ne conduit pas à la page d'accueil
    expect(link.prop("to")).not.toBe("/apropos");
  });
});
