import './DataCard.css';
import template from './DataCard.template';
console.log('DataCard has been loaded');

const DataContainer = (props) => {
    let dataContainer = document.createElement('div');
    
    dataContainer.innerHTML = ['Data', 'Card', props.val].join();
    dataContainer.classList.add('card-container');

    dataContainer.insertAdjacentHTML("afterbegin", template(props));

    return dataContainer;
}

export default DataContainer;