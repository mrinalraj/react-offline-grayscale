"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fliterOptions = ['grayscale', 'sepia', 'none'];

var ReactOffline =
/*#__PURE__*/
function (_Component) {
  _inherits(ReactOffline, _Component);

  function ReactOffline() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ReactOffline);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ReactOffline)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isDisconnected: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleConnectionChange", function () {
      var condition = navigator.onLine ? 'online' : 'offline';

      if (condition === 'online') {
        var webPing = setInterval(function () {
          fetch('//google.com', {
            mode: 'no-cors'
          }).then(function () {
            _this.setState({
              isDisconnected: false
            }, function () {
              _this.enableClick();

              return clearInterval(webPing);
            });
          }).catch(function () {
            _this.setState({
              isDisconnected: true
            });

            _this.disableClick();
          });
        }, 2000);
        return;
      }

      return _this.setState({
        isDisconnected: true
      }, function () {
        _this.disableClick();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "disableClick", function () {
      if (!_this.props.enableClick) document.addEventListener('click', _this.handler, true);
    });

    _defineProperty(_assertThisInitialized(_this), "enableClick", function () {
      if (!_this.props.enableClick) document.removeEventListener('click', _this.handler, true);
    });

    _defineProperty(_assertThisInitialized(_this), "handler", function (e) {
      e.stopPropagation();
      e.preventDefault();
    });

    return _this;
  }

  _createClass(ReactOffline, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('online', this.handleConnectionChange);
      window.addEventListener('offline', this.handleConnectionChange);
      this.handleConnectionChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('online', this.handleConnectionChange);
      window.removeEventListener('offline', this.handleConnectionChange);
    }
  }, {
    key: "render",
    value: function render() {
      var isDisconnected = this.state.isDisconnected;
      var _this$props = this.props,
          barStyle = _this$props.barStyle,
          customPageStyle = _this$props.customPageStyle,
          _this$props$filter = _this$props.filter,
          filter = _this$props$filter === void 0 ? 'grayscale' : _this$props$filter,
          customOfflineText = _this$props.customOfflineText;
      return _react.default.createElement(_react.default.Fragment, null, isDisconnected && _react.default.createElement("div", {
        className: "indication-bar",
        style: barStyle
      }, customOfflineText || "You are offline"), _react.default.createElement("div", {
        className: isDisconnected && filter,
        style: customPageStyle
      }, _react.Children.only(this.props.children)));
    }
  }]);

  return ReactOffline;
}(_react.Component);

exports.default = ReactOffline;

_defineProperty(ReactOffline, "propTypes", {
  enableClick: _propTypes.default.bool,
  filter: _propTypes.default.oneOf(fliterOptions),
  barStyle: _propTypes.default.object,
  customPageStyle: _propTypes.default.object,
  customOfflineText: _propTypes.default.string
});