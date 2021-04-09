import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import BoutonContactCandidat from "../components/boutons/BoutonContactCandidat";
import DemandeCarte from "../components/public/DemandeCarte";

configure({ adapter: new Adapter() });

//Tester si le composant DemandeCarte contient le bouton ContacterCandidat
describe("DemandeCarte", () => {
  it("Le composant DemandeCarte contient un bouton pour le  contact du candidat", () => {
    const wrapper = shallow(<DemandeCarte />);
    expect(wrapper.containsMatchingElement(<BoutonContactCandidat />)).toEqual(
      true
    );
  });
  it("Cas d'erreur: Le composant DemandeCarte ne contient pas un bouton pour le  contact du candidat", () => {
    const wrapper = shallow(<DemandeCarte />);
    expect(wrapper.containsMatchingElement(<BoutonContactCandidat />)).toEqual(
      false
    );
  });
});
