import LatAndLongForm from "./LatAndLongForm";
import { componentSetUp } from "../../util/testFunctions";

describe("LatAndLongForm", () => {
  let component;
  beforeEach(() => {
    component = componentSetUp(LatAndLongForm);
  });

  it("Should render a form", () => {
    const form = component.find("Form");
    expect(form.length).toBe(1);
  });

  it("Should render lat & long input fields", () => {
    const lat = component.find("[name='lat']");
    const long = component.find("[name='long']");

    expect(lat.length).toBe(1);
    expect(long.length).toBe(1);
  });

  it("Should render a submit button", () => {
    const button = component.find("[type='submit']");
    expect(button.length).toBe(1);
  });
});
