import React, { useContext } from 'react';
import { Button } from 'antd-mobile';
import { context, CounterProvider } from './context';
import { context as context2, CounterProvider as CounterProvider2 } from './context2';

function Counter() {
  const { counter = 0, increment, decrement } = useContext(context);
  const { counter: coutner2, increment: increment2, decrement: decrement2 } = useContext(context2);

  return (
    <div style={{ width: '200px', margin: 'auto' }}>
      <div style={{ width: '40px', margin: '100px auto', fontSize: '40px' }}>{counter}</div>
      <Button onClick={increment}>递增</Button>
      <Button onClick={decrement}>递减</Button>

      <div style={{ width: '40px', margin: '100px auto', fontSize: '40px' }}>{coutner2}</div>
      <Button onClick={increment2}>递增</Button>
      <Button onClick={decrement2}>递减</Button>
    </div>
  );
}

export default () => (
  <CounterProvider>
    <CounterProvider2>
      <Counter />
    </CounterProvider2>
  </CounterProvider>
);
