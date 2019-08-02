import React, { useContext } from 'react';
import { Button } from 'antd-mobile';
import { contenxt, CounterProvider } from './context';

function Counter() {
  const { counter = 0, increment, decrement, reset } = useContext(contenxt);

  return (
    <div style={{ width: '200px', margin: 'auto' }}>
      <div style={{ width: '40px', margin: '100px auto', fontSize: '40px' }}>{counter}</div>
      <Button onClick={increment}>递增</Button>
      <Button onClick={decrement}>递减</Button>
      <Button onClick={reset}>重置</Button>
    </div>
  );
}

export default () => <CounterProvider><Counter /></CounterProvider>;