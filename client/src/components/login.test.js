import Login from "./Login";

import { componentSetUp } from "../util/testFunctions";

describe("Login Component", () => {
  let component;

  beforeEach(() => {
    component = componentSetUp(Login);
  });

  it("Renders form", () => {
    const form = component.find("Form");
    expect(form.length).toBe(1);
  });

  it("Should render username & password fields", () => {
    const username = component.find("[name='username']");
    const password = component.find("[name='password']");

    expect(username.length).toBe(1);
    expect(password.length).toBe(1);
  });

  it("Should render a submit button", () => {
    const button = component.find("[type='submit']");
    expect(button.length).toBe(1);
  });
});
