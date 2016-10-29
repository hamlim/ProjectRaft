webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _landing = __webpack_require__(180);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var maincss = __webpack_require__(174);
	var landingcss = __webpack_require__(181);
	
	if (document.getElementById('reactMount')) {
	  _reactDom2.default.render(_react2.default.createElement(_landing.Page, { redactedCompany: "company_name_here" }), document.getElementById('reactMount'));
	}

/***/ },

/***/ 180:
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
	  return _react2.default.createElement('section', { className: 'about' });
	};
	
	var Page = exports.Page = function Page(props) {
	  return _react2.default.createElement(
	    'section',
	    { className: 'landing' },
	    _react2.default.createElement(_baseComponents.Header, null),
	    _react2.default.createElement(
	      _baseComponents.Lead,
	      null,
	      _react2.default.createElement(
	        'h2',
	        { className: 'lead_title' },
	        'Custom Design, Engineering, Fabrication, and Service'
	      )
	    ),
	    _react2.default.createElement(About, null),
	    _react2.default.createElement(_baseComponents.Footer, { redactedCompany: props.redactedCompany })
	  );
	};

/***/ },

/***/ 181:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=landing.js.map