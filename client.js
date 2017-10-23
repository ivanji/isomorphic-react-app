import 'babel-core/register';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

function run() {
    ReactDOM.hydrate(<App />, document.getElementById('root'));
}

const loadStates = ['complete', 'loaded', 'interactive'];

if (loadStates.includes(document.readyState && document.body)) {
        run();
    }
    else {
        window.addEventListener('DOMContentLoaded', run, false);
}
