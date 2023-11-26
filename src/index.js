import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './robo/Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons'; //css library similar to bootstrap
import {robots} from './robo/robots';

const robot = robots[0];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card id = {robot.id} name = {robot.name} email = {robot.email}/> {/* This is props similar to passsing parameters to classes. We can
                                                      use this props in Hello.js file*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your Hello, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
