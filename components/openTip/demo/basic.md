---
title: 基本用法
order: 2
---

组件的基本用法。

```jsx
import { OpenTip } from 'gatewayfe-lib';

const content = 'Hello react';

ReactDOM.render(<OpenTip {...{ content }} />, mountNode);
```

```css
.section-open-tip .anticon-info-circle-o:hover {
  color: red;
  cursor: pointer;
}
```