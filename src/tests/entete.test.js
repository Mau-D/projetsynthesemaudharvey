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
