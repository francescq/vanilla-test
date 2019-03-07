import * as d3 from 'd3';

import './DataCard.css';
import template from './DataCard.template';

class DataContainer {

    constructor(props) {
        this.props = props;
    }

    render() {
        let dataContainer = document.createElement('div');
    
        dataContainer.innerHTML = ['Data', 'Card', this.props.val].join();
        dataContainer.classList.add('card-container');
    
        dataContainer.insertAdjacentHTML("afterbegin", template(this.props));

        return dataContainer;
    }

    playWithCircle() {
        var dt = new DashTimer('#timer').init().setData().start();
    }

}

export default DataContainer;