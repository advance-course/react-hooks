import Mouse from './Mouse';

import React from 'react';

export default function MousePos() {
  return (
    <div>
      <Mouse 
        render={({ x, y }) => (
          <div>x: {x}, y: {y}</div>
        )}
      />
    </div>
  )
}