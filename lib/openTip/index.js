'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _antd = require('antd');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function render(props, el) {
  var content = props.content;


  _reactDom2.default.render(_react2.default.createElement(
    _antd.Modal,
    _extends({}, props, { style: { top: '5%' } }),
    content
  ), el);
}

function TipModal(config) {
  var div = document.createElement('div');
  document.body.appendChild(div);

  function destroy() {
    var unmountResult = _reactDom2.default.unmountComponentAtNode(div);

    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
      return;
    }
    throw 'error: destroy error';
  }

  render(_extends({}, config, { width: '50%', visible: true, footer: null }), div);
  return { destroy: destroy };
}

var modal = void 0;
var onCancel = function onCancel() {
  modal && modal.destroy();
};
var modalVisible = function modalVisible(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === undefined ? '提示' : _ref$title,
      content = _ref.content;

  modal = TipModal({
    title: title,
    content: content,
    onCancel: onCancel
  });
};
var OpenTip = function OpenTip(_ref2) {
  var content = _ref2.content,
      title = _ref2.title,
      _ref2$iconConfig = _ref2.iconConfig,
      iconConfig = _ref2$iconConfig === undefined ? {} : _ref2$iconConfig;

  var _iconConfig$type = iconConfig.type,
      type = _iconConfig$type === undefined ? 'info-circle-o' : _iconConfig$type,
      rest = _objectWithoutProperties(iconConfig, ['type']);

  return _react2.default.createElement(
    'div',
    { className: 'section-open-tip' },
    _react2.default.createElement(_antd.Icon, _extends({ type: type, onClick: function onClick() {
        return modalVisible({ title: title, content: content });
      } }, rest))
  );
};

OpenTip.show = modalVisible;
OpenTip.destroy = function () {
  if (modal) {
    modal.destroy();
    return;
  }
  throw 'modal is not defined';
};
OpenTip.propTypes = {
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  content: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]).isRequired
};

exports.default = OpenTip;