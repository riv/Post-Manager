import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store';
import './index.css';

let FBsdkLoaded = false;
let DOMContentLoaded = false;

const setupReact = () => {
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={ store } />, document.getElementById('root'));
  registerServiceWorker();
}

document.addEventListener('DOMContentLoaded', () => {
  DOMContentLoaded = true;
  if (FBsdkLoaded && DOMContentLoaded) {
    setupReact();
  }
});

document.addEventListener('fb_init', () => {
  FBsdkLoaded = true;
  if (FBsdkLoaded && DOMContentLoaded) {
    setupReact();
  }
});
