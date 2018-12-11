---
title: 多个可选项
order: 2
---

支持两个以上的可选项和默认值。

```jsx
import { RadioCheckbox } from 'gatewayfe-lib';

const onChange = (value) => console.log(value);
const options = [
  { label: '东', value: 'E' },
  { label: '南', value: 'N' },
  { label: '西', value: 'W' },
  { label: '北', value: 'S' },
];
const value = 'N';

ReactDOM.render(<RadioCheckbox {...{ value, onChange, options }} />, mountNode);
```