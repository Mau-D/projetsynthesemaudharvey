import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import Entete from "../components/public/EnTete";
configure({ adapter: new Adapter() });
describe("Entete", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Entete />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});
//Test unitaire pour le lien du logo conduit à la page d'accueil
describe("EnTete", () => {
  it("Vérifie que le logo amène à la page d'accueil", () => {
    const pageAccueil = shallow(<Entete />, {
      stubs: ["router-link", "router-view"],
    });
    const link = pageAccueil.find(".accueil");
    //cas succès, vérifie que le lien conduit à la page d'accueil
    expect(link.prop("to")).toBe("/");
  });
  it("Cas erreur: Vérifie que le logo n'amène pas à la page d'accueil", () => {
    const pageAccueil = shallow(<Entete />, {
      stubs: ["router-link", "router-view"],
    });
    const link = pageAccueil.find(".accueil");

    //cas erreur, vérifie que le lien ne conduit pas à la page d'accueil
    expect(link.prop("to")).not.toBe("/");
  });
});
