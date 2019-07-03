import React from "react";
import { shallow } from "enzyme";

//helper function to shallow render component
export const componentSetUp = (Component, props = {}) => {
  const component = shallow(<Component {...props} />);
  return component;
};

// function to get element by data-test${attr}
export const findByTestAttr = (component, attr) => {
  const element = component.find(`[data-test="${attr}"]`);
  return element;
};
