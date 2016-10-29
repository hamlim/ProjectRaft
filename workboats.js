import React from 'react';
import ReactDOM from 'react-dom';
import { Page } from './src/js/workboats';
var maincss = require('./src/css/main.css');
var workboatscss = require('./src/css/workboats.css');

if (document.getElementById('reactMount')) {
  ReactDOM.render(<Page redactedCompany={"company_name_here"} />, document.getElementById('reactMount'));
}
