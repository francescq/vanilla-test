import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const myAxios = axios.create({
    baseURL: BASE_URL
});

export const getReports = () => {
    console.log(`getting reports info`);
    return myAxios.get("/reports");
}

export const getDevice = (id) => {
    console.log(`getting device info for ${id}`);
    return myAxios.get(`/devices/${id}`);
}