'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('./index.css');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_reactRouter.Router, { routes: _routes2.default, history: _reactRouter.browserHistory }), document.getElementById('root'));
// import App from './App';

//# sourceMappingURL=index-compiled.js.map