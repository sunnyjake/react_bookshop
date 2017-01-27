'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('/home/adminka/PhpstormProjects/react_tutorials/pag/node_modules/redbox-react/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('/home/adminka/PhpstormProjects/react_tutorials/pag/node_modules/react-transform-catch-errors/lib/index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('/home/adminka/PhpstormProjects/react_tutorials/pag/node_modules/react-transform-hmr/lib/index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./App.css');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  App: {
    displayName: 'App'
  }
};

var _homeAdminkaPhpstormProjectsReact_tutorialsPagNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/home/adminka/PhpstormProjects/react_tutorials/pag/src/App.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _homeAdminkaPhpstormProjectsReact_tutorialsPagNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/home/adminka/PhpstormProjects/react_tutorials/pag/src/App.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _homeAdminkaPhpstormProjectsReact_tutorialsPagNode_modulesReactTransformHmrLibIndexJs2(_homeAdminkaPhpstormProjectsReact_tutorialsPagNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var App = _wrapComponent('App')(function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      pages: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      (0, _axios2.default)({
        method: 'get',
        url: '/api/campaign?page=1',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6XC9cL21pZHdpbnRlci1tYXAuY29tXC9hcGlcL2F1dGhlbnRpY2F0ZSIsImlhdCI6MTQ4NTUwNzI4MiwiZXhwIjoxNDg2NzE2ODgyLCJuYmYiOjE0ODU1MDcyODIsImp0aSI6ImEyZDliNmE2MjQ1MjlmMWUyNDRjZWZjNGMwN2QxOGI3In0.5FV6Up3s6X__LW5qJVL7MdRnTkfOZLmBiwUCI4PjnPM'
        }
      }).then(function (response) {
        console.log(response);
        _this2.setState({ pages: Math.ceil(response.data.campaign_array.total / response.data.campaign_array.to) });
        console.log(_this2.state.pages);
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {

      var pages = [];
      for (var i = 1; i <= this.state.pages; i++) {
        pages.push(_react3.default.createElement(
          'li',
          { key: i },
          _react3.default.createElement(
            _reactRouter.Link,
            { activeClassName: 'active', to: '/pages/' + i },
            'Page ',
            i
          )
        ));
      }

      return _react3.default.createElement(
        'div',
        { className: 'App' },
        this.props.children,
        _react3.default.createElement(
          'ul',
          { className: 'pagination list-unstyled' },
          pages
        )
      );
    }
  }]);

  return App;
}(_react2.Component));

exports.default = App;

//# sourceMappingURL=App-compiled.js.map