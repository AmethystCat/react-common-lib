import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Icon } from 'antd';
import OpenTip from '../components/openTip';

Enzyme.configure({ adapter: new Adapter() });

describe('OpenTip UT', () => {
  test('snapshot', () => {
    const component = renderer.create(<OpenTip content="test" />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('should_show_modal_which_include_given_content_when_click_icon', () => {
    // given
    const txt = '哈哈';
    const content = <div id="content">{txt}</div>;
    // when
    const wrapper = mount(<OpenTip {...{ content }} />);
    const icon = wrapper.find(Icon);

    icon.simulate('click');
    const hasRenderModalNode = window.document.querySelector('.ant-modal');
    const contentNode = window.document.querySelector('#content');
    // then 
    expect(hasRenderModalNode).toBeTruthy();
    expect(contentNode).toBeTruthy();
    expect(contentNode.innerHTML).toEqual(txt);
    
    OpenTip.destroy();
    wrapper.unmount();
  });

  test('should_destroy_modal_when_call_openTip.destroy', () => {
    // given
    const wrapper = mount(<OpenTip content="test" />);
    const icon = wrapper.find(Icon);
    // when
    icon.simulate('click');
    OpenTip.destroy();
    const hasRenderModalNode = window.document.querySelector('.ant-modal');
    // then
    expect(hasRenderModalNode).toBeFalsy();
    wrapper.unmount();
  });
  
  test('should_show_modal_when_call_show_function', () => {
    // given
    const content = '哈哈, 你好呀HC';
    const title = '提示';
    // when
    OpenTip.show({ content });
    // then
    const hasRenderModalNode = window.document.querySelector('.ant-modal');
    const contentNode = window.document.querySelector('.ant-modal-body');
    const titleNode = window.document.querySelector('.ant-modal-title');
    
    expect(hasRenderModalNode).toBeTruthy();
    expect(contentNode).toBeTruthy();
    expect(contentNode.innerHTML).toEqual(content);
    expect(titleNode.innerHTML).toEqual(title);
  });
});
