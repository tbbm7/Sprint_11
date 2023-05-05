﻿import React from 'react';
import ReactDOM from 'react-dom/client';
//import '../components/index.css';
import App from './components/App/App.js';
import { Provider } from 'react-redux';
import store from '../src/services/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
