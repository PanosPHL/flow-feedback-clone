import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/storeSetup';

if (process.env.NODE_ENV !== 'production') {
  const getCSRFToken = () => {
    return fetch("/api/csrf/token");
  };

  getCSRFToken();

  window.store = store;
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
