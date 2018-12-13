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
var modalVisible = function modalVisible(content) {
  modal = TipModal({
    title: '点餐开通提示',
    content: content,
    onCancel: onCancel
  });
};
var OpenTip = function OpenTip(_ref) {
  var content = _ref.content;
  return _react2.default.createElement(
    'div',
    { className: 'section-businessOpen-tip' },
    _react2.default.createElement(_antd.Icon, { type: 'info-circle-o', onClick: function onClick() {
        return modalVisible(content);
      } })
  );
};

OpenTip.show = modalVisible;
OpenTip.propTypes = {
  content: _propTypes2.default.element.isRequired
};

exports.default = OpenTip;