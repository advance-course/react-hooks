import React, { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return [
    <div key="a">{counter}</div>,
    <button key="b" onClick={() => setCounter(counter + 1)}>
      点击+1
    </button>
  ]
}