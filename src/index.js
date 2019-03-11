import App from "./components/App";
import axios from "./api/axiosConf";
import JsonServerApi from "./api/JsonServerApi";
import State from "./state/State";

console.log(process.env.NODE_ENV);

const start = async () => {
  let app = new App();
  document.body.appendChild(app.render());

  const api = new JsonServerApi(axios);
  const state = new State(api);
  const reports = await state.load();

  document.body.removeChild(document.getElementById(app.id));

  app = new App(reports);
  document.body.appendChild(app.render());

  window.dispatchEvent(new Event("afterRender"));
};

export default start;
start();
