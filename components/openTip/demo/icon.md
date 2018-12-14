---
title: 图标定制
order: 2
---

通过iconConfig属性定制不同的图标，可选图标为[ant icon](https://ant.design/components/icon-cn/)中的图标，属性通ant icon保持一致。

```jsx
import { OpenTip } from 'gatewayfe-lib';

const content = '🍱🍛🍲🍻😋👏📱';
const title = '日常🌄';
const iconConfig = {
  type: 'smile'
};

ReactDOM.render(
  <div className="custom-icon">
    <OpenTip {...{ title, content, iconConfig }} />
  </div>,
  mountNode);
```

```css
.custom-icon .anticon {
  font-size: 36px;
}

.section-open-tip .anticon-smile:hover {
  color: red;
  cursor: pointer;
}
```