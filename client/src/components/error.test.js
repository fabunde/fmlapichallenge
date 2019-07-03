import Error from "./Error";

import { componentSetUp } from "../util/testFunctions";

describe("Error Component", () => {
  let component;

  beforeEach(() => {
    component = componentSetUp(Error);
  });
  it("Should render a h2 heading", () => {
    const heading = component.find("h2");
    expect(heading.length).toBe(1);
  });
});
