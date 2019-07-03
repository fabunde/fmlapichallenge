import Error from "./Error";

import { componentSetUp, findByTestAttr } from "../util/testFunctions";

describe("Error Component", () => {
  let component;

  beforeEach(() => {
    component = componentSetUp(Error);
  });
  it("Should render a heading", () => {
    const heading = findByTestAttr(component, "errHeading");
    expect(heading.length).toBe(1);
  });
});
