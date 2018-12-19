---
title: CustomMutiSelect 自定义多选框
publishDate: 2018-12-05
cols: 1
tags:
  - react component
---

## API

组件的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| initialValues | 多选框初始值 | array | [] |
| values | 生成option的数据源**(必传)** | array | [] |
| config | Select支持的其它属性配置 | object | ```{ style: {width: 350}, placeholder: 'Please select an item', getPopupContainer: () => document.getElementById('custom-muti-select'), }``` |
| onChange | 多选框值改变时触发的回调函数 | (value) => void | () => void |