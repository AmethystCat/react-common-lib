---
title: 基本用法
order: 2
---

组件的基本用法。

```jsx
import { AddressCascader } from 'gatewayfe-lib';

const onChange = (value) => console.log(value);
const cascaderConfig = {
  style: {
    width: 300,
  },
};

ReactDOM.render(<AddressCascader {...{cascaderConfig, onChange}} />, mountNode);
```
