import React, { useReducer } from 'react';
import { Button } from 'antd-mobile';
import reducer from './reducer';

export default function Counter() {
  const [counter, dispatch] = useReducer(reducer, reducer());
  console.log(counter);

  return (
    <div style={{ width: '200px', margin: 'auto' }}>
      <div style={{ width: '40px', margin: '100px auto', fontSize: '40px' }}>{counter.reducerA}</div>
      <Button onClick={() => dispatch({type: 'incrementA', payload: 10})}>递增A</Button>
      <Button onClick={() => dispatch({type: 'decrementA', payload: 10})}>递减A</Button>
      <div style={{ width: '40px', margin: '100px auto', fontSize: '40px' }}>{counter.reducerB}</div>
      <Button onClick={() => dispatch({type: 'incrementB', payload: 10})}>递增B</Button>
      <Button onClick={() => dispatch({type: 'decrementB', payload: 10})}>递减B</Button>
    </div>
  );
}
