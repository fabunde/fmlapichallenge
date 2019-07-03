import Login from "./Login";

import { componentSetUp, findByTestAttr } from "../util/testFunctions";

describe("Login Component", () => {
  let component;

  beforeEach(() => {
    component = componentSetUp(Login);
  });

  it("Render form with no errors", () => {
    const form = findByTestAttr(component, "login-form");
    expect(form.length).toBe(1);
  });

  it("Form should render 2 input fields", () => {
    const inputs = findByTestAttr(component, "input");
    expect(inputs.length).toBe(2);
  });

  it("Form should render a submit button", () => {
    const button = findByTestAttr(component, "button");
    expect(button.length).toBe(1);
  });
});
