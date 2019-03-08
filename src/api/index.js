import myAxios from './myAxios';

export const getReports = () => {
    console.log(`getting reports info`);
    return myAxios.get("/reports");
}

export const getDevice = (id) => {
    console.log(`getting device info for ${id}`);
    return myAxios.get(`/devices/${id}`);
}