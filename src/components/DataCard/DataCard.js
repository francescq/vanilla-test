
import './DataCard.scss';
import template from './DataCard.template';

const playWithCircle = () => {
    var dt = new DashTimer('#timer').init().setData().start();
};

const DataContainer = (props) => {
    const id=props.id;

    let dataContainer = document.createElement('div');
    dataContainer.setAttribute("id",id);
    dataContainer.setAttribute("type",props.type);
    
    dataContainer.insertAdjacentHTML("afterbegin", template(props));
    
    return dataContainer;
}

export default DataContainer;