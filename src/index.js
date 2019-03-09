import _ from 'lodash';
import App from './components/App';
import {getReports, getDevice} from './api/jsonServerApi';

console.log(process.env.NODE_ENV);

const load = async () => {
    const resp = await getReports();

    const reports = resp.data;

    for (let report of reports) {
        const phoneResp = await getDevice(report.phone);
        const tabletResp = await getDevice(report.tablet);
        report.phone = phoneResp.data;
        report.tablet = tabletResp.data;
    }
    
    return reports;
};

const start = async () => {
    let app = new App();
    document.body.appendChild(app.render());

    const reports = await load();
    document.body.removeChild(document.getElementById(app.id));

    app = new App(reports);
    document.body.appendChild(app.render());
    
    app.play();
}
start();



