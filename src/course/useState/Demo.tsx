import React, { useState, useEffect } from 'react';

function Demo() {
  const [counter, setCounter] = useState(0);
  const [pen, setPen] = useState(true);

  useEffect(() => {
    if (pen) {
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setPen(false);
    }
  }, [pen]);

  console.log(counter, pen);   // 点击之后仅执行一次，合成事件中，，即使是多个不同的State，也会进行合并

  return (
    <div onClick={() => setPen(true)}>click me!</div>
  )
}

export default Demo;
