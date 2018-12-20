webpackJsonp(["index"],{"6M3B":function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(\"GiK3\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(\"O27J\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _antd = __webpack_require__(\"nFWT\");\n\nvar _codePreview = __webpack_require__(\"erHT\");\n\nvar _codePreview2 = _interopRequireDefault(_codePreview);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar DemoItem = function (_React$PureComponent) {\n  _inherits(DemoItem, _React$PureComponent);\n\n  function DemoItem() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, DemoItem);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DemoItem.__proto__ || Object.getPrototypeOf(DemoItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      codeExpand: false\n    }, _this.setExpand = function (codeExpand) {\n      return _this.setState({ codeExpand: codeExpand });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(DemoItem, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      console.log('-----demoItem-----', this.props);\n      var codeExpand = this.state.codeExpand;\n      // demoData \u7684\u5168\u90e8\u5c5e\u6027\u89c1\u4e0b\n\n      var _props$demoData = this.props.demoData,\n          meta = _props$demoData.meta,\n          content = _props$demoData.content,\n          highlightedCode = _props$demoData.highlightedCode,\n          preview = _props$demoData.preview,\n          style = _props$demoData.style,\n          highlightedStyle = _props$demoData.highlightedStyle;\n      // \u4e3a\u4ec0\u4e48\u8981concat\u4e00\u4e2adiv?\n      // ps: \u5982\u679c\u4e0d\u8fd9\u6837\u5c31\u53ef\u80fd\u51fa\u9519\uff0c\u539f\u56e0\u662f\uff1a\n      // \u6709\u4e9bcontent\u7684\u5185\u5bb9\u683c\u5f0f\u7c7b\u4f3c\u4e3a\uff1a[[\"h2\", xxx, xxx, [xxx, xxx]]]\n      // \u5982\u679c\u662f\u4e0a\u9762\u7684\u683c\u5f0f\u4f1a\u5f15\u8d77jsonml.js\u62a5 'invalid JsonML' \u7684\u9519\u8bef\uff0c\u539f\u56e0\u662f\uff1a\n      // jsonml.js\u4e2d\u7684isElement\u7684\u6821\u9a8c\u903b\u8f91\u65e0\u6cd5\u901a\u8fc7\n      // isElement \u5224\u65adjsonml\u4e3a\u6570\u7ec4\u683c\u5f0f\u4e14\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e3a\u5b57\u7b26\u4e32\n      // function isElement(jml) {\n      //    return isArray(jml) && isString(jml[0]) || isString(jml);\n      // };\n\n      var introChildren = this.props.utils.toReactComponent(['div'].concat(content));\n\n      return _react2.default.createElement(\n        'section',\n        { className: 'demo-item-w' },\n        style ? _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: style } }) : null,\n        _react2.default.createElement(\n          _antd.Row,\n          { className: 'code-demo item' },\n          _react2.default.createElement(\n            _antd.Col,\n            null,\n            preview(_react2.default, _reactDom2.default)\n          )\n        ),\n        _react2.default.createElement(\n          _antd.Row,\n          { className: 'demo-desc item', style: { borderBottomStyle: codeExpand ? 'dashed' : 'solid' } },\n          _react2.default.createElement(\n            _antd.Col,\n            null,\n            _react2.default.createElement(\n              'h3',\n              { className: 'desc-title' },\n              meta.title\n            ),\n            _react2.default.createElement(\n              'section',\n              { className: 'desc-content' },\n              introChildren\n            ),\n            _react2.default.createElement(\n              _antd.Tooltip,\n              { title: codeExpand ? 'Hide Code' : 'Show Code' },\n              _react2.default.createElement(\n                'span',\n                { className: 'code-expand-icon' },\n                _react2.default.createElement('img', {\n                  alt: 'expand code',\n                  src: 'https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg',\n                  className: codeExpand ? 'code-expand-icon-hide' : 'code-expand-icon-show',\n                  onClick: function onClick() {\n                    return _this2.setExpand(true);\n                  }\n                }),\n                _react2.default.createElement('img', {\n                  alt: 'expand code',\n                  src: 'https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg',\n                  className: codeExpand ? 'code-expand-icon-show' : 'code-expand-icon-hide',\n                  onClick: function onClick() {\n                    return _this2.setExpand(false);\n                  }\n                })\n              )\n            )\n          )\n        ),\n        _react2.default.createElement(\n          _antd.Row,\n          { className: codeExpand ? \"code-pre item\" : \"code-pre item hide\" },\n          _react2.default.createElement(\n            _antd.Col,\n            { span: 24, className: 'demo-code' },\n            _react2.default.createElement(\n              _codePreview2.default,\n              null,\n              this.props.utils.toReactComponent(highlightedCode)\n            )\n          )\n        ),\n        highlightedStyle ? _react2.default.createElement(\n          _antd.Row,\n          { className: codeExpand ? \"code-css item\" : \"code-css item hide\" },\n          _react2.default.createElement(\n            _antd.Col,\n            null,\n            _react2.default.createElement(\n              'div',\n              { key: 'style', className: 'highlight' },\n              _react2.default.createElement(\n                'pre',\n                null,\n                _react2.default.createElement('code', { className: 'css', dangerouslySetInnerHTML: { __html: highlightedStyle } })\n              )\n            )\n          )\n        ) : null\n      );\n    }\n  }]);\n\n  return DemoItem;\n}(_react2.default.PureComponent);\n\nexports.default = DemoItem;\nmodule.exports = exports['default'];\n\n//////////////////\n// WEBPACK FOOTER\n// ./_theme/template/content/demoItem.jsx\n// module id = 6M3B\n// module chunks = index\n\n//# sourceURL=webpack:///./_theme/template/content/demoItem.jsx?")},Dgs9:function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__("GiK3");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _antd = __webpack_require__("nFWT");\n\nvar _collect = __webpack_require__("XTAw");\n\nvar _collect2 = _interopRequireDefault(_collect);\n\nvar _menu = __webpack_require__("ja+f");\n\nvar _menu2 = _interopRequireDefault(_menu);\n\nvar _content = __webpack_require__("KBtG");\n\nvar _content2 = _interopRequireDefault(_content);\n\n__webpack_require__("uRMb");\n\n__webpack_require__("b+AL");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Content = _antd.Layout.Content,\n    Sider = _antd.Layout.Sider;\n\nvar DocPanel = function (_React$PureComponent) {\n  _inherits(DocPanel, _React$PureComponent);\n\n  function DocPanel() {\n    _classCallCheck(this, DocPanel);\n\n    return _possibleConstructorReturn(this, (DocPanel.__proto__ || Object.getPrototypeOf(DocPanel)).apply(this, arguments));\n  }\n\n  _createClass(DocPanel, [{\n    key: \'render\',\n    value: function render() {\n      console.log(\'render this.props------\', this.props);\n      var _props = this.props,\n          pageData = _props.pageData,\n          utils = _props.utils,\n          data = _props.data,\n          params = _props.params,\n          picked = _props.picked,\n          demos = _props.demos;\n\n      console.log(\'render pageData------\', pageData);\n      console.log(\'render demos------\', demos);\n\n      return _react2.default.createElement(\n        \'section\',\n        { className: \'doc-main\' },\n        _react2.default.createElement(\n          _antd.Layout,\n          null,\n          _react2.default.createElement(\n            Sider,\n            { theme: \'light\', width: \'300\' },\n            _react2.default.createElement(_menu2.default, { data: data, md: picked, currentRoute: params.name })\n          ),\n          _react2.default.createElement(\n            Content,\n            null,\n            _react2.default.createElement(\n              \'section\',\n              { className: \'doc-content\' },\n              _react2.default.createElement(_content2.default, { pageData: pageData, demos: demos, utils: utils })\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return DocPanel;\n}(_react2.default.PureComponent);\n\n// export default DocPanel;\n\nexports.default = (0, _collect2.default)(function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(nextProps) {\n    var pathname, pageDataPath, pageData, demosFetcher, pageDataPromise, _ref2, _ref3, pageIndexData, demos;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log(\'collect argument-------\', nextProps);\n            pathname = nextProps.location.pathname;\n            pageDataPath = pathname.split(\'/\');\n            pageData = nextProps.utils.get(nextProps.data, pageDataPath);\n            // \u5fc5\u987b\u662f...pageDataPath\uff0c \u5426\u5219demosFetcher\u4e3aundefine\uff0c\u4e0d\u77e5\u9053\u4e3a\u4f55\uff0c\u4ee5\u540e\u518d\u7814\u7a76\n\n            demosFetcher = nextProps.utils.get(nextProps.data, [].concat(_toConsumableArray(pageDataPath), [\'demo\']));\n            pageDataPromise = typeof pageData === \'function\' ? pageData() : pageData.index();\n\n            if (nextProps.pageData) {\n              _context.next = 8;\n              break;\n            }\n\n            throw 404;\n\n          case 8:\n            if (!demosFetcher) {\n              _context.next = 16;\n              break;\n            }\n\n            _context.next = 11;\n            return Promise.all([pageDataPromise, demosFetcher()]);\n\n          case 11:\n            _ref2 = _context.sent;\n            _ref3 = _slicedToArray(_ref2, 2);\n            pageIndexData = _ref3[0];\n            demos = _ref3[1];\n            return _context.abrupt(\'return\', { pageData: pageIndexData, demos: demos });\n\n          case 16:\n            _context.next = 18;\n            return pageDataPromise;\n\n          case 18:\n            _context.t0 = _context.sent;\n            return _context.abrupt(\'return\', {\n              pageData: _context.t0\n            });\n\n          case 20:\n          case \'end\':\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}())(DocPanel);\nmodule.exports = exports[\'default\'];\n\n//////////////////\n// WEBPACK FOOTER\n// ./_theme/template/panel.jsx\n// module id = Dgs9\n// module chunks = index\n\n//# sourceURL=webpack:///./_theme/template/panel.jsx?')},Dzuc:function(module,exports,__webpack_require__){eval('var map = {\n\t"./template/NotFound": "E6Kb",\n\t"./template/NotFound.jsx": "E6Kb",\n\t"./template/content": "KBtG",\n\t"./template/content/": "KBtG",\n\t"./template/content/codePreview": "erHT",\n\t"./template/content/codePreview.jsx": "erHT",\n\t"./template/content/demoItem": "6M3B",\n\t"./template/content/demoItem.jsx": "6M3B",\n\t"./template/content/index": "KBtG",\n\t"./template/content/index.jsx": "KBtG",\n\t"./template/home": "cddq",\n\t"./template/home.jsx": "cddq",\n\t"./template/menu": "ja+f",\n\t"./template/menu.jsx": "ja+f",\n\t"./template/panel": "Dgs9",\n\t"./template/panel.jsx": "Dgs9"\n};\nfunction webpackContext(req) {\n\treturn __webpack_require__(webpackContextResolve(req));\n};\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) // check for number or string\n\t\tthrow new Error("Cannot find module \'" + req + "\'.");\n\treturn id;\n};\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = "Dzuc";\n\n//////////////////\n// WEBPACK FOOTER\n// ./_theme ^\\.\\/template.*$\n// module id = Dzuc\n// module chunks = index\n\n//# sourceURL=webpack:///./_theme_^\\.\\/template.*$?')},E6Kb:function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _react = __webpack_require__("GiK3");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (props) {\n  return _react2.default.createElement(\n    "h1",\n    { className: "entry-title" },\n    "404 Not Found!"\n  );\n};\n\nmodule.exports = exports["default"];\n\n//////////////////\n// WEBPACK FOOTER\n// ./_theme/template/NotFound.jsx\n// module id = E6Kb\n// module chunks = index\n\n//# sourceURL=webpack:///./_theme/template/NotFound.jsx?')},KBtG:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(\"GiK3\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _antd = __webpack_require__(\"nFWT\");\n\nvar _demoItem = __webpack_require__(\"6M3B\");\n\nvar _demoItem2 = _interopRequireDefault(_demoItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar DemoDoc = function (_React$PureComponent) {\n  _inherits(DemoDoc, _React$PureComponent);\n\n  function DemoDoc() {\n    _classCallCheck(this, DemoDoc);\n\n    return _possibleConstructorReturn(this, (DemoDoc.__proto__ || Object.getPrototypeOf(DemoDoc)).apply(this, arguments));\n  }\n\n  _createClass(DemoDoc, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          pageData = _props.pageData,\n          utils = _props.utils,\n          _props$demos = _props.demos,\n          demos = _props$demos === undefined ? {} : _props$demos;\n      var description = pageData.description,\n          api = pageData.api;\n\n      var demoKeys = Object.keys(demos);\n      // \u5224\u65ad\u662f\u5426\u662f\u5355\u5217\n      var isSingleCol = pageData.meta.cols === 1;\n      var leftColChildren = [];\n      var rightColChildren = [];\n\n      demoKeys.forEach(function (key, index) {\n        var demoElem = _react2.default.createElement(_demoItem2.default, { key: demos[key].meta.filename, demoData: demos[key], utils: utils });\n        index % 2 === 0 || isSingleCol ? leftColChildren.push(demoElem) : rightColChildren.push(demoElem);\n      });\n\n      return _react2.default.createElement(\n        'section',\n        { className: 'demo-wrapper' },\n        _react2.default.createElement(\n          'h2',\n          null,\n          '\\u4EE3\\u7801\\u6F14\\u793A ',\n          _react2.default.createElement(_antd.Icon, { type: 'code' })\n        ),\n        _react2.default.createElement(\n          _antd.Row,\n          { gutter: 16 },\n          _react2.default.createElement(\n            _antd.Col,\n            { span: isSingleCol ? 24 : 12 },\n            leftColChildren\n          ),\n          isSingleCol ? null : _react2.default.createElement(\n            _antd.Col,\n            { span: 12 },\n            rightColChildren\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          null,\n          description && utils.toReactComponent(description)\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'markdown api-container' },\n          api && utils.toReactComponent(api)\n        )\n      );\n    }\n  }]);\n\n  return DemoDoc;\n}(_react2.default.PureComponent);\n\nexports.default = DemoDoc;\nmodule.exports = exports['default'];\n\n//////////////////\n// WEBPACK FOOTER\n// ./_theme/template/content/index.jsx\n// module id = KBtG\n// module chunks = index\n\n//# sourceURL=webpack:///./_theme/template/content/index.jsx?")},UVIz:function(module,exports){eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/nprogress/nprogress.css\n// module id = UVIz\n// module chunks = index\n\n//# sourceURL=webpack:///./node_modules/nprogress/nprogress.css?")},"b+AL":function(module,exports){eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./_theme/assets/index.less\n// module id = b+AL\n// module chunks = index\n\n//# sourceURL=webpack:///./_theme/assets/index.less?")},cddq:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(\"GiK3\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home() {\n  return _react2.default.createElement(\n    'h2',\n    null,\n    'hello hc [\\u9884\\u7559\\u7684\\u9759\\u6001\\u7F51\\u7AD9\\u7684\\u5165\\u53E3]'\n  );\n};\n\nexports.default = Home;\nmodule.exports = exports['default'];\n\n//////////////////\n// WEBPACK FOOTER\n// ./_theme/template/home.jsx\n// module id = cddq\n// module chunks = index\n\n//# sourceURL=webpack:///./_theme/template/home.jsx?")},erHT:function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _react = __webpack_require__("GiK3");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar CodePreview = function CodePreview(props) {\n  return _react2.default.createElement(\n    "div",\n    { className: "code-preview" },\n    props.children\n  );\n};\n\nexports.default = CodePreview;\nmodule.exports = exports["default"];\n\n//////////////////\n// WEBPACK FOOTER\n// ./_theme/template/content/codePreview.jsx\n// module id = erHT\n// module chunks = index\n\n//# sourceURL=webpack:///./_theme/template/content/codePreview.jsx?')},"ja+f":function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(\"GiK3\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _antd = __webpack_require__(\"nFWT\");\n\nvar _router = __webpack_require__(\"aPCg\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// const KEY_ARTICLES = 'articles';\nvar KEY_COMPONENTS = 'components';\n// TODO\n// Link\u5f15\u7528\u65b9\u5f0f\uff0c\u53c2\u7167antd\u9879\u76ee\u6e90\u7801\u4e2d\u7684\u5f15\u7528\uff0c\u5426\u5219\u4f1a\u6709\u95ee\u9898\uff0c\u540e\u7eed\u8865\u5145\u7406\u7531\n\nvar MenuItem = _antd.Menu.Item;\nvar SubMenu = _antd.Menu.SubMenu;\nvar getLink = function getLink(meta) {\n  var filename = meta.filename,\n      title = meta.title;\n\n  var link = '/' + filename.slice(0, filename.indexOf('index.md') - 1);\n\n  return _react2.default.createElement(\n    _router.Link,\n    { to: link },\n    title\n  );\n};\n\nvar DocMenu = function DocMenu(_ref) {\n  var _ref$data = _ref.data,\n      data = _ref$data === undefined ? {} : _ref$data,\n      currentRoute = _ref.currentRoute,\n      _ref$md = _ref.md,\n      md = _ref$md === undefined ? {} : _ref$md;\n\n  if (Object.keys(md).length === 0) return null;\n  var demoKeys = Object.keys(data[KEY_COMPONENTS]).filter(function (k) {\n    return !!data[KEY_COMPONENTS][k].demo;\n  });\n  var defaultSelectedKey = [currentRoute || demoKeys[0]];\n  var menuMap = {};\n\n  demoKeys.forEach(function (k) {\n    var matchedMd = md[KEY_COMPONENTS].find(function (m) {\n      return m.meta.filename.indexOf(k) > -1;\n    });\n    if (matchedMd) {\n      menuMap[k] = matchedMd.meta;\n    }\n  });\n\n  // console.log(menuMap);\n\n  return _react2.default.createElement(\n    _antd.Menu,\n    { defaultSelectedKeys: defaultSelectedKey, defaultOpenKeys: ['sub1'], mode: 'inline', className: 'doc-sub-menu' },\n    _react2.default.createElement(\n      SubMenu,\n      { key: 'sub1', title: 'GatewayLib Components' },\n      demoKeys.map(function (k) {\n        return _react2.default.createElement(\n          MenuItem,\n          { key: k },\n          getLink(menuMap[k])\n        );\n      })\n    )\n  );\n};\n\nexports.default = DocMenu;\nmodule.exports = exports['default'];\n\n//////////////////\n// WEBPACK FOOTER\n// ./_theme/template/menu.jsx\n// module id = ja+f\n// module chunks = index\n\n//# sourceURL=webpack:///./_theme/template/menu.jsx?")},uRMb:function(module,exports){eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/antd/dist/antd.css\n// module id = uRMb\n// module chunks = index\n\n//# sourceURL=webpack:///./node_modules/antd/dist/antd.css?")},y2so:function(module,exports){eval('module.exports = {"name":"antd","version":"3.8.2","title":"Ant Design","description":"An enterprise-class UI design language and React-based implementation","homepage":"http://ant.design/","keywords":["ant","design","react","react-component","component","components","ui","framework","frontend"],"contributors":["ant"],"repository":{"type":"git","url":"https://github.com/ant-design/ant-design"},"bugs":{"url":"https://github.com/ant-design/ant-design/issues"},"main":"lib/index.js","module":"es/index.js","files":["dist","lib","es"],"typings":"lib/index.d.ts","license":"MIT","peerDependencies":{"react":">=16.0.0","react-dom":">=16.0.0"},"dependencies":{"array-tree-filter":"^2.0.0","babel-runtime":"6.x","classnames":"~2.2.0","create-react-class":"^15.6.0","create-react-context":"^0.2.2","css-animation":"^1.2.5","dom-closest":"^0.2.0","enquire.js":"^2.1.1","intersperse":"^1.0.0","lodash":"^4.17.5","moment":"^2.19.3","omit.js":"^1.0.0","prop-types":"^15.5.7","raf":"^3.4.0","rc-animate":"^2.4.1","rc-calendar":"~9.6.0","rc-cascader":"~0.14.0","rc-checkbox":"~2.1.5","rc-collapse":"~1.9.0","rc-dialog":"~7.2.0","rc-drawer":"~1.7.3","rc-dropdown":"~2.2.0","rc-editor-mention":"^1.0.2","rc-form":"^2.1.0","rc-input-number":"~4.0.0","rc-menu":"~7.0.2","rc-notification":"~3.2.0","rc-pagination":"~1.16.1","rc-progress":"~2.2.2","rc-rate":"~2.4.0","rc-select":"~8.1.1","rc-slider":"~8.6.0","rc-steps":"~3.1.0","rc-switch":"~1.6.0","rc-table":"~6.2.0","rc-tabs":"~9.3.3","rc-time-picker":"~3.3.0","rc-tooltip":"~3.7.0","rc-tree":"~1.14.3","rc-tree-select":"~2.1.0","rc-trigger":"^2.5.4","rc-upload":"~2.5.0","rc-util":"^4.0.4","react-lazy-load":"^3.0.12","react-lifecycles-compat":"^3.0.2","react-slick":"~0.23.1","shallowequal":"^1.0.1","warning":"~4.0.1"},"devDependencies":{"@babel/types":"7.0.0-beta.44","@types/classnames":"^2.2.6","@types/prop-types":"^15.5.4","@types/react":"^16.0.0","@types/react-dom":"^16.0.0","@types/react-slick":"^0.23.2","@yesmeck/offline-plugin":"^5.0.5","ansi-styles":"^3.2.0","ant-design-palettes":"^1.0.0","antd-theme-generator":"1.0.7","antd-tools":"^5.1.6","babel-cli":"^6.18.0","babel-eslint":"^8.2.5","babel-plugin-import":"^1.0.0","babel-plugin-transform-runtime":"^6.23.0","babel-preset-es2015":"^6.18.0","babel-preset-react":"^6.16.0","babel-preset-stage-0":"^6.16.0","bezier-easing":"^2.0.3","bisheng":"^0.28.0","bisheng-plugin-antd":"^0.16.0","bisheng-plugin-description":"^0.1.1","bisheng-plugin-react":"^0.6.0","bisheng-plugin-toc":"^0.4.0","commander":"^2.11.0","cross-env":"^5.0.3","css-split-webpack-plugin":"^0.2.3","dekko":"^0.2.0","delegate":"^3.1.2","docsearch.js":"^2.5.2","dora-plugin-upload":"^0.3.1","enquire-js":"^0.2.1","enzyme":"^3.1.0","enzyme-adapter-react-16":"^1.0.0","enzyme-to-json":"^3.1.2","eslint":"^5.1.0","eslint-config-airbnb":"^17.0.0","eslint-plugin-babel":"^5.0.0","eslint-plugin-import":"^2.2.0","eslint-plugin-jsx-a11y":"6.1.1","eslint-plugin-markdown":"~1.0.0-beta.4","eslint-plugin-react":"^7.10.0","eslint-tinker":"^0.5.0","fetch-jsonp":"^1.0.3","glob":"^7.1.1","immutability-helper":"^2.5.0","intersection-observer":"^0.5.0","jest":"^23.2.0","jsdom":"^11.12.0","jsonml.js":"^0.1.0","lint-staged":"^7.0.0","lz-string":"^1.4.4","majo":"^0.6.2","mockdate":"^2.0.1","moment-timezone":"^0.5.5","pre-commit":"^1.2.2","preact":"^8.2.5","preact-compat":"^3.17.0","querystring":"^0.2.0","rc-queue-anim":"^1.4.1","rc-scroll-anim":"^2.2.1","rc-tween-one":"^2.0.1","react":"^16.3.2","react-color":"^2.11.7","react-copy-to-clipboard":"^5.0.0","react-dnd":"^5.0.0","react-dnd-html5-backend":"^5.0.1","react-document-title":"^2.0.1","react-dom":"^16.3.2","react-github-button":"^0.1.1","react-infinite-scroller":"^1.0.15","react-intl":"^2.0.1","react-resizable":"^1.7.5","react-router-dom":"^4.2.2","react-sublime-video":"^0.2.0","react-virtualized":"~9.20.0","remark-frontmatter":"^1.1.0","remark-parse":"^5.0.0","remark-stringify":"^5.0.0","remark-yaml-config":"^4.0.1","reqwest":"^2.0.5","rimraf":"^2.5.4","scrollama":"^1.4.1","stylelint":"9.4.0","stylelint-config-standard":"^18.0.0","typescript":"~3.0.1","unified":"^7.0.0","values.js":"^1.0.3","webpackbar":"^2.6.1","xhr-mock":"^2.4.0","xhr2":"^0.1.3"},"scripts":{"test":"jest --config .jest.js","test-node":"jest --config .jest.node.js","test-all":"./scripts/test-all.sh","lint":"npm run lint:ts && npm run lint:es && npm run lint:demo && npm run lint:style","lint:ts":"npm run tsc && antd-tools run ts-lint","lint:es":"eslint tests site scripts components ./.*.js ./webpack.config.js --ext \'.js,.jsx\'","lint:demo":"cross-env RUN_ENV=DEMO eslint components/*/demo/*.md --ext \'.md\'","lint:style":"stylelint \\"{site,components}/**/*.less\\" --syntax less","lint-fix:ts":"npm run tsc && antd-tools run ts-lint-fix","lint-fix":"npm run lint-fix:code && npm run lint-fix:demo","lint-fix:code":"eslint --fix tests site scripts components ./.*.js ./webpack.config.js --ext \'.js,.jsx\'","lint-fix:demo":"eslint-tinker ./components/*/demo/*.md","sort-api":"node ./scripts/sort-api-table.js","dist":"antd-tools run dist","compile":"antd-tools run compile","tsc":"tsc","start":"rimraf _site && mkdir _site && node ./scripts/generateColorLess.js && cross-env NODE_ENV=development bisheng start -c ./site/bisheng.config.js","start:preact":"node ./scripts/generateColorLess.js && cross-env NODE_ENV=development REACT_ENV=preact bisheng start -c ./site/bisheng.config.js","site":"cross-env NODE_ENV=production bisheng build --ssr -c ./site/bisheng.config.js && node ./scripts/generateColorLess.js","predeploy":"antd-tools run clean && npm run site && cp netlify.toml _site && cp -r .circleci _site","deploy":"bisheng gh-pages --push-only","pub":"antd-tools run pub","prepublish":"antd-tools run guard","pre-publish":"npm run test-all && node ./scripts/prepub","authors":"git log --format=\'%aN <%aE>\' | sort -u | grep -v \'users.noreply.github.com\' | grep -v \'gitter.im\' | grep -v \'.local>\' | grep -v \'alibaba-inc.com\' | grep -v \'alipay.com\' | grep -v \'taobao.com\' > AUTHORS.txt","lint-staged":"lint-staged","lint-staged:ts":"tsc && node node_modules/tslint/bin/tslint","lint-staged:es":"eslint ./.*.js ./webpack.config.js","lint-staged:demo":"cross-env RUN_ENV=DEMO eslint --ext \'.md\'"},"lint-staged":{"components/**/*.tsx":["npm run lint-staged:ts"],"{tests,site,scripts,components}/**/*.{js,jsx}":["npm run lint-staged:es"],"{site,components}/**/*.less":"stylelint --syntax less","components/*/demo/*.md":["npm run lint-staged:demo"]},"pre-commit":["lint-staged"],"sideEffects":["dist/*","es/**/style/*","lib/**/style/*"]}\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/antd/package.json\n// module id = y2so\n// module chunks = index\n\n//# sourceURL=webpack:///./node_modules/antd/package.json?')}},["6Q9c"]);