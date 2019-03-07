import mockAxios from 'axios';
import JsonServerApi from '../../src/api/JsonServerApi';
import "@babel/polyfill";

let api;

describe('Api', () =>{

    beforeEach(() => {
        mockAxios.get.mockResolvedValue({'foo':'bar'});
        api = new JsonServerApi(mockAxios);
    });
    
    describe('getReports', () => {

        test('should have been called with and id and url', async () => {
            await api.getReports();
            
            expect(mockAxios.get).toBeCalledWith('/reports');
        });

        test('should answer with reports in db', async () => {
            const reports = await api.getReports();

            expect(reports).toEqual({'foo':'bar'});
        });

    });

    describe('getDevice', () => {
        test('should have been called with and id and url', async () => {
            await api.getDevice('foo');
            
            expect(mockAxios.get).toBeCalledWith('/devices/foo');
        });

        test('should answer with device report in db', async () => {
            const reports = await api.getDevice();

            expect({'foo': 'bar'}).toEqual(reports);
        });
    });
});