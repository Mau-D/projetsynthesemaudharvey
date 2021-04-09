import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import APropos from "../views/APropos";
import logoNoir from "../img/logoNoir.svg";
configure({ adapter: new Adapter() });

describe("À propos", () => {
  it("Vérifie que le src de l'image du logo est logoNoir dans le composant APropos", () => {
    const logo = shallow(<APropos />);

    expect(logo.find("img").prop("src")).toEqual(logoNoir);
  });
  it("Cas d'erreur: Vérifie que le src de l'image du logo n'est pas logoNoir dans le composant APropos", () => {
    const logo = shallow(<APropos />);

    expect(logo.find("img").prop("src")).not.toEqual(logoNoir);
  });
});
