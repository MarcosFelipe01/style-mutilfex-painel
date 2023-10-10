import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';

import { applyMiddleware,createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import promise from 'redux-promise'

import Routes from './main/Routes'
import Reducers from './main/Reducers'
import AuthOrApp from './main/AuthOrApp';

const store = applyMiddleware(promise, thunk, multi)(createStore)(Reducers)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <AuthOrApp />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
