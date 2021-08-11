import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// all css
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

// all bootstrap js + dependencies
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

