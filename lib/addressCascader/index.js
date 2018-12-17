'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

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

      console.log(code, selectedOptions);
      _this.addressPrefix = selectedOptions.map(function (s) {
        return s.label;
      }).join('');
      // 如果重新选择了其它的省市区，需要将address清空，让用户重新填写
      // const clearAddress = code[2] !== this.state.districtCode;
      _this.setState({
        provinceCode: code[0] || null,
        cityCode: code[1] || null,
        districtCode: code[2] || null
        // () => {
        // 1.未选择省市区时(code = [])触发校验，提示不正确，否则要在地址填写完成后才触发校验
        // 2.先填地址后选省市区时触发校验
        //（ ❌ 不考虑这种情况，直接做成重新选择省市区时清空addrees让用户重新填写。）
        // if (clearAddress) {
        //   this.onAddressChange({ target: { value: '' } });
        //   document.querySelector('#address').focus();
        // }
        // }
      });
    };

    _this.state = _extends({
      provinceCode: null,
      cityCode: null,
      districtCode: null,
      address: null,
      longitude: null,
      latitude: null
    }, props.value || {});
    return _this;
  }

  _createClass(AddressCascader, [{
    key: 'render',


    // onAddressChange = e => {
    //   clearTimeout(this.timer);
    //   if (!e.target.value) {
    //     this.setState({
    //       address: '',
    //       longitude: null,
    //       latitude: null
    //     }, () => {
    //       this.props.onChange(this.state);
    //     });
    //     return;
    //   }
    //   this.setState({ address: e.target.value }, () => {
    //     this.timer = setTimeout(() => {
    //       const { city_code, address } = this.state;
    //       // 间隔0.5秒，获取经纬度
    //       const fullAddress = `${this.addressPrefix || ''}${address}`;
    //       getLocation(city_code, fullAddress, ({ longitude, latitude }) => {
    //         this.setState({ longitude, latitude }, () => {
    //           this.props.onChange(this.state);
    //         })
    //       });
    //     }, 500);
    //   });
    // };

    value: function render() {
      var _state = this.state,
          provinceCode = _state.provinceCode,
          cityCode = _state.cityCode,
          districtCode = _state.districtCode;

      var cas = provinceCode && cityCode && districtCode && [provinceCode, cityCode, districtCode] || [];

      return _react2.default.createElement(
        'div',
        { className: 'section-address' },
        _react2.default.createElement(
          _antd.Row,
          { gutter: 16 },
          _react2.default.createElement(
            _antd.Col,
            { span: 6 },
            _react2.default.createElement(_antd.Cascader, { options: options, value: cas, placeholder: '\u7701 / \u5E02 / \u533A', onChange: this.onCascaderChange })
          )
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps) {
      // console.log('-------', nextProps);
      if ('value' in nextProps) {
        // 参考value
        // value => {provinceCode, cityCode, districtCode, address, longitude, latitude...}
        var value = nextProps.value || {};
        this.setState(value);
      }
    }
  }]);

  return AddressCascader;
}(_react2.default.PureComponent);

exports.default = AddressCascader;


AddressCascader.validate = function (rule, value, callback) {
  console.log('validater:', rule, value);
  var isSuccess = Object.keys(value).every(function (key) {
    return value[key];
  });
  if (!isSuccess) {
    callback(rule.message);
    return;
  }
  callback();
};