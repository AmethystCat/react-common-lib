import React from 'react';
import { Cascader, Row, Col } from 'antd';

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
  constructor(props) {
    super(props);
    this.state = {
      provinceCode: null,
      cityCode: null,
      districtCode: null,
      address: null,
      longitude: null,
      latitude: null,
      ...(props.value || {})
    };
  }

  static getDerivedStateFromProps(nextProps) {
    // console.log('-------', nextProps);
    if ('value' in nextProps) {
      // 参考value
      // value => {provinceCode, cityCode, districtCode, address, longitude, latitude...}
      const value = nextProps.value || {};
      return {...value};
    }
    return null;
  }

  onCascaderChange = (code = [], selectedOptions) => {
    console.log(code, selectedOptions);
    this.addressPrefix = selectedOptions.map(s => s.label).join('');
    // 如果重新选择了其它的省市区，需要将address清空，让用户重新填写
    // const clearAddress = code[2] !== this.state.districtCode;
    this.setState(
      {
        provinceCode: code[0] || null,
        cityCode: code[1] || null,
        districtCode: code[2] || null
      }
      // () => {
      // 1.未选择省市区时(code = [])触发校验，提示不正确，否则要在地址填写完成后才触发校验
      // 2.先填地址后选省市区时触发校验
      //（ ❌ 不考虑这种情况，直接做成重新选择省市区时清空addrees让用户重新填写。）
      // if (clearAddress) {
      //   this.onAddressChange({ target: { value: '' } });
      //   document.querySelector('#address').focus();
      // }
      // }
    );
  };

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

  render() {
    const { provinceCode, cityCode, districtCode } = this.state;
    const cas = (provinceCode && cityCode && districtCode && [provinceCode, cityCode, districtCode]) || [];

    return (
      <div className="section-address">
        <Row gutter={16}>
          <Col span={6}>
            <Cascader options={options} value={cas} placeholder="省 / 市 / 区" onChange={this.onCascaderChange} />
          </Col>
          {/* <Col span={6}>
            <Input
              id="address"
              value={address}
              placeholder="道路+门牌号"
              onChange={this.onAddressChange}
            />
          </Col>
          <Col span={12}>
            <p style={{ marginBottom: 0 }}>需与营业执照地址保持一致</p>
          </Col> */}
        </Row>
      </div>
    );
  }
}

AddressCascader.validate = (rule, value, callback) => {
  console.log('validater:', rule, value);
  let isSuccess = Object.keys(value).every(key => value[key]);
  if (!isSuccess) {
    callback(rule.message);
    return;
  }
  callback();
};
