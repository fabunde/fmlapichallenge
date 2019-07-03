import React from "react";
import { shallow } from "enzyme";

//helper function to shallow render component
export const componentSetUp = (Component, props = {}) => {
  const component = shallow(<Component {...props} />);
  return component;
};
