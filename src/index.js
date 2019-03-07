import _ from 'lodash';
import App from './components/App';
import {getReports} from './api';

console.log(process.env.NODE_ENV);

getReports().then((resp) => {
    console.log(resp);
})
  
const app = new App();
document.body.appendChild(app.render());
app.play();


