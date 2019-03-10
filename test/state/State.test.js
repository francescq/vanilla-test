import JsonServerApi from '../../src/api/JsonServerApi';
import State from '../../src/state/State';


jest.mock('../../src/api/JsonServerApi');

const myDb = {"reports": [
    { "id": 0, 
    "type": 
    "revenue", 
    "title": 
    "Revenue", 
    "value": 
    "200.000 €", 
    "tablet": 0, 
    "phone": 1, }
]};

let state;
let api;

beforeEach(() => {
    api = new JsonServerApi();
    state = new State(api);

    api.getReports.mockImplementation(() => {
        return {data: myDb.reports};
    });

    api.getDevice.mockImplementation((i) => {
        return {data: `device${i}`};
    });

});

describe('state', () => {

    describe('load data', () => {
        test('should load reports', async () => {
            await state.load();

            expect(api.getReports).toBeCalledTimes(1);
        });
        test('should load the db', async () => {
            const expectation = [{ "id": 0, "type": "revenue", "title": "Revenue", "value": "200.000 €", "tablet": "devicedevice0", "phone": "devicedevice1", }];

            const answer = await state.load();

            expect(answer).toEqual(expectation);
            
        });
    });
});