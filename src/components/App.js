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
            element.innerHTML = 'Loading...';
        }else {                  
            let childElement = element.querySelector('[child]');
            this.reports.map((report) => {
                childElement.appendChild(DataCard(report));
            });
        }

        return element;
    }

    play() {
        var circle = d3.selectAll("circle");
        circle.style("fill", "steelblue");
    }
}