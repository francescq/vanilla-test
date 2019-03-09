import mockAxios from 'axios';
import {getReports, getDevice, baseURL} from '../../src/api/jsonServerApi';
import "@babel/polyfill";

describe('Api', () =>{
    beforeEach(() => {
        mockAxios.get.mockResolvedValue({'foo':'bar'});
    });

    test('should initialise baseURL', () => {
        expect(mockAxios.create).toBeCalledWith({baseURL: 'http://localhost:3000'});
    });
    
    describe('getReports', () => {

        test('should have been called with and id and url', async () => {
            await getReports();
            
            expect(mockAxios.get).toBeCalledWith('/reports');
        });

        test('should answer with reports in db', async () => {
            const reports = await getReports();

            expect(reports).toEqual({'foo':'bar'});
        });

    });

    describe('getDevice', () => {
        test('should have been called with and id and url', async () => {
            await getDevice('foo');
            
            expect(mockAxios.get).toBeCalledWith('/devices/foo');
        });

        test('should answer with device report in db', async () => {
            const reports = await getDevice();

            expect({'foo': 'bar'}).toEqual(reports);
        });
    });
});