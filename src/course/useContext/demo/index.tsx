import React, {useContext} from 'react';
import {ctx, Provider} from './context';
import {Badge} from 'antd-mobile';
import ZhihuFeed from './components/ZhihuFeed';
import './index.scss';

function App() {
  const {tabIndex, setTabindex} = useContext(ctx);
  return (
    <div className="use_context_container">
      <div className="tab_wrapper">
        <Badge text={10} style={{ marginLeft: 42 }}>
          <div onClick={() => setTabindex(0)}>首页</div>
        </Badge>
        
        <Badge text={10} style={{ marginLeft: 42 }}>
          <div onClick={() => setTabindex(1)}>热门</div>
        </Badge>
        
      </div>

      {tabIndex === 0 && (
        <ZhihuFeed />
      )}

      {tabIndex === 1 && (
        <div>热门</div>
      )}
    </div>
  )
}

export default () => (
  <Provider>
    <App />
  </Provider>
)