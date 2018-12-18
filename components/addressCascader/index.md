---
title: AddressCascader 省市区级联
publishDate: 2018-11-19
cols: 2
tags:
  - react component
---

## API

组件的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 级联选择框的内容<br />格式为：<br />```{provinceCode: xxx, cityCode: xxx, districtCode: xxx}``` | object | {} |
| cascaderConfig | [ant cascader](https://ant.design/components/cascader-cn/#API) 支持的配置| object | {} |
| onChange | 级联选择完后触发的回调函数 | (value) => void | () => void |