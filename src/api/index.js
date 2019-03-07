import myAxios from './myAxios';

export const getReports = () => {
    return myAxios.get("/reports");
}