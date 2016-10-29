import React from 'react';
import ReactDOM from 'react-dom';
import { Landing } from '/src/js/landing';
var css = require('./src/css/main.css');

if (document.getElementById('reactMount')) {
  ReactDOM.render(<Landing />, document.getElementById('reactMount'));
}
