import axios from './axiosConf';

export const getReports = () => {
    return axios.get("/reports");
}

export const getDevice = (id) => {
    return axios.get(`/devices/${id}`);
}