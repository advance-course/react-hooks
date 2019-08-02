import React, { useReducer } from 'react';
import { Button } from 'antd-mobile';

const initialState: number = 0;
const reduer = (state: number, action: string) => {
  switch(action) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'reset': return 0;
  }
}

export default function Counter() {
  // @ts-ignore
  const [counter, dispatch] = useReducer(reduer, initialState);

  return (
    <div style={{ width: '200px', margin: 'auto' }}>
      <div style={{ width: '40px', margin: '100px auto', fontSize: '40px' }}>{counter}</div>
      <Button onClick={() => dispatch('increment')}>递增</Button>
      <Button onClick={() => dispatch('decrement')}>递减</Button>
      <Button onClick={() => dispatch('reset')}>重置</Button>
    </div>
  );
}
