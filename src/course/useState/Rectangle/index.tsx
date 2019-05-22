import React, { useState } from 'react';
import { Slider } from 'antd-mobile';
import './index.scss';

export default function Rectangle() {
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);

  const style = {
    width: `${width}px`,
    height: `${height}px`
  }

  return (
    <div className="container">
      <p>width:</p>
      <Slider
        max={300}
        min={10}
        onChange={(n) => setWidth(n || 0)}
      />
      <p>height:</p>
      <Slider
        max={300}
        min={10}
        onChange={(n) => setHeight(n || 0)}
      />
      <div className="reatangle" style={style} />
    </div>
  )
}