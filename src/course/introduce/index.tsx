import React, { useState } from 'react';
import Counter from './controlledByHooks';

export default function Introduce() {
  const [count, setCount] = useState(0);

  return (
    // @ts-ignore
    <Counter value={count} onChange={setCount} />
  )
}
