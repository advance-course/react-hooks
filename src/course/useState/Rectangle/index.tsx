import React, { useState } from 'react';
import { Slider } from 'antd-mobile';
import './index.scss';

interface Color {
  r: number,
  g: number,
  b: number
}

export default function Rectangle() {
  const [height, setHeight] = useState(10);
  const [width, setWidth] = useState(10);
  const [color, setColor] = useState<Color>({ r: 0, g: 0, b: 0 });
  const [radius, setRadius] = useState<number>(0);

  const style = {
    height: `${height}px`,
    width: `${width}px`,
    backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
    borderRadius: `${radius}px`
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

      <p>color: R:</p>
      <Slider
        max={255}
        min={0}
        onChange={(n = 0) => setColor({ ...color, r: n })}
      />

      <p>color: G:</p>
      <Slider
        max={255}
        min={0}
        onChange={(n = 0) => setColor({ ...color, g: n })}
      />

      <p>color: B:</p>
      <Slider
        max={255}
        min={0}
        onChange={(n = 0) => setColor({ ...color, b: n })}
      />
      <p>Radius:</p>
      <Slider
        max={150}
        min={0}
        onChange={(n = 0) => setRadius(n)}
      />
      <div className="reatangle" style={style} />
    </div>
  )
}