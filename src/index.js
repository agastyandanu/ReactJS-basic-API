import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import HelloComponent from '../src/component/HelloComponent';
// import StatefullComponent from '../src/container/StatefullComponent';
import Home from '../src/container/Home/Home';
// import Product from '../src/container/Product/Product';

ReactDOM.render(
  <React.StrictMode>
    {/* <StatefullComponent /> */}
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
