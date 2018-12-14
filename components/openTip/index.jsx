import React from 'react';
import ReactDOM from 'react-dom';
import { Icon, Modal } from 'antd';
import PropTypes from 'prop-types';

function render(props, el) {
  const { content } = props;

  ReactDOM.render(
    <Modal {...props} style={{ top: '5%' }}>
      {content}
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
const onCancel = () => {
  modal && modal.destroy();
};
const modalVisible = (title = '提示', content) => {
  modal = TipModal({
    title,
    content,
    onCancel
  });
};
const OpenTip = ({ content, title, iconConfig = {} }) => {
  const { type = 'info-circle-o', ...rest } = iconConfig;
  
  return (
    <div className="section-open-tip">
      <Icon type={type} onClick={() => modalVisible(title, content)} {...rest} />
    </div>
  );
};

OpenTip.show = modalVisible;
OpenTip.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
};

export default OpenTip;
