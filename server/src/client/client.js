import React from 'react';
import ReactDom from 'react-dom';
import Home from './components/Home'; // ES6

ReactDom.hydrate(<Home />, document.querySelector('#root'));