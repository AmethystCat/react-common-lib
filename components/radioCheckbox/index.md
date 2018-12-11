---
title: RadioCheckbox 可取消的单选框
publishDate: 2018-12-07
cols: 1
tags:
  - react component
---

## API

组件的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 单选框初始值 | string | - |
| options | 生成选项的数据源**(必传)** 同[antd的CheckGroup组件](https://ant.design/components/checkbox-cn/#Checkbox-Group) | array | [] |
| config | CheckGroup支持的其它属性配置。见[antd的CheckGroup组件](https://ant.design/components/checkbox-cn/#Checkbox-Group) | object | {} |
| onChange | 单选框值改变时触发的回调函数 | (value) => void | () => void |