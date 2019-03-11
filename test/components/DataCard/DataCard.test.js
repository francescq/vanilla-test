import DataCard from "../../../src/components/DataCard/DataCard";
import { exportAllDeclaration } from "@babel/types";

describe("DataCard", () => {
  test("should add id", () => {
    const dataCard = new DataCard({ id: "foo" });

    const render = dataCard.render();

    expect(render.id).toBe("foo");
  });
  test("should add a theme class", () => {
    const dataCard = new DataCard({ type: "foo" });

    const render = dataCard.render();

    expect(render.innerHTML).toMatch("theme-foo");
  });

  describe("render a report", () => {
    test("should render the title", () => {
      const dataCard = new DataCard({ title: "foo" });

      const render = dataCard.render();

      expect(render.innerHTML).toMatch("FOO");
    });

    test("should render the value", () => {
      const dataCard = new DataCard({ value: "foo" });

      const render = dataCard.render();

      expect(render.innerHTML).toMatch("foo");
    });

    describe("tablet", () => {
      test("should render the percentage", () => {
        const dataCard = new DataCard({ tablet: { percentage: "foo" } });

        const render = dataCard.render();

        expect(render.innerHTML).toMatch("foo %");
      });

      test("should render the value", () => {
        const dataCard = new DataCard({ tablet: { value: "foo" } });

        const render = dataCard.render();

        expect(render.innerHTML).toMatch("foo");
      });
    });

    describe("phone", () => {
      test("should render the percentage", () => {
        const dataCard = new DataCard({ phone: { percentage: "foo" } });

        const render = dataCard.render();

        expect(render.innerHTML).toMatch("foo %");
      });

      test("should render the value", () => {
        const dataCard = new DataCard({ phone: { value: "foo" } });

        const render = dataCard.render();

        expect(render.innerHTML).toMatch("foo");
      });
    });
  });
});
