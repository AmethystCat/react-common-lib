import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
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
    const txt = '哈哈';
    const content = <div id="content">{txt}</div>;
    const wrapper = mount(<OpenTip {...{ content }} />);
    const icon = wrapper.find(Icon);

    icon.simulate('click');
    const hasRenderModalNode = window.document.querySelector('.ant-modal');
    const contentNode = window.document.querySelector('#content');
    
    expect(hasRenderModalNode).toBeTruthy();
    expect(contentNode).toBeTruthy();
    expect(contentNode.innerHTML).toEqual(txt);
  });
});
