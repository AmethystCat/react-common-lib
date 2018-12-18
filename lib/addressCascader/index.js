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

var _provinces = require('china-division/dist/provinces.json');

var _provinces2 = _interopRequireDefault(_provinces);

var _cities = require('china-division/dist/cities.json');

var _cities2 = _interopRequireDefault(_cities);

var _areas = require('china-division/dist/areas.json');

var _areas2 = _interopRequireDefault(_areas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_areas2.default.forEach(function (area) {
  var matchCity = _cities2.default.filter(function (city) {
    return city.code === area.cityCode;
  })[0];

  if (matchCity) {
    matchCity.children = matchCity.children || [];
    matchCity.children.push({
      label: area.name,
      value: area.code
    });
  }
});

_cities2.default.forEach(function (city) {
  var matchProvince = _provinces2.default.filter(function (province) {
    return province.code === city.provinceCode;
  })[0];

  if (matchProvince) {
    matchProvince.children = matchProvince.children || [];
    matchProvince.children.push({
      label: city.name,
      value: city.code,
      children: city.children
    });
  }
});

var options = _provinces2.default.map(function (province) {
  return {
    label: province.name,
    value: province.code,
    children: province.children
  };
});
// 地址解析参考：https://lbs.amap.com/api/javascript-api/guide/map-data/geocoding
// const getLocation = (city_code, address, cb = () => {}) => {
//   window.AMap.service('AMap.Geocoder',() => {//回调函数
//     // 实例化Geocoder
//     const geocoder = new AMap.Geocoder({
//       city: city_code || "010", //城市，默认：“全国”
//     });
//     console.log(geocoder);
//     console.log(address);
//     // 使用geocoder 对象完成相关功能
//     geocoder.getLocation(address, (status, result) => {
//       if (status === 'complete' && result.info === 'OK') {
//         // 获得了有效经纬度，可以做一些展示工作
//         // 比如在获得的经纬度上打上一个Marker
//         console.log(status, result);
//         const { lng, lat } = result.geocodes[0].location;
//         cb({ longitude: `${lng}`, latitude: `${lat}` });
//       }else{
//         // 获取经纬度失败
//         console.log('error-----', status, result);
//         cb({ longitude: null, latitude: null });
//       }
//   });
//   })
// };

var AddressCascader = function (_React$PureComponent) {
  _inherits(AddressCascader, _React$PureComponent);

  function AddressCascader(props) {
    _classCallCheck(this, AddressCascader);

    var _this = _possibleConstructorReturn(this, (AddressCascader.__proto__ || Object.getPrototypeOf(AddressCascader)).call(this, props));

    _this.onCascaderChange = function () {
      var code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var selectedOptions = arguments[1];

      console.log('select value: ', code, selectedOptions);
      var state = {
        provinceCode: code[0] || null,
        cityCode: code[1] || null,
        districtCode: code[2] || null
      };
      if ('value' in _this.props) {
        _this.props.onChange(state);
        return;
      }
      _this.setState(state, function () {
        _this.props.onChange(_this.state);
      });
    };

    _this.state = _extends({
      provinceCode: null,
      cityCode: null,
      districtCode: null
    }, props.value || {});
    return _this;
  }

  _createClass(AddressCascader, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          provinceCode = _state.provinceCode,
          cityCode = _state.cityCode,
          districtCode = _state.districtCode;

      var cas = provinceCode && cityCode && districtCode && [provinceCode, cityCode, districtCode] || [];
      var cascaderConfig = this.props.cascaderConfig;


      return _react2.default.createElement(
        'div',
        { className: 'section-address' },
        _react2.default.createElement(_antd.Cascader, _extends({}, cascaderConfig, {
          options: options,
          value: cas,
          placeholder: '\u7701 / \u5E02 / \u533A',
          onChange: this.onCascaderChange
        }))
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props) {
      if ('value' in props) {
        // 参考value
        // value => {provinceCode, cityCode, districtCode, ...}
        var value = props.value || {};
        return _extends({}, value);
      }
      return null;
    }
  }]);

  return AddressCascader;
}(_react2.default.PureComponent);

AddressCascader.propTypes = {
  onChange: _propTypes2.default.func,
  cascaderConfig: _propTypes2.default.object
};
AddressCascader.defaultProps = {
  onChange: function onChange() {},
  cascaderConfig: {}
};
exports.default = AddressCascader;