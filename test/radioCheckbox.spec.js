import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RadioCheckbox from '../components/radioCheckbox';
import { wrap } from 'module';

Enzyme.configure({ adapter: new Adapter() });

describe('RadioCheckbox UT', () => {
  const options = [{ label: '衰哥', value: 'boy' }, { label: '霉女', value: 'girl' }];

  test('snapshot', () => {
    const component = renderer.create(<RadioCheckbox {...{ options }} />);
    const tree = component.toJSON();
    
    expect(tree).toMatchSnapshot();
  });
  
  test('should_render_two_items_when_pass_options', () => {
    // given
    const wrapper = mount(<RadioCheckbox {...{ options }} />);
    // when
    const checkbox = wrapper.find('input[type="checkbox"]');
    // then
    expect(wrapper.find(`input[value="${options[0].value}"]`).length).toEqual(1);
    expect(wrapper.find(`input[value="${options[1].value}"]`).length).toEqual(1);
    expect(checkbox).toHaveLength(2);
    wrapper.unmount();
  });
  
  test('should_set_item_checked_when_pass_value_prop', () => {
    // given
    const defaultValue = options[0].value;
    const wrapper = shallow(<RadioCheckbox {...{ options, value: defaultValue }} />)
    // when
    const { value } = wrapper.state();
    // then
    expect(value).toEqual(defaultValue);
  });
  
  test('should_behavior_as_radio_when_rendered', () => {
    // given
    const defaultValue = options[0].value;
    const expectValue = options[1].value;
    const wrapper = shallow(<RadioCheckbox {...{ options, value: defaultValue }} />);
    const instance = wrapper.instance();
    const values = options.map(o => o.value);
    // when
    instance.onChangeHandler(values);
    // then
    expect(wrapper.state().value).toEqual(expectValue);
  });

  test('should_cancel_select_radioCheckbox_when_click_the_select_item_which_value_is_"girl"', () => {
    // given
    const defaultValue = options[1].value;
    const wrapper = mount(<RadioCheckbox {...{ options, value: defaultValue }} />);
    // when
    console.log(wrapper.state());
    wrapper.find(`input[value="${defaultValue}"]`).simulate('change');
    // then
    expect(wrapper.state().value).toEqual('');
    wrapper.unmount();
  });
  
  test('should_check_"衰哥"_when_defaultValue_is_"girl"_and_dynamical_passed_value_is_"boy"_', () => {
    // 测试动态传入value的情景，就是在Form被装饰后值被getFieldDecorator接管的情景  
    // given
    console.log('---------------------');
    const defaultValue = options[0].value;
    const expectValue = options[1].value;
    const newValue = options[1].value;
    const wrapper = mount(<RadioCheckbox {...{ options, value: defaultValue }} />);
    // when
    wrapper.setProps({ value: 'girl', key: 'girl' });
    const { value } = wrapper.state();
    // then
    expect(value).toEqual(expectValue);
  });
});