import * as d3 from 'd3';
import './style.css';

import DataCard from './DataCard/DataCard';

export default class App {
    constructor() {

    }

    render() {
        let element = document.createElement('div');
        element.setAttribute('id','root');
        let btn = document.createElement('button');
        
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        element.classList.add('hello');

        btn.innerHTML = 'Click me now and check console';
        // btn.onclick = printMe;

        // Note that because a network request is involved, some indication
        // of loading would need to be shown in a production-level site/app.
        btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
            var print = module.default;
        
            print();
        });
        
        const card1 = new DataCard({val:1});
        const card2 = new DataCard({val:2});

        element.appendChild(card1.render());
        element.appendChild(card2.render());
        
        element.appendChild(btn);

        return element;
    }

    play() {
        var circle = d3.selectAll("circle");
        circle.style("fill", "steelblue");
    }
}

if (module.hot) {
    module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = component(); // Re-render the "component" to update the click handler
        document.body.appendChild(element);
    })
}