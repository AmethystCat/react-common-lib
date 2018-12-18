import React from 'react';
import { Cascader } from 'antd';
import PropTypes from 'prop-types';

import provinces from 'china-division/dist/provinces.json';
import cities from 'china-division/dist/cities.json';
import areas from 'china-division/dist/areas.json';

areas.forEach(area => {
  const matchCity = cities.filter(city => city.code === area.cityCode)[0];

  if (matchCity) {
    matchCity.children = matchCity.children || [];
    matchCity.children.push({
      label: area.name,
      value: area.code
    });
  }
});

cities.forEach(city => {
  const matchProvince = provinces.filter(province => province.code === city.provinceCode)[0];

  if (matchProvince) {
    matchProvince.children = matchProvince.children || [];
    matchProvince.children.push({
      label: city.name,
      value: city.code,
      children: city.children
    });
  }
});

const options = provinces.map(province => ({
  label: province.name,
  value: province.code,
  children: province.children
}));
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

export default class AddressCascader extends React.PureComponent {
  static propTypes = {
    onChange: PropTypes.func,
    cascaderConfig: PropTypes.object
  };

  static defaultProps = {
    onChange: () => {},
    cascaderConfig: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      provinceCode: null,
      cityCode: null,
      districtCode: null,
      ...(props.value || {})
    };
  }

  static getDerivedStateFromProps(props) {
    if ('value' in props) {
      // 参考value
      // value => {provinceCode, cityCode, districtCode, ...}
      const value = props.value || {};
      return { ...value };
    }
    return null;
  }

  onCascaderChange = (code = [], selectedOptions) => {
    console.log('select value: ', code, selectedOptions);
    const state = {
      provinceCode: code[0] || null,
      cityCode: code[1] || null,
      districtCode: code[2] || null
    };
    if ('value' in this.props) {
      this.props.onChange(state);
      return;
    }
    this.setState(state, () => {
      this.props.onChange(this.state);
    });
  };

  render() {
    const { provinceCode, cityCode, districtCode } = this.state;
    const cas = (provinceCode && cityCode && districtCode && [provinceCode, cityCode, districtCode]) || [];
    const { cascaderConfig } = this.props;

    return (
      <div className="section-address">
        <Cascader
          {...cascaderConfig}
          options={options}
          value={cas}
          placeholder="省 / 市 / 区"
          onChange={this.onCascaderChange}
        />
      </div>
    );
  }
}
