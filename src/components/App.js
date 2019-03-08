import * as d3 from 'd3';
import './style.css';

import DataCard from './DataCard/DataCard';
import template from './App.template';

export default class App {
    constructor(reports) {
        this.reports = reports;
    }

    render() {
        let element = document.createElement('div');
        element.setAttribute('id','root');
        element.classList.add('hello');

        if(!this.reports || !this.reports.length) {
            element.innerHTML = 'Loading...';
        }else {            
            element.insertAdjacentHTML("afterbegin", template());

            this.reports.map((report) => {
                element.appendChild(DataCard(report));
            });
        }

        return element;
    }

    play() {
        var circle = d3.selectAll("circle");
        circle.style("fill", "steelblue");
    }
}