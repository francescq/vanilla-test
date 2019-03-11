import "./App.css";

import DataCard from "./DataCard/DataCard";
import template from "./App.template";

export default class App {
  constructor(reports) {
    this.reports = reports;
    this.id = "app";

    this.element = document.createElement("div");
    this.element.setAttribute("id", this.id);
  }

  render() {
    this.element.insertAdjacentHTML("afterbegin", template());

    if (!this.reports || !this.reports.length) {
      this.element.innerHTML = "<div>Loading...</div>";
    } else {
      let childElement = this.element.querySelector("[child]");
      this.reports.map(report => {
        const dataCard = new DataCard(report);
        childElement.appendChild(dataCard.render());
      });
    }

    return this.element;
  }
}
