import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import EnTete from "../components/public/EnTete";
import Accueil from "../views/Accueil";

configure({ adapter: new Adapter() });

//Tester si le composant DemandeCarte contient le bouton ContacterCandidat
describe("Accueil", () => {
  it("Vérifie si le composant en-tete est dans la page d'accueil", () => {
    const wrapper = shallow(<Accueil />);
    expect(wrapper.containsMatchingElement(<EnTete />)).toEqual(true);
  });
  it("Cas d'erreur: Le composant en-tete n'est pas dans la page d'accueil", () => {
    const wrapper = shallow(<Accueil />);
    expect(wrapper.containsMatchingElement(<EnTete />)).toEqual(false);
  });
});
