---
title: '自定义表单'
---

作为自定义表单在ant Form中使用的场景

```jsx
import { AddressCascader } from 'gatewayfe-lib';
import { Form, Button } from 'antd';

const FormItem = Form.Item;

class Demo extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(values);
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const address = { provinceCode: '12', cityCode: '1201', districtCode: '120101' };
    const cascaderConfig = {
      style: {
        width: 300
      }
    };

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('address', {
            initialValue: address
          })(<AddressCascader {...{ cascaderConfig }} />)}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedDemo = Form.create()(Demo);

ReactDOM.render(<WrappedDemo />, mountNode);
```
