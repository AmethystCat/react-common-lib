import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddressCascader from '../components/addressCascader';

Enzyme.configure({ adapter: new Adapter() });

describe('AddressCascader UT', () => {
  test('snapshot', () => {
    const component = renderer.create(<AddressCascader />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  
  test('should_call_onChange_when_select_address', () => {
    // given
    const onChange = jest.fn();
    const wrapper = shallow(<AddressCascader onChange={onChange} />);
    const instance = wrapper.instance();
    const code = ["11", "1101", "110101"]
    const expectArgs = {provinceCode: '11', districtCode: '110101', cityCode: '1101'};
    // when
    instance.onCascaderChange(code);
    // then 
    expect(onChange).toBeCalledWith(expectArgs);
  });
  
  test('should_value_fully_controlled_when_value_pass_dynamically', () => {
    // given
    const onChange = jest.fn();
    const value = {provinceCode: '12', cityCode: '1201', districtCode: '120101'};
    const code = ["11", "1101", "110101"];
    const expectState = {provinceCode: '11', cityCode: '1101', districtCode: '110101'};
    const wrapper = shallow(<AddressCascader onChange={onChange} />);
    const instance = wrapper.instance();
    // when
    wrapper.setProps({ value });
    const { state } = instance;
    // then
    expect(state).toEqual(value);
    
    // when
    instance.onCascaderChange(code);
    // then
    expect(instance.state).toEqual(value);
    expect(onChange).toBeCalledWith(expectState);
  });
});
