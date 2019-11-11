import React from 'react';
import usePointor from './usePointor';

export default function MousePos() {
  const {position, handleMouseMove} = usePointor();
  return (
    <div onMouseMove={handleMouseMove} style={{width: 500, height: 500}}>
      <div>x: {position.x}, y: {position.y}</div>
    </div>
  );
}
