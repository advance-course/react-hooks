import React, {useContext} from 'react';
import {ctx, Provider} from './context';
import {Badge} from 'antd-mobile';
import ZhihuFeed from './components/ZhihuFeed';
import Blog from './components/Blog';
import Setting from './components/Setting';
import './index.scss';

function App() {
  const {tabIndex, setTabindex, unreadIndex, unreadHot} = useContext(ctx);
  return (
    <div className="use_context_container">
      <div className="tab_wrapper">
        <Badge text={unreadIndex} style={{ marginLeft: 42 }}>
          <div onClick={() => setTabindex(0)}>首页</div>
        </Badge>
        
        <Badge text={unreadHot} style={{ marginLeft: 42 }}>
          <div onClick={() => setTabindex(1)}>热门</div>
        </Badge>
        
        <div onClick={() => setTabindex(2)}>设置</div>
      </div>

      <div className="content_wrapper">
        {tabIndex === 0 && (
          <ZhihuFeed />
        )}

        {tabIndex === 1 && (
          <Blog />
        )}

        {tabIndex === 2 && (
          <Setting />
        )}
      </div>
    </div>
  )
}

export default () => (
  <Provider>
    <App />
  </Provider>
)