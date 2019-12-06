import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js'
import App from './components/App';
import './sass/abstracts/base.scss';

ReactDOM.render(
  <Provider store={store}><App /></Provider>, 
  document.getElementById('root')
);