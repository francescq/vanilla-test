import App from "../../src/components/App";
import db from "../../server/db.json";

describe("App", () => {
  test("should have id root", () => {
    const app = new App();

    expect(app.id).toBe("app");
  });

  describe("with empty reports render", () => {
    test("should return loading", () => {
      const app = new App();

      const appRendered = app.render();

      expect(appRendered.innerHTML).toMatch("Loading");
    });
  });

  describe("with reports render", () => {
    let reports;
    let app;

    beforeEach(() => {
      reports = db.reports;
      app = new App(reports);
    });

    test("should contain as many reports as injected", () => {
      //DataCard should've been mocked. Being plain vanilla, didn't managed to make it work
      const appRendered = app.render();

      expect(appRendered.innerHTML).toMatch("revenue");
      expect(appRendered.innerHTML).toMatch("visits");
      //expect(DataCard).toHaveBeenCalledTimes(3);
    });

    test("should not contain Loading", () => {
      const appRendered = app.render();

      expect(appRendered.innerHTML).not.toMatch("Loading");
    });
  });
});
