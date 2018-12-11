import React from 'react';
import { Checkbox } from 'antd';
import PropTypes from 'prop-types';

const CheckboxGroup = Checkbox.Group;

export default class RadioCheckbox extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }
  static propTypes = {
    value: PropTypes.any,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    config: PropTypes.object
  };

  static defaultProps = {
    value: '',
    config: {},
    onChange: () => {}
  };

  static getDerivedStateFromProps(props, state) {
    if ('value' in props && props.value !== state.preValue) {
      return {
        value: props.value,
        preValue: props.value
      };
    }
    return null;
  }

  onChangeHandler = (selectValue = []) => {
    const value = selectValue.filter(v => v !== this.state.value).join('');

    this.setState({ value });
    this.props.onChange(value);
  };

  render() {
    const { options, config } = this.props;
    const { value } = this.state;

    return <CheckboxGroup onChange={this.onChangeHandler} options={options} value={[value]} {...config} />;
  }
}
