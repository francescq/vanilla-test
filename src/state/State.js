import {getReports, getDevice} from '../api/JsonServerApi';
import '@babel/polyfill';

export default class State{ 

    constructor(api) {
        this.api = api;
    }
    
    async load() {
        const resp = await this.api.getReports();

        const reports = resp.data;

        for (let report of reports) {
            
            const phoneResp = await this.api.getDevice(report.phone);
            const tabletResp = await this.api.getDevice(report.tablet);
            report.phone = phoneResp.data;
            report.tablet = tabletResp.data;
        }
        
        return reports;   
    }
};
