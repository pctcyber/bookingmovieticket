import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// settup redux
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import {rootReducer} from "./redux/reducer/rootReducer.jsx"
import "./index.scss"
// settup redux-thunk
import redux_thunk from 'redux-thunk'

const store = createStore(rootReducer,applyMiddleware(redux_thunk))


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
