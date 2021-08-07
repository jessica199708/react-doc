import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './App';  //import class component
import { Blog } from './App'  //export function component
// import reportWebVitals from './reportWebVitals';


// index.js file is used for routing or calling our component which gets rendered

////////1. render class component

// ReactDOM.render(   
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );  
  

////////2. render function class

// const user = {    
//   firstName: 'jasmine',
//   lastName: 'jia'
// };

// ReactDOM.render(myelement(user), document.getElementById('root'));

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// const posts = [
//   { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
//   { id: 2, title: 'Installation', content: 'You can install React from npm.' }
// ];
ReactDOM.render(
  <Login />,
  document.getElementById('root')
);