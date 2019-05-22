import React, { useState } from 'react';
import { Slider } from 'antd-mobile';
import './index.scss';

export default function Rectangle() {
  const [height, setHeight] = useState(10);
  const [width, setWidth] = useState(10);

  const style = {
    height: `${height}px`,
    width: `${width}px`
  }

  return (
    <div className="container">
      <p>height:</p>
      <Slider
        max={300}
        min={10}
        onChange={(n) => setHeight(n || 0)}
      />
      <p>width:</p>
      <Slider
        max={300}
        min={10}
        onChange={(n) => setWidth(n || 0)}
      />
      <div className="reatangle" style={style} />
    </div>
  )
}