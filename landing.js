import React from 'react';
import ReactDOM from 'react-dom';
import { Page } from './src/js/landing';
var maincss = require('./src/css/main.css');
var landingcss = require('./src/css/landing.css');

if (document.getElementById('reactMount')) {
  ReactDOM.render(<Page redactedCompany={"company_name_here"} />, document.getElementById('reactMount'));
}
