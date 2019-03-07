import './App.css';

import DataCard from './DataCard/DataCard';
import template from './App.template';

export default class App {

    constructor(reports) {
        this.reports = reports;
        this.id='app';
    }

    render() {
        let element = document.createElement('div');
        element.setAttribute('id',this.id);
        element.insertAdjacentHTML("afterbegin", template());

        if(!this.reports || !this.reports.length) {
            element.innerHTML = '<div>Loading...</div>';
        } else {                  
            let childElement = element.querySelector('[child]');
            this.reports.map((report) => {
                const dataCard = DataCard(report)
                childElement.appendChild(dataCard);
            });
        }

        return element;
    }
}