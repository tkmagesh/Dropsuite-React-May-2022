import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* 
import * as calc from './calculator';
console.log(calc);
*/

/* 
import * as calc from './calculator';
console.log(calc.add(100,200)) 
*/

/* 
import * as calc from './calculator';
const add = calc.add
console.log(add(1000,200)) 
*/

/* 
import * as calc from './calculator';
const { add } = calc
console.log(add(1000,2000)) 
*/

/* 
import { add } from './calculator';
console.log(add(10000,2000)) 
*/

//importing the 'default' exported entity
import calcUtils from './calculator'
console.log(calcUtils)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
