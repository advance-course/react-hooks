import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './course/introduce/demoByClass'; 简单对比demo
// import App from './course/introduce/demoByHooks'; 简单对比demo
// import App from './course/introduce'; 对比受控组件
// import App from './course/useState/Rectangle';  useState demo
// import App from './course/useEffect/demo01';
// import App from './course/useEffect/demo02';
// import App from './course/useEffect/demo03';
// import App from './course/customHooks/app';
// import App from './course/useContext';
// import App from './course/useReducer';
// import App from './course/useContextWithReducer';

// 比较两个数组是否相等
// import App from './course/customHooks/EqualArrPlus';

// 获取知乎日报最新列表
import App from './course/customHooks/ZhihuFeed';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
