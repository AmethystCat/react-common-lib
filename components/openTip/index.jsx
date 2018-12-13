import React from 'react';
import ReactDOM from 'react-dom';
import { Icon, Modal } from 'antd';
import PropTypes from 'prop-types';

function render(props, el) {
  const { content } = props;
  
  ReactDOM.render(
    <Modal {...props} style={{ top: '5%' }}>
      { content }
    </Modal>,
    el
  );
}

function TipModal(config) {
  let div = document.createElement('div');
  document.body.appendChild(div);

  function destroy() {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);

    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
      return;
    }
    throw 'error: destroy error';
  }

  render({ ...config, width: '50%', visible: true, footer: null }, div);
  return { destroy };
}

let modal;
const onCancel = () => { modal && modal.destroy(); };
const modalVisible = (content) => {
  modal = TipModal({
    title: '点餐开通提示',
    content,
    onCancel,
  });
};
const OpenTip = ({ content }) => (
  <div className="section-businessOpen-tip">
    <Icon type="info-circle-o" onClick={() => modalVisible(content)} />
  </div>
);

OpenTip.show = modalVisible;
OpenTip.propTypes = {
  content: PropTypes.element.isRequired
};

export default OpenTip;
