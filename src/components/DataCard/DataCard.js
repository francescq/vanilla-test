import * as d3 from 'd3';

import './DataCard.css';
import template from './DataCard.template';

const playWithCircle = () => {
    var dt = new DashTimer('#timer').init().setData().start();
};

const DataContainer = (props) => {
    let dataContainer = document.createElement('div');
    
    dataContainer.insertAdjacentHTML("afterbegin", template(props));
    
    return dataContainer;
}

// const DataContainer = (props) => {
//     return template(props);
// }


export default DataContainer;