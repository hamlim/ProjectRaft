webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _yachts = __webpack_require__(186);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var maincss = __webpack_require__(174);
	var yachtscss = __webpack_require__(187);
	
	if (document.getElementById('reactMount')) {
	  _reactDom2.default.render(_react2.default.createElement(_yachts.Page, { redactedCompany: "company_name_here" }), document.getElementById('reactMount'));
	}

/***/ },

/***/ 186:
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
	
	var Products = function Products(props) {
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
	    _react2.default.createElement(_baseComponents.Header, { yachts: true }),
	    _react2.default.createElement(
	      _baseComponents.Lead,
	      null,
	      _react2.default.createElement(
	        'h3',
	        { className: 'lead_title' },
	        'Yachts'
	      ),
	      _react2.default.createElement(
	        'h4',
	        { className: 'lead_subtitle' },
	        'Seamless Styling, Exceptional Engineering'
	      )
	    ),
	    _react2.default.createElement(Products, null),
	    _react2.default.createElement(_baseComponents.Footer, { redactedCompany: props.redactedCompany })
	  );
	};

/***/ },

/***/ 187:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=yachts.js.map