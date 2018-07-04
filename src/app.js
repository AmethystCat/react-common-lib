import React from 'react';
import ReactDOM from 'react-dom';
import { Tag } from 'antd';

const HelloWorld = () => <h1><Tag color="volcano">Hello HC</Tag> 😋 🍱 🍛 🍲</h1>;

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
