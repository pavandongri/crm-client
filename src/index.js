import React from 'react';
import './index.css';
import App from './App';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/store.js';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);