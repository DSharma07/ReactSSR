import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import  { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';   // handle async operations
import { Provider } from 'react-redux'; // connect store to client
import Routes from './Routes';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDom.hydrate(
    <Provider store={ store }>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root')
);