
import './DataCard.scss';
import template from './DataCard.template';

const DataContainer = (props) => {
    const id=props.id;

    let dataContainer = document.createElement('div');
    dataContainer.setAttribute("id",id);
    
    dataContainer.insertAdjacentHTML("afterbegin", template(props));
    
    return dataContainer;
}

export default DataContainer;