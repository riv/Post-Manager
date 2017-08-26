import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store';
import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={ store } />, document.getElementById('root'));
  registerServiceWorker();
});
