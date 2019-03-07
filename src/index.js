import _ from 'lodash';
import './style.css';
import DataCard from './components/DataCard/DataCard';

console.log(process.env.NODE_ENV);

function check() {
    "use strict";

    try { eval("var foo = (x)=>x+1"); }
    catch (e) { return false; }
    return true;
}


function root() {
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
    
    element.appendChild(DataCard({val:1}));
    element.appendChild(DataCard({val:3}));
    element.appendChild(DataCard({val:2}));
    element.appendChild(btn);
  
    return element;
  }
  
document.body.appendChild(root());

if (module.hot) {
    module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = component(); // Re-render the "component" to update the click handler
        document.body.appendChild(element);
    })
}
