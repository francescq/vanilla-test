import "./DataCard.scss";
import s from "./DataCard.scss";
import template from "./DataCard.template";
import DashTimer from "../dashtimer/DashTimer";

class DataContainer {
  constructor(props) {
    this.props = props;
    this.dataContainer = document.createElement("div");
    this.dataContainer.setAttribute("id", props.id);
    this.dataContainer.setAttribute("card-container", "");

    // Listen for the event.
    window.addEventListener("afterRender", () => {
      this.play();
    });
  }

  render() {
    this.dataContainer.insertAdjacentHTML("afterbegin", template(this.props));

    return this.dataContainer;
  }

  getStyle(selector) {
    const elem = this.dataContainer.querySelector(selector);
    return getComputedStyle(elem);
  }

  play() {
    const phoneColor = this.getStyle(".phone .title").color;
    const tabletColor = this.getStyle(".tablet .title").color;
    const fillPerc = this.props.phone.percentage / 100;

    var dt = new DashTimer(`[timer="${this.props.id}"]`)
      .init({
        start: {
          innerRatio: 0.9,
          outerRatio: 1
        },
        finish: {
          innerRatio: 0.9,
          outerRatio: 1
        }
      })
      .setData([
        {
          immediate: { angle: true },
          start: { angle: 1, fill: tabletColor },
          finish: { angle: 0, fill: tabletColor }
        },
        {
          start: { angle: fillPerc, fill: phoneColor },
          finish: { angle: 0, fill: phoneColor }
        }
      ])
      .start(2000);
  }
}

export default DataContainer;
