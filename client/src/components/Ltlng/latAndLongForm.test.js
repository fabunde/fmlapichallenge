import LatAndLongForm from "./LatAndLongForm";
import { componentSetUp, findByTestAttr } from "../../util/testFunctions";

describe("LatAndLongForm", () => {
  let component;
  beforeEach(() => {
    component = componentSetUp(LatAndLongForm);
  });

  it("Render form with no erros", () => {
    const form = findByTestAttr(component, "ltlg-form");
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
