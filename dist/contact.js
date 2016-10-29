webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _contact = __webpack_require__(172);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var maincss = __webpack_require__(174);
	var contactcss = __webpack_require__(178);
	
	if (document.getElementById('reactMount')) {
	  _reactDom2.default.render(_react2.default.createElement(_contact.Page, { redactedCompany: "company_name_here" }), document.getElementById('reactMount'));
	}

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Page = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _baseComponents = __webpack_require__(173);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var About = function About(props) {
	  return _react2.default.createElement(
	    'p',
	    null,
	    'Hello World!'
	  );
	};
	
	var Page = exports.Page = function Page(props) {
	  return _react2.default.createElement(
	    'section',
	    { className: 'landing' },
	    _react2.default.createElement(_baseComponents.Header, { contact: true }),
	    _react2.default.createElement(
	      _baseComponents.Lead,
	      null,
	      _react2.default.createElement(
	        'h3',
	        { className: 'lead_title' },
	        'Contact ',
	        _react2.default.createElement(
	          'del',
	          null,
	          props.redactedCompany
	        )
	      )
	    ),
	    _react2.default.createElement(About, null),
	    _react2.default.createElement(_baseComponents.Footer, { redactedCompany: props.redactedCompany })
	  );
	};

/***/ },

/***/ 178:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=contact.js.map