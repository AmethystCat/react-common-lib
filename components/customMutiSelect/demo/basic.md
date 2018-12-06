---
title: 基本用法
order: 2
---

组件的基本用法。

```jsx
import { CustomMutiSelect } from 'gatewayfe-lib';

const onChange = (value) => console.log(value);
const values = [
   {id: 1, name: 'item1'},
   {id: 2, name: 'item2'},
   {id: 3, name: 'item3'},
   {id: 4, name: 'item4'},
  ];

ReactDOM.render(<CustomMutiSelect {...{ onChange, values }} />, mountNode);
```