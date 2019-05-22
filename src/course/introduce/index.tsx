import React, { useState } from 'react';
import Counter from './controlledByHooks';

export default function Introduce() {
  const [count, setCount] = useState(0);

  return (
    <Counter value={count} onChange={setCount} />
  )
}