import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import './index.css';

// import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  // 整个路由器用一个路由
  <BrowserRouter>  
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);