import React, {useContext, useState} from 'react';
import {ctx, Provider} from './context';
import {Badge} from 'antd-mobile';
import Home from './components/Home';
import Hot from './components/Hot';
import Setting from './components/Setting';
import './index.scss';

function App() {
  const {unreadIndex, unreadHot} = useContext(ctx);
  const [tabIndex, setTabindex] = useState(0);
  
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
          <Home />
        )}

        {tabIndex === 1 && (
          <Hot />
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