import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CustomMutiSelect from '../components/customMutiSelect';

Enzyme.configure({ adapter: new Adapter() });

describe('CustomMutiSelect UT', () => {
  const ID_ALL = 'select all 🤪';
  const values = [
    { id: '1', name: 'item1' },
    { id: '2', name: 'item2' },
    { id: '3', name: 'item3' },
    { id: '4', name: 'item4' }
  ];
  const initialValues = ['1', '2', '3'];
  const theRestUnSelectId = '4';
  // 包含"全部"条目
  const allItemLength = values.length + 1;
  
  test('snapshot', () => {
    const component = renderer.create(<CustomMutiSelect {...{ values }} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('should_show_three_select_items_when_passed_initialValues_have_three_items', () => {
    // given
    const wrapper = shallow(<CustomMutiSelect  {...{values, initialValues}} />)
    // when 
    // then
    const { selectedValues } = wrapper.state(); 
    expect(selectedValues).toEqual(initialValues);
  });
  
  test('should_all_items_be_selected_when_passed_initialValues_have_all_items', () => {
    // given
    const mockInitialValues = values.map(v => v.id);
    const wrapper = shallow(<CustomMutiSelect  {...{values, initialValues: mockInitialValues}} />)
    // when 
    // then
    const { selectedValues } = wrapper.state(); 
    expect(selectedValues.length).toEqual(allItemLength);
  });

  test('should_show_the_"全部"_item_when_select_all_item_manually', () => {
    // given
    const onChange = jest.fn();
    const wrapper = shallow(<CustomMutiSelect {...{ values, onChange }} />);
    const instance = wrapper.instance();
    const mockIds = values.map(v => v.id);
    const mockSelectedValues = mockIds.slice(1);
    const selectValueManually = mockIds[0];
    // when
    // 实测 wrapper.setState() or instance.setState() 都可以
    wrapper.setState({ selectedValues: mockSelectedValues });
    instance.onSelectHandler(selectValueManually);
    instance.onChangeHandler(mockIds);
    // then
    // 实测 wrapper.state() or instance.state 都可以
    const { selectedValues } = wrapper.state();
    
    expect(selectedValues.length).toEqual(allItemLength);
    expect(onChange).toBeCalledWith(mockIds);
    expect(instance.maxTagCount).toEqual(1);
  });

  test('should_show_the_"全部"_item_when_initialValues_have_three_elements_and_select_the_rest_item_manually', () => {
    // given
    const onChange = jest.fn();
    const wrapper = shallow(<CustomMutiSelect {...{ values, initialValues, onChange }} />);
    const instance = wrapper.instance();
    const mockIds = values.map(v => v.id);
    
    // when
    // 实测 wrapper.setState() or instance.setState() 都可以
    instance.onSelectHandler(theRestUnSelectId);
    instance.onChangeHandler(mockIds);
    // then
    // 实测 wrapper.state() or instance.state 都可以
    const { selectedValues } = wrapper.state();

    expect(selectedValues.length).toEqual(allItemLength);
    expect(onChange).toBeCalledWith(mockIds);
    expect(instance.maxTagCount).toEqual(1);
  });

  test('should_select_all_items_when_select_"全部"', () => {
    // given
    const onChange = jest.fn();
    const wrapper = shallow(<CustomMutiSelect {...{values, onChange}} />);
    const instance = wrapper.instance();
    const ids = values.map(v => v.id);
    // when
    instance.onSelectHandler(ID_ALL);
    // then
    const { selectedValues } = wrapper.state();
    expect(selectedValues.length).toEqual(allItemLength);
    expect(onChange).toBeCalledWith(ids);
    expect(instance.maxTagCount).toEqual(1);
  });
  
  test('should_maxTagCount_is_2_when_select_3_items', () => {
    // given
    const onChange = jest.fn();
    const mockInitialValues = ['1', '2'];
    const mockSelectValues = ['1', '2', '3'];
    const wrapper = shallow(<CustomMutiSelect {...{values, initialValues: mockInitialValues, onChange}} />);
    const instance = wrapper.instance();
    // when
    instance.onChangeHandler(mockSelectValues);
    // then
    expect(instance.maxTagCount).toEqual(2);
    expect(onChange).toBeCalledWith(mockSelectValues);
  });

  test('should_do_not_select_"全部"_when_initialValues_include_all_items_and_unSelect_one_of_items', () => {
    // given
    const hasIDAll = wrapper => wrapper.state().selectedValues.includes(ID_ALL);
    const onChange = jest.fn();
    const mockInitialValues = values.map(v => v.id);
    const mockSelectValues = mockInitialValues.slice(1);
    const wrapper = shallow(<CustomMutiSelect {...{values, initialValues: mockInitialValues, onChange}} />);
    const instance = wrapper.instance();
    
    // when
    instance.onChangeHandler(mockSelectValues);
    // then
    expect(hasIDAll(wrapper)).toBeFalsy();
    expect(wrapper.state().selectedValues).toEqual(mockSelectValues); 
    expect(onChange).toBeCalledWith(mockSelectValues);
  });

  test('should_unSelect_all_items_when_unSelect_"全部"', () => {
    // given
    const onChange = jest.fn();
    const mockInitialValues = values.map(v => v.id);
    const wrapper = shallow(<CustomMutiSelect {...{values, initialValues: mockInitialValues, onChange}} />);
    const instance = wrapper.instance();
    // when
    instance.onDeselectHandler(ID_ALL);
    // then
    const { selectedValues } = wrapper.state();
    
    expect(selectedValues.length).toEqual(0);
    expect(onChange).toBeCalledWith([]);
  });

  test('should_do_not_call_onChangeHandler_when_select_"全部"', () => {
    // given
    const wrapper = shallow(<CustomMutiSelect {...{values}} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'onChangeHandler');
    // when
    instance.onSelectHandler(ID_ALL);
    // then
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });
  test('should_do_not_call_onChangeHandler_when_unSelect_"全部"', () => {
    // given
    const mockInitialValues = values.map(v => v.id);
    const wrapper = shallow(<CustomMutiSelect {...{values, initialValues: mockInitialValues}} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'onChangeHandler');
    // when
    instance.onDeselectHandler(ID_ALL);
    // then
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  test('should_select_values_is_["1", "2"]_when_pass_"value"_prop_which_is_equal_["1", "2"]_dynamically', () => {
    // 测试动态传入value的情景，就是在Form被装饰后值被getFieldDecorator接管的情景
    // given
    const wrapper = shallow(<CustomMutiSelect {...{values}} />);
    const dynamicValue = ['1', '2'];
    // when
    wrapper.setProps({ value: dynamicValue });
    const { selectedValues } = wrapper.state();
    // then
    expect(selectedValues).toEqual(dynamicValue);
  });
});
