
export default {
    create(
        data = {
            id: '',
            type: '',
            percentage: '',
            value: ''
        }
    ) {
        return Object.create({
            getData() {
                return data;
            }
        });
    }
}