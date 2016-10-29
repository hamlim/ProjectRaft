import React from 'react';
import ReactDOM from 'react-dom';
import { Page } from './src/js/contact';
var maincss = require('./src/css/main.css');
var contactcss = require('./src/css/contact.css');

if (document.getElementById('reactMount')) {
  ReactDOM.render(<Page redactedCompany={"company_name_here"} />, document.getElementById('reactMount'));
}
