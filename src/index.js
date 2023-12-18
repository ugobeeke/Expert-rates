// index.js
import React from 'react';
import {createRoot} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import * as serviceWorker from './ServiceWorker';

const root = createRoot(document.getElementById('root'));
root.render(<App />), 


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
