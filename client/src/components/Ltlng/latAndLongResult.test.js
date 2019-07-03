import LatAndLongResult from "./LatAndLongResult";
import { componentSetUp, findByTestAttr } from "../../util/testFunctions";

describe("Latitude And Longitude Component", () => {
  let component;

  describe("With Props", () => {
    const props = {
      city: "Atlanta",
      state: "GA"
    };
    beforeEach(() => {
      component = componentSetUp(LatAndLongResult, props);
    });

    it("Should render <p> tag with city & state", () => {
      const p = findByTestAttr(component, "city-state");
      expect(p.length).toBe(1);
    });
  });

  describe("Without Props", () => {
    beforeEach(() => {
      component = componentSetUp(LatAndLongResult);
    });

    it("Should Render Nothing", () => {
      const p = findByTestAttr(component, "city-state");
      expect(p.length).toBe(0);
    });
  });
});
