import React, { useContext } from 'react';
import { List, Stepper } from 'antd-mobile';
import {ctx} from '../../context';
import './index.scss';

export default function Setting() {
  const {unreadIndex, unreadHot, setUnreadIndex, setUnreadHot} = useContext(ctx);

  return (
    <div className="setting_container">
      <div className="title">基本设置</div>
      <List>
        <List.Item wrap extra={
          <Stepper 
            showNumber
            min={0}
            value={unreadIndex}
            onChange={setUnreadIndex}
          />}
        >
          首页未读
        </List.Item>
        <List.Item extra={
          <Stepper
            showNumber
            min={0}
            value={unreadHot}
            onChange={setUnreadHot}
          />}
        >
          热门未读
        </List.Item>
      </List>

      <div className="tip">该设置项仅仅用于展示context功能，实践中几乎不会有这样的需求，不过需要使用相同处理方式的需求很多</div>
    </div>
  )
}