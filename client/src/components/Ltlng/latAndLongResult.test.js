import LatAndLongResult from "./LatAndLongResult";
import { componentSetUp } from "../../util/testFunctions";

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

    it("Should render LatAndLong component", () => {
      const div = component.find(".ltlgresult");
      expect(div.length).toBe(1);
    });

    it("Should render <p> tag with city & state", () => {
      const p = component.find("p");
      expect(p.length).toBe(1);
    });
  });

  describe("Without Props", () => {
    beforeEach(() => {
      component = componentSetUp(LatAndLongResult);
    });

    it("Should Render Nothing", () => {
      const div = component.find(".ltlgresult");
      expect(div.length).toBe(0);
    });
  });
});
