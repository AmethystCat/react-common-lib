'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _antd.Select.Option;

var ID_ALL = 'select all 🤪';
var OPTION_ALL = { id: ID_ALL, name: '全部' };
var defaultConfig = {
  style: { width: 350 },
  placeholder: 'Please select an item',
  getPopupContainer: function getPopupContainer() {
    return document.getElementById('custom-muti-select');
  }
};

var CustomMutiSelect = function (_React$PureComponent) {
  _inherits(CustomMutiSelect, _React$PureComponent);

  _createClass(CustomMutiSelect, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        return { selectedValues: nextProps.value };
      }
      return null;
    }
  }]);

  function CustomMutiSelect(props) {
    _classCallCheck(this, CustomMutiSelect);

    var _this = _possibleConstructorReturn(this, (CustomMutiSelect.__proto__ || Object.getPrototypeOf(CustomMutiSelect)).call(this, props));

    _initialiseProps.call(_this);

    var _this$props = _this.props,
        propValues = _this$props.values,
        _this$props$initialVa = _this$props.initialValues,
        initialValues = _this$props$initialVa === undefined ? [] : _this$props$initialVa;

    var values = [].concat(_toConsumableArray(propValues));
    var selectedValues = initialValues.length === propValues.length ? [].concat(_toConsumableArray(initialValues), [ID_ALL]) : initialValues;

    values.unshift(OPTION_ALL);
    _this.state = {
      selectedValues: selectedValues,
      values: values
    };
    _this.maxTagCount = 2;
    _this.enableOnChange = true;
    return _this;
  }

  _createClass(CustomMutiSelect, [{
    key: 'render',
    value: function render() {
      var selectedValues = this.state.selectedValues;
      var config = this.props.config;


      return _react2.default.createElement(
        'div',
        { id: 'custom-muti-select' },
        _react2.default.createElement(
          _antd.Select,
          _extends({
            mode: 'multiple',
            value: selectedValues,
            maxTagCount: this.maxTagCount,
            maxTagPlaceholder: '...',
            onChange: this.onChangeHandler,
            onSelect: this.onSelectHandler,
            onDeselect: this.onDeselectHandler
          }, _extends({}, defaultConfig, config)),
          this.renderOptions()
        )
      );
    }
  }]);

  return CustomMutiSelect;
}(_react2.default.PureComponent);

CustomMutiSelect.defaultProps = {
  initialValues: [],
  values: [],
  config: {},
  onChange: function onChange() {}
};
CustomMutiSelect.propTypes = {
  onChange: _propTypes2.default.func,
  initialValues: _propTypes2.default.array,
  values: _propTypes2.default.array,
  config: _propTypes2.default.object
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.renderOptions = function () {
    var values = _this2.state.values;


    return values.map(function (v) {
      return _react2.default.createElement(
        Option,
        { key: v.id, title: v.name },
        v.name
      );
    });
  };

  this.onChangeHandler = function (selectedValues) {
    if (!_this2.enableOnChange) {
      _this2.enableOnChange = true;
      return;
    }
    var values = _this2.state.values;

    var isSelectedAll = values.length === selectedValues.length || selectedValues.length === _this2.props.values.length && !selectedValues.includes(ID_ALL);
    var valuesWithoutAll = selectedValues.filter(function (v) {
      return v !== ID_ALL;
    });
    var sValues = [];

    _this2.maxTagCount = isSelectedAll ? 1 : 2;
    if (isSelectedAll) {
      sValues.push(ID_ALL);
      sValues = sValues.concat(valuesWithoutAll);
    } else {
      sValues = valuesWithoutAll;
    }
    _this2.syncSelectedVal(sValues);
  };

  this.onSelectHandler = function (selectedValue) {
    if (selectedValue === ID_ALL) {
      _this2.enableOnChange = false;
      _this2.maxTagCount = 1;
      var selectedValues = _this2.state.values.map(function (v) {
        return String(v.id);
      });
      _this2.syncSelectedVal(selectedValues);
      return;
    }

    _this2.enableOnChange = true;
  };

  this.onDeselectHandler = function (cancelSelectValue) {
    if (cancelSelectValue === ID_ALL) {
      _this2.enableOnChange = false;
      _this2.syncSelectedVal([]);
      return;
    }
    _this2.enableOnChange = true;
  };

  this.syncSelectedVal = function (selectedValues) {
    _this2.setState({ selectedValues: selectedValues });
    _this2.props.onChange(selectedValues.filter(function (v) {
      return v !== ID_ALL;
    }));
  };
};

exports.default = CustomMutiSelect;