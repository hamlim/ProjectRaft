import React from 'react';
import ReactDOM from 'react-dom';
import { Page } from './src/js/yachts';
var maincss = require('./src/css/main.css');
var yachtscss = require('./src/css/yachts.css');

if (document.getElementById('reactMount')) {
  ReactDOM.render(<Page redactedCompany={"company_name_here"} />, document.getElementById('reactMount'));
}
