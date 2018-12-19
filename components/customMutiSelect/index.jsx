import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';

const { Option } = Select;
const ID_ALL = 'select all 🤪';
const OPTION_ALL = { id: ID_ALL, name: '全部' };
const defaultConfig = {
  style: {width: 350},
  placeholder: 'Please select an item',
  getPopupContainer: () => document.getElementById('custom-muti-select'),
};

export default class CustomMutiSelect extends React.PureComponent {
  static defaultProps = {
    initialValues: [],
    values: [],
    config: {},
    onChange: () => {}
  };

  static propTypes = {
    onChange: PropTypes.func,
    initialValues: PropTypes.array,
    values: PropTypes.array,
    config: PropTypes.object
  };
  
  static getDerivedStateFromProps(nextProps) {
    if ('value' in nextProps) {
      return { selectedValues: nextProps.value };
    }
    return null;
  }

  constructor(props) {
    super(props);
    
    const { values: propValues, initialValues = [] } = this.props;
    const values = [...propValues];
    const selectedValues = initialValues.length === propValues.length
      ? [...initialValues, ID_ALL]
      : initialValues;
    
    values.unshift(OPTION_ALL);
    this.state = {
      selectedValues,
      values,
    };
    this.maxTagCount = 2;
    this.enableOnChange = true;
  }

  renderOptions = () => {
    const { values } = this.state;
    
    return values.map(v => (
      <Option key={v.id} title={v.name}>
        {v.name}
      </Option>
    ));
  };

  onChangeHandler = selectedValues => {
    if (!this.enableOnChange) {
      this.enableOnChange = true;
      return;
    }
    const { values } = this.state;
    const isSelectedAll =
      values.length === selectedValues.length ||
      (selectedValues.length === this.props.values.length && !selectedValues.includes(ID_ALL));
    const valuesWithoutAll = selectedValues.filter(v => v !== ID_ALL);
    let sValues = [];

    this.maxTagCount = isSelectedAll ? 1 : 2;
    if (isSelectedAll) {
      sValues.push(ID_ALL);
      sValues = sValues.concat(valuesWithoutAll);
    } else {
      sValues = valuesWithoutAll;
    }
    this.syncSelectedVal(sValues);
  };

  onSelectHandler = selectedValue => {
    if (selectedValue === ID_ALL) {
      this.enableOnChange = false;
      this.maxTagCount = 1;
      const selectedValues = this.state.values.map(v => String(v.id));
      this.syncSelectedVal(selectedValues);
      return;
    }
    
    this.enableOnChange = true;
  };

  onDeselectHandler = cancelSelectValue => {
    if (cancelSelectValue === ID_ALL) {
      this.enableOnChange = false;
      this.syncSelectedVal([]);
      return;
    }
    this.enableOnChange = true;
  };

  syncSelectedVal = selectedValues => {
    this.setState({ selectedValues });
    this.props.onChange(selectedValues.filter(v => v !== ID_ALL));
  };

  render() {
    const { selectedValues } = this.state;
    const { config } = this.props;

    return (
      <div id="custom-muti-select">
        <Select
          mode="multiple"
          value={selectedValues}
          maxTagCount={this.maxTagCount}
          maxTagPlaceholder="..."
          onChange={this.onChangeHandler}
          onSelect={this.onSelectHandler}
          onDeselect={this.onDeselectHandler}
          {...{...defaultConfig, ...config}}
        >
          {this.renderOptions()}
        </Select>
      </div>
    );
  }
}
