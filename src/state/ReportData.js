import DeviceData from './DeviceData';

export default {
    create(
        data = {
            id: '',
            type: '',
            title: '',
            value: '',
            tablet: DeviceData.create(),
            phone: DeviceData.create()
        }
    ) {
        return Object.create({
            getData() {
                return data;
            }
        });
    }
}