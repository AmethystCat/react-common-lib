---
title: 基本用法
order: 2
---

组件的基本用法。

```jsx
import { RadioCheckbox } from 'gatewayfe-lib';

const onChange = (value) => console.log(value);
const options = [{ label: '衰哥', value: 'boy' }, { label: '霉女', value: 'girl' }];

ReactDOM.render(<RadioCheckbox {...{ onChange, options }} />, mountNode);
```