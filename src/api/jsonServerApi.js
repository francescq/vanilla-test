
export default class ReportsApi {
    constructor(api) {
        this.api = api;
    }

    getReports() {
        return this.api.get("/reports");
    }
    
    getDevice(id) {
        return this.api.get(`/devices/${id}`);
    }
}

