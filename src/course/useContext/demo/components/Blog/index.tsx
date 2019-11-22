import React, { useState, useEffect, useContext } from 'react';
import {topViewApi} from './api';
import { ActivityIndicator } from 'antd-mobile';
import { ctx } from '../../context';
import './style.scss';

// 执行如下指令，禁用chrome跨域限制
// open -a "Google Chrome" --args --disable-web-security  --user-data-dir

export default function ZhihuFeed() {
  const [feed, setFeed] = useState<string>();
  const {setUnreadHot} = useContext(ctx);

  useEffect(() => {
    setUnreadHot(0);
    topViewApi().then(res => {
      setFeed(res);
    })
  }, []);

  if (!feed) {
    return <div className="feed_container loading"><ActivityIndicator /></div>
  }
  
  return (
    <div className="blog_container" dangerouslySetInnerHTML={{__html: feed}}>
    </div>
  )
}